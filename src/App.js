import React, { useRef, useState } from "react";
import { useIntersection } from "react-use";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  IconButton,
  Button,
  Paper,
  Grid,
  Divider,
  TextField,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  withWidth,
  Collapse,
  Grow,
} from "@material-ui/core";
import {
  ArrowDownward,
  Send,
  AccountTree,
  FlipToBack,
  FlipToFront,
  Description,
  GitHub,
  PermMedia,
  Public,
  SwapHoriz,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  allPage: {
    backgroundColor: "#2c3e50",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "url(/background/bodyBgMobile.jpg)",
      backgroundAttachment: "scroll",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundImage: "url(/background/bodyBg.jpg)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    backgroundPosition: "center center",
    paddingBottom: "200px",
  },
  hero: {
    backgroundColor: "#2c3e50",

    [theme.breakpoints.down("xs")]: {
      backgroundImage: "url(/background/bgMobile.jpg)",
      backgroundAttachment: "scroll",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundImage: "url(/background/bg.jpg)",
      backgroundAttachment: "fixed",
    },
    lineHeight: "100vh",
    height: "100vh",

    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  hero_body: {
    color: "#ffffff",
    lineHeight: "1.5",
    display: "inline-block",
    verticalAlign: "middle",
  },
  arrow: {
    color: "#ffffff",
  },
  about1: {
    paddingTop: "120px",
    background:
      "linear-gradient(145deg, rgba(64,64,122,1) 0%, rgba(112,111,211,1) 100%)",
    color: "#ffffff",
    paddingBottom: "200px",
  },
  about2: {
    marginTop: "-120px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  aboutButton: {
    background:
      "linear-gradient(145deg, rgba(64,64,122,1) 0%, rgba(112,111,211,1) 100%)",
    color: "#ffffff",
    marginTop: "40px",
  },
  skills1: {
    paddingTop: "120px",
    background:
      "linear-gradient(145deg, rgba(255,177,66,1) 0%, rgba(255,218,121,1) 100%)",
    color: "#ffffff",
    paddingBottom: "200px",
  },
  skills2: {
    padding: "25px",
    marginTop: "-120px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
  },
  skillsButton: {
    background:
      "linear-gradient(145deg, rgba(255,177,66,1) 0%, rgba(255,218,121,1) 100%)",
    color: "#ffffff",
    marginTop: "40px",
  },
  progress1: {
    color: "#ffb142",
  },
  progress2: {
    color: "#ffc559",
  },
  progress3: {
    color: "#ffda79",
  },
  work1: {
    paddingTop: "120px",
    background:
      "linear-gradient(145deg, rgba(33,140,116,1) 0%, rgba(51,217,178,1) 100%)",
    color: "#ffffff",
    paddingBottom: "200px",
  },
  work2: {
    marginTop: "-120px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
      padding: "25px",
    },
  },
  workCard: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      margin: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "50px",
    },
  },
  workCardMedia: { width: "280px", minHeight: "135px" },
  workButton: {
    background:
      "linear-gradient(145deg, rgba(33,140,116,1) 0%, rgba(51,217,178,1) 100%)",
    color: "#ffffff",
    marginTop: "40px",
  },
  gitButton: {
    background:
      "linear-gradient(145deg, rgba(132,129,122,1) 0%, rgba(209,204,192,1) 100%)",
    color: "#ffffff",
    marginTop: "40px",
  },
  spaced: {
    padding: "50px",
  },
  spaced2: {
    padding: "25px",
  },
  dividerHorizon: {
    width: "100%",
  },
}));

