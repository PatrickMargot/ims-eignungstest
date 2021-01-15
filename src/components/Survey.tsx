import React, { FunctionComponent, useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { PieChart, Pie, Cell } from "recharts";

import RadioButtonForm from "./RadioButtonForm";
import CodingChallenge from "./CodingChallenge";

import firebase from "firebase/app";
import "firebase/database";

const useStyles = makeStyles(theme => ({
  root: {},
  currentFormContainer: {
    flexGrow: 1,
  },
  result: {
    height: "100%",
  },
}));

type Props = {
  questions: any[];
};

const Survey: FunctionComponent<Props> = ({ questions }) => {
  const initialSelectedOptions = questions.reduce(
    (acc, question) => ({ ...acc, [question.questionId]: { text: "" } }),
    {}
  );

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const localValue = localStorage.getItem("SELECTED-OPTIONS");

    return localValue !== null
      ? JSON.parse(localValue)
      : initialSelectedOptions;
  });

  const classes = useStyles();
  const theme = useTheme();
  const screenIsXs = useMediaQuery(theme.breakpoints.down("xs"));

  const everyOptionHasAValue = Object.values(selectedOptions).every(
    (option: any) => option.value !== undefined
  );
  useEffect(() => {
    localStorage.setItem("SELECTED-OPTIONS", JSON.stringify(selectedOptions));

    window.onbeforeunload = e => {
      if (!everyOptionHasAValue) {
        const numberOfQuestionsAnswered = Object.values(selectedOptions).filter(
          (option: any) => option.value !== undefined
        ).length;

        firebase
          .database()
          .ref("/cancellations")
          .set(
            firebase.database.ServerValue.increment(numberOfQuestionsAnswered)
          );
      }
    };
  }, [selectedOptions]);

  let numberOfWeightedQuestions = questions.length;

  const resultPercentage =
    everyOptionHasAValue &&
    Math.round(
      (Object.entries(selectedOptions).reduce(
        (acc, [questionId, option]: [string, any]) => {
          const { options } = questions.find(
            question => questionId === question.questionId.toString()
          ).optionGroup;

          const highestValue = Math.max(...options.map(({ value }) => value));
          if (option.value === -1) {
            numberOfWeightedQuestions--;
            return acc;
          } else {
            return acc + option.value / highestValue;
          }
        },
        0
      ) /
        numberOfWeightedQuestions) *
        100
    );

  const getResultData = percentage => {
    if (percentage >= 83)
      return {
        message: "Die Informatikmittelschule ist das richtige für Sie.",
        color: "#4caf50",
      };

    if (percentage >= 67)
      return {
        message: "Die Informatikmittelschule ist eine gute Option für Sie.",
        color: "#8bc34a",
      };

    if (percentage >= 50)
      return {
        message: "Die Informatikmittelschule könnte für Sie sein.",
        color: "#dce775",
      };

    if (percentage >= 33)
      return {
        message: "Die Informatikmittelschule passt eher weniger zu Ihnen.",
        color: "#ffd54f",
      };

    if (percentage >= 17)
      return {
        message:
          "Die Informatikmittelschule ist eine eher schlechtere Option für Sie.",
        color: "#ffb74d",
      };

    return {
      message: "Die Informatikmittelschule passt gar nicht zu Ihnen.",
      color: "#f44336",
    };
  };

  const resultCircleRadius = 110;

  const forms = [
    ...questions.flatMap(
      (
        {
          questionId,
          optionGroup,
          type,
          text,
          code,
          challengeInfo,
          challengeTitle,
        },
        index
      ) => {
        const selectedOption = selectedOptions[questionId];

        const form = {
          questionId: questionId,
          component: (
            <RadioButtonForm
              title={text}
              value={selectedOption.text}
              disabled={everyOptionHasAValue}
              options={optionGroup.options.map(({ text }) => text)}
              handleChange={value => {
                const option = optionGroup.options.find(
                  option => option.text === value
                );

                const newSelectedOptions = {
                  ...selectedOptions,
                  [questionId]: option,
                };

                setSelectedOptions(newSelectedOptions);

                if (index === questions.length - 1) {
                  const answers = firebase.database().ref("/answers");

                  Object.entries(newSelectedOptions).forEach(
                    ([questionId, option]: [string, any]) => {
                      answers.push(
                        {
                          questionId: parseInt(questionId),
                          optionId: option.optionId,
                        },
                        err =>
                          console.log(
                            err ? "error while pushing" : "successful push"
                          )
                      );
                    }
                  );
                }
              }}
            />
          ),
        };

        return type === "codingChallenge"
          ? [
              {
                questionId: null,
                component: (
                  <CodingChallenge
                    code={code}
                    challengeInfo={challengeInfo}
                    challengeTitle={challengeTitle}
                  />
                ),
              },
              form,
            ]
          : form;
      }
    ),
    {
      questionId: null,
      component: resultPercentage !== false && (
        <Grid
          className={classes.result}
          container
          direction="column"
          justify="space-evenly"
        >
          <Typography variant={screenIsXs ? "h5" : "h4"} align="center">
            Sie haben {resultPercentage}% erreicht.{" "}
            {getResultData(resultPercentage).message}
          </Typography>
          <Grid container justify="center">
            <Grid item>
              <PieChart
                width={2 * resultCircleRadius + 1}
                height={2 * resultCircleRadius + 1}
                compact
              >
                <Pie
                  stroke={"none"}
                  dataKey="value"
                  data={[
                    { value: resultPercentage },
                    { value: 100 - resultPercentage },
                  ]}
                  outerRadius={resultCircleRadius}
                  startAngle={90}
                  endAngle={-270}
                >
                  <Cell fill={getResultData(resultPercentage).color} />
                  <Cell fill={theme.palette.action.disabledBackground} />
                </Pie>
              </PieChart>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Button
              color="primary"
              onClick={() => {
                setSelectedOptions(initialSelectedOptions);
                setActiveStep(0);
              }}
            >
              test wiederholen
            </Button>
          </Grid>
        </Grid>
      ),
    },
  ];

  const lastFilledQuestionIdAndOption = Object.entries(selectedOptions)
    .reverse()
    .find(([questionId, option]: [string, any]) => option.text !== "");

  const initialActiveStep = lastFilledQuestionIdAndOption
    ? forms.findIndex(
        ({ questionId }) =>
          questionId !== null &&
          questionId.toString() === lastFilledQuestionIdAndOption[0]
      )
    : 0;

  const [activeStep, setActiveStep] = useState(initialActiveStep);

  const currentQuestionId = forms[activeStep].questionId;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (
      selectedOptions[currentQuestionId] &&
      selectedOptions[currentQuestionId].text !== ""
    ) {
      setActiveStep(activeStep + 1);
    }
  }, [
    Object.values(selectedOptions).filter(
      (selectedOption: any) => selectedOption.text !== ""
    ).length,
  ]);

  return (
    <Grid container direction="column">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={classes.currentFormContainer}
          key={activeStep}
        >
          {forms[activeStep].component}
        </motion.div>
      </AnimatePresence>
      <Grid item>
        <MobileStepper
          variant="progress"
          steps={forms.length}
          position="static"
          activeStep={activeStep}
          backButton={
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            </Button>
          }
          nextButton={
            <Button
              onClick={handleNext}
              disabled={
                activeStep === forms.length - 1 ||
                (currentQuestionId !== null &&
                  selectedOptions[currentQuestionId].text === "")
              }
            >
              <KeyboardArrowRight />
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Survey;
