import React, { FunctionComponent } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "block",
  },
  grid: {
    height: "100%",
  },
  questionText: {
    margin: theme.spacing(2, 0),
  },
}));

type Props = {
  title?: string;
  value?: string;
  disabled?: boolean;
  options: readonly string[];
  handleChange: (changedValue: string) => void;
};

const RadioButtonsGroup: FunctionComponent<Props> = props => {
  const { title, value, disabled = false, options, handleChange } = props;
  const classes = useStyles();
  const theme = useTheme();
  const screenIsXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <FormControl className={classes.root} component="fieldset" fullWidth>
      <Grid
        className={classes.grid}
        container
        justify="space-evenly"
        direction="column"
      >
        <Grid item className={classes.questionText}>
          <FormLabel component="legend">
            <Typography
              variant={screenIsXs ? "h5" : "h4"}
              align="center"
              color="textPrimary"
            >
              {title}
            </Typography>
          </FormLabel>
        </Grid>

        <Grid item>
          <RadioGroup
            aria-label="options"
            name="options"
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange((event.target as HTMLInputElement).value)
            }
          >
            <Grid
              container
              justify="center"
              spacing={screenIsXs ? 0 : 1}
              alignContent="center"
              alignItems="flex-start"
              direction={"column"}
            >
              {options.map((option, i) => (
                <Grid item key={i}>
                  <FormControlLabel
                    value={option}
                    control={<Radio color="primary" />}
                    label={<Typography>{option}</Typography>}
                    disabled={disabled}
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default RadioButtonsGroup;
