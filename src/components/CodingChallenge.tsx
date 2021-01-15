import React, { useState, FunctionComponent } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { motion } from "framer-motion";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "prism-react-renderer/themes/palenight";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    height: "100%",
  },
  editor: {
    "& div": {
      fontFamily:
        'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace !important',
    },
  },
  preview: {
    verticalAlign: "middle",
    zIndex: 1200,
    padding: theme.spacing(1),
    "& div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...theme.typography.button,
      color: "rgba(0, 0, 0, 0.87)",
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
    },
  },
}));

type Props = {
  code: string;
  challengeInfo: string;
  challengeTitle: string;
};

const CodingChallenge: FunctionComponent<Props> = ({
  code: initialCode,
  challengeInfo,
  challengeTitle,
}) => {
  const classes = useStyles();
  const [code, setCode] = useState(initialCode);
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <LiveProvider code={code} theme={theme} scope={{ motion }}>
      <Paper>
        <Grid container className={classes.root} direction="column">
          <Grid className={classes.preview} container justify="center">
            <LiveError />
            <LivePreview />
          </Grid>
          <Grid className={classes.editor} item>
            <LiveEditor onChange={code => setCode(code)} />
          </Grid>
        </Grid>
      </Paper>
      <Grid container justify="center" alignContent="center">
        <Grid item>
          <Button onClick={handleClickOpen} color="primary">
            Info
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{challengeTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{challengeInfo}</DialogContentText>
          <DialogContentText>
            Sobald Sie fertig sind, können Sie zum nächsten Punkt gehen.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </LiveProvider>
  );
};

export default CodingChallenge;
