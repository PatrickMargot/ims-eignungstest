import React, { useState, useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import { PieChart, Pie, Legend, Cell } from "recharts";

import firebase from "firebase/app";
import "firebase/database";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  csvLink: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chartCard: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const RADIAN = Math.PI / 180;

const renderLabels: any = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={"white"}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {percent > 0 ? `${(percent * 100).toFixed(0)}%` : ""}
    </text>
  );
};

function Statistics() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [optionGroups, setOptionGroups] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);
  const [cancellations, setCancellations] = useState(null);
  const classes = useStyles();
  const database = firebase.database();

  const theme = useTheme();
  const screenIsXs = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    const tables = [
      { directory: "/questions", setter: setQuestions },
      { directory: "/optionGroups", setter: setOptionGroups },
      { directory: "/answers", setter: setAnswers },
      { directory: "/cancellations", setter: setCancellations },
    ];

    tables.forEach(({ directory, setter }) => {
      database.ref(directory).on("value", snapshot => {
        const data = snapshot.val();

        setter(
          !Array.isArray(data) && typeof data === "object"
            ? Object.values(data)
            : data
        );
      });
    });
  }, []);

  const chartPieRadius = screenIsXs ? 120 : 180;

  const stats = [
    // { title: "Seitenaufrufe", value: 100000 },
    // { title: "Besucher", value: 100000 },
    {
      title: "durchgeführte Tests",
      value:
        questions.length > 0 && answers.length > 0
          ? Math.floor(answers.length / questions.length)
          : "-",
    },
    {
      title: "Testabbrüche pro Item",
      value: cancellations === null ? "-" : cancellations,
    },
  ];

  const csvData = [
    [
      "Fragen",
      "Trifft zu",
      "Trifft eher zu",
      "Trifft eher nicht zu",
      "Trifft nicht zu",
      "Weiss nicht",
    ],
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {stats.map(({ title, value }) => (
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography gutterBottom color="textSecondary">
                  {title}
                </Typography>
                <Typography variant={screenIsXs ? "h5" : "h4"}>
                  {value?.toLocaleString("de-CH")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {questions.length > 0 &&
          optionGroups.length > 0 &&
          answers.length > 0 &&
          questions.map(({ questionId, optionGroupId, text }) => {
            const optionGroup: any = optionGroups.find(
              (optionGroup: any) => optionGroupId === optionGroup.optionGroupId
            );

            const palette = [
              "#8bc34a",
              "#42a5f5",
              "#ab47bc",
              "#f44336",
              "#b34700",
            ];

            const data = optionGroup.options.map(({ optionId, text }, i) => {
              const answersToOption = answers.filter(
                (answer: any) =>
                  questionId === answer.questionId &&
                  optionId === answer.optionId
              );

              return {
                name: text,
                value: answersToOption.length,
                color: palette[i],
              };
            });

            csvData.push([text, ...data.map(({ value }) => value)]);

            return (
              <Grid item xs={12}>
                <Card>
                  <CardHeader title={text} />
                  <CardContent className={classes.chartCard}>
                    <PieChart
                      width={2 * chartPieRadius}
                      height={2 * chartPieRadius + 100}
                    >
                      <Pie
                        stroke={"none"}
                        dataKey="value"
                        data={data}
                        outerRadius={chartPieRadius}
                        label={renderLabels}
                        labelLine={false}
                        isAnimationActive={false}
                        startAngle={90}
                        endAngle={-270}
                        cy={chartPieRadius}
                        legendType="circle"
                      >
                        {data.map(item => (
                          <Cell fill={item.color} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        <Grid container justify="center" className={classes.csvLink}>
          <Link
            href={URL.createObjectURL(
              new Blob([csvData.map(e => e.join(",")).join("\n")], {
                type: "text/csv",
              })
            )}
            download="statistiken.csv"
          >
            Statistiken CSV-Datei herunterladen
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Statistics;