function App(props) {
  const classes = useStyles();
  const aboutRef = useRef(null);
  const [aboutActive, setAboutActive] = useState(false);

  const intersectionAbout = useIntersection(aboutRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  if (intersectionAbout && !aboutActive && intersectionAbout.isIntersecting) {
    setAboutActive(true);
  }
  return (
    <Box className={classes.allPage}>
      <Box className={classes.hero}>
        <Container className={classes.hero_body}>
          <Typography variant="h3">Pierre ASDRUBAL - Web devloper</Typography>
          <Typography variant="subtitle1">Welcome to my Portfolio</Typography>
          <IconButton aria-label="Down" className={classes.arrow}>
            <ArrowDownward />
          </IconButton>
        </Container>
      </Box>

      <Box ref={aboutRef} className={classes.about1}>
        <Container maxWidth="sm">
          <Grow in={aboutActive} timeout={500}>
            <Typography variant="h4" align="center" gutterBottom>
              Who am I
            </Typography>
          </Grow>
          <Grow in={aboutActive} timeout={750}>
            <Typography variant="body1" align="center" gutterBottom>
              Hey! I am Pierre ASDRUBAL, WEB Developer, graduate from the
              University of Orleans in France and self-taught since then. Always
              glad to learn something new and improve my skills. Don't hesitate
              to have a look at my previous work or to contact me, I would be
              happy to get something new started. Hope to hear from you soon
            </Typography>
          </Grow>
        </Container>
      </Box>
      <Grow in={aboutActive} timeout={1000}>
        <Paper className={classes.about2} elevation={3}>
          <Grid className={classes.spaced} container justify="space-evenly">
            <Grid item>
              <Typography variant="h6" align="center" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body2" align="center" gutterBottom>
                +33 7 84 54 39 25
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" gutterBottom>
                E-mail
              </Typography>
              <Typography variant="body2" align="center" gutterBottom>
                pierre.asdrubal@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <form action="">
            <Box className={classes.spaced2}>
              <TextField
                label="Name"
                fullWidth
                margin="dense"
                size="small"
                variant="outlined"
              />
              <TextField
                label="Contact"
                fullWidth
                margin="dense"
                size="small"
                variant="outlined"
              />
              <TextField
                label="Message"
                fullWidth
                margin="dense"
                size="small"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button
                className={classes.aboutButton}
                endIcon={<Send />}
                fullWidth
              >
                Send{" "}
              </Button>
            </Box>
          </form>
        </Paper>
      </Grow>
      <Box className={classes.skills1}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            My Skills
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            I focused on being Full Stack, I keep interested in all part of a
            project realisation.
          </Typography>
        </Container>
      </Box>
      <Paper className={classes.skills2} elevation={3}>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          direction="row"
        >
          <Grid item>
            <Grid item>
              <Box
                position="relative"
                display="inline-flex"
                className={classes.spaced2}
              >
                <CircularProgress
                  size={120}
                  thickness={6}
                  variant="static"
                  value={40}
                  className={classes.progress1}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="overline"
                    component="div"
                    color="textSecondary"
                  >
                    Project
                  </Typography>
                  <AccountTree />
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" gutterBottom>
                Technologies/Methods
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="AGILE" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="LEAN Management" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Specification creation" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Netlify" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Heroku" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          {props.width === "xs" || props.width === "sm" ? (
            <Divider variant="middle" className={classes.dividerHorizon} />
          ) : (
            <Divider orientation="vertical" flexItem />
          )}

          <Grid item>
            <Grid item>
              <Box
                position="relative"
                display="inline-flex"
                className={classes.spaced2}
              >
                <CircularProgress
                  size={120}
                  thickness={6}
                  variant="static"
                  value={60}
                  className={classes.progress2}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="overline"
                    component="div"
                    color="textSecondary"
                  >
                    Back
                  </Typography>
                  <FlipToBack />
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" gutterBottom>
                Technologies/Methods
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Express" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="JOI" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="MongoDB" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="PostgreSQL" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="REST" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          {props.width === "xs" || props.width === "sm" ? (
            <Divider variant="middle" className={classes.dividerHorizon} />
          ) : (
            <Divider orientation="vertical" flexItem />
          )}
          <Grid item>
            <Grid item>
              <Box
                position="relative"
                display="inline-flex"
                className={classes.spaced2}
              >
                <CircularProgress
                  size={120}
                  thickness={6}
                  variant="static"
                  value={75}
                  className={classes.progress3}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="overline"
                    component="div"
                    color="textSecondary"
                  >
                    Front
                  </Typography>
                  <FlipToFront />
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" gutterBottom>
                Technologies/Methods
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="React" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Material UI" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Axios" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bulma / Bootstrap" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Jest" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Button
          className={classes.skillsButton}
          endIcon={<Description />}
          fullWidth
        >
          Get Resume{" "}
        </Button>
      </Paper>

      <Box className={classes.work1}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            My Work
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Here is a preview of my last apps, fully responsive & functional.
          </Typography>
        </Container>
      </Box>
      <Paper className={classes.work2} elevation={3}>
        <Card className={classes.workCard}>
          <div>
            <CardContent>
              <Grid container direction="row" justify="space-evenly">
                <CardMedia
                  className={classes.workCardMedia}
                  image="/work/CocktailsLife/index.png"
                  title="CocktailsLife Preview"
                />
                <Grid item className={classes.spaced2}>
                  <Typography component="h6" variant="h6">
                    CocktailsLife
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    A simple application build with :
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText secondary="Api : express" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary="Database : mongoDB" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary="CSS Framework : Bulma" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item className={classes.spaced2}>
                  <Button
                    className={classes.workButton}
                    endIcon={<PermMedia />}
                    fullWidth
                  >
                    Preview
                  </Button>
                  <Button
                    className={classes.gitButton}
                    endIcon={<GitHub />}
                    fullWidth
                  >
                    View Code
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
        <Card className={classes.workCard}>
          <div>
            <CardContent>
              <Grid container direction="row" justify="space-evenly">
                <CardMedia
                  className={classes.workCardMedia}
                  image="/work/RecipeZ/index.png"
                  title="RecipeZ Preview"
                />
                <Grid item className={classes.spaced2}>
                  <Typography component="h6" variant="h6">
                    RecipeZ
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    A complete application build with :
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText secondary="Front : REACT" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary="Back : express" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary="Database : PostgreSQL" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary="CSS Framework : Bulma, SASS" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item className={classes.spaced2}>
                  <Button
                    className={classes.workButton}
                    endIcon={<PermMedia />}
                    fullWidth
                  >
                    Preview
                  </Button>
                  <Button
                    className={classes.gitButton}
                    endIcon={<GitHub />}
                    fullWidth
                  >
                    View Code
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
        <Card className={classes.workCard}>
          <div>
            <CardContent>
              <Grid container direction="row" justify="space-evenly">
                <CardMedia
                  className={classes.workCardMedia}
                  image="/work/ArtOfLevani/index.png"
                  title="ArtOfLevani Preview"
                />
                <Grid item className={classes.spaced2}>
                  <Typography component="h6" variant="h6">
                    ArtOfLevani
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    A professional website build with :
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText secondary="Front : NextJs" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary="Back : NextJs" />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary="CSS Framework : Bulma, SASS" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item className={classes.spaced2}>
                  <Button
                    className={classes.workButton}
                    endIcon={<Public />}
                    fullWidth
                  >
                    Website
                  </Button>
                  <Button
                    className={classes.gitButton}
                    endIcon={<GitHub />}
                    fullWidth
                  >
                    View Code
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
      </Paper>
    </Box>
  );
}

export default withWidth()(App);
