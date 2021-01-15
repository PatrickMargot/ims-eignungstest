import React, { useEffect, useState } from "react";

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";

import KantiBadenIcon from "../assets/kantibaden-icon.svg";
import Survey from "./Survey";
import Statistics from "./Statistics";

firebase.initializeApp({
  apiKey: "AIzaSyA4DqNEhnEW184FMZNwgfp8IVG4O6hCuc4",
  authDomain: "idpa-c9d11.firebaseapp.com",
  databaseURL:
    "https://idpa-c9d11-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "idpa-c9d11",
  storageBucket: "idpa-c9d11.appspot.com",
  messagingSenderId: "587051875230",
  appId: "1:587051875230:web:92a1a2c23e0aa6884f348f",
  measurementId: "G-XKQ4W0S9JB",
});

const auth = firebase.auth();
const database = firebase.database();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  },
  footer: {
    padding: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    display: "flex",
  },
  icon: {
    [theme.breakpoints.down("xs")]: {},
  },
  iconImg: {
    height: "100%",
  },
  iconButton: {
    height: "100%",
    padding: theme.spacing(3, 0, 3),
    ["& .MuiIconButton-label"]: {
      height: "100%",
    },
  },
  headerTitle: {
    padding: theme.spacing(3, 0, 3, 0),
    alignSelf: "start",
    [theme.breakpoints.down("xs")]: {
      ...theme.typography.h6,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 3, 0, 3),
    height: 138,
    [theme.breakpoints.down("xs")]: {
      height: 90,
    },
  },
  appbar: {
    boxShadow: "none",
  },
  homeTitle: {
    // margin: theme.spacing(6, 0),
    [theme.breakpoints.down("xs")]: {
      // margin: theme.spacing(2, 0),
      ...theme.typography.h5,
    },
  },
  home: {
    // paddingTop: theme.spacing(4),
  },
  homeContent: {
    flexGrow: 1,
  },
  homeSubtitle: {
    marginBottom: 0,
    [theme.breakpoints.down("xs")]: {
      ...theme.typography.h6,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const classes = useStyles();

  const [questions, setQuestions] = useState<any[]>([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [user] = useAuthState(auth);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#f44336",
          },
        },
      }),
    [prefersDarkMode]
  );

  const handleLoginClose = () => setLoginOpen(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    auth.signInWithEmailAndPassword(email.value, password.value).then(user => {
      setLoginOpen(false);
    });
  };

  useEffect(() => {
    database
      .ref("/optionGroups")
      .once("value")
      .then(snapshot => {
        const optionGroups = snapshot.val();

        database
          .ref("/questions")
          .once("value")
          .then(snapshot => {
            const questions = snapshot.val();

            const questionsWithOptionGroup = questions.map(question => ({
              ...question,
              optionGroup: optionGroups.find(
                ({ optionGroupId }) => optionGroupId === question.optionGroupId
              ),
            }));

            setQuestions(questionsWithOptionGroup);
          });
      });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root}>
        <Router>
          <AppBar className={classes.appbar} position="static">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h4" className={classes.headerTitle}>
                IMS Eignungstest
              </Typography>
              <Tooltip title="Zur Kanti Baden Seite" arrow>
                <IconButton
                  href="https://www.kanti-baden.ch/"
                  className={classes.iconButton}
                >
                  <img
                    className={classes.iconImg}
                    src={KantiBadenIcon}
                    alt="KANTI BADEN"
                  />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>

          <Container className={classes.content} maxWidth="sm" color="green">
            <Switch>
              <Route exact path="/test">
                {questions.length > 0 && <Survey questions={questions} />}
              </Route>

              <Route exact path="/statistiken">
                {user ? (
                  <Statistics />
                ) : (
                  <Grid container justify="center" alignContent="center">
                    <Typography variant="subtitle1" align="center">
                      Sie haben keinen Zugriff. Loggen Sie sich als Admin ein.
                    </Typography>
                  </Grid>
                )}
              </Route>

              <Route path="/">
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  className={classes.home}
                >
                  <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    className={classes.homeContent}
                  >
                    <Typography
                      className={classes.homeTitle}
                      variant="h4"
                      align="center"
                      color="textPrimary"
                    >
                      Willkommen zum IMS Eignungstest
                    </Typography>
                    <Typography
                      className={classes.homeSubtitle}
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                    >
                      Sind Sie interessiert an einer Ausbildung als
                      Informatikmittelschüler/in? Machen Sie einen kurzen Test
                      und erfahren Sie ob die Informatikmittelschule die
                      richtige Wahl ist für Sie!
                    </Typography>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          component={RouterLink}
                          to="/test"
                        >
                          test starten
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <footer className={classes.footer}>
                      <Typography
                        variant="subtitle2"
                        align="center"
                        color="textSecondary"
                      >
                        {user ? (
                          <Link component={RouterLink} to="/statistiken">
                            Statistiken
                          </Link>
                        ) : (
                          <Link
                            href="#"
                            onClick={e => {
                              e.preventDefault();
                              setLoginOpen(true);
                            }}
                          >
                            Admin login
                          </Link>
                        )}
                      </Typography>
                    </footer>
                  </Grid>
                </Grid>
              </Route>
            </Switch>
          </Container>
        </Router>

        <Dialog open={loginOpen} onClose={handleLoginClose}>
          <DialogContent>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Admin Login
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Adresse"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Passwort"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Einloggen
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
