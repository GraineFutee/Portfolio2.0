import React, { useRef, useState, useEffect } from "react";
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
  Zoom,
  Avatar,
  Modal,
  MobileStepper,
} from "@material-ui/core";
import {
  ArrowDownward,
  ArrowUpward,
  Send,
  AccountTree,
  FlipToBack,
  FlipToFront,
  Description,
  GitHub,
  PermMedia,
  Public,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  allPage: {
    backgroundColor: "#2c3e50",
    backgroundImage: "url(/background/bodyBg.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
    marginTop: "-200px",
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
    textAlign: "center",
  },
  avatar: {
    marginTop: "-200px",
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
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
    },
    height: "auto",
    border: "solid 10px",
    borderColor: "#ffffff",
  },
  aboutButton: {
    background:
      "linear-gradient(145deg, rgba(64,64,122,1) 0%, rgba(112,111,211,1) 100%)",
    color: "#ffffff",
    marginTop: "40px",
  },
  skills1: {
    marginTop: "200px",
    paddingTop: "120px",
    background:
      "linear-gradient(145deg, rgba(255,177,66,1) 0%, rgba(255,218,121,1) 100%)",
    color: "#ffffff",
    paddingBottom: "200px",
  },
  skills2: {
    padding: "25px",
    marginTop: "-200px",
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
    marginTop: "-200px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "200px",
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
  contact: {
    paddingTop: "120px",
    background:
      "linear-gradient(145deg, rgba(132,129,122,1) 0%, rgba(209,204,192,1) 100%)",
    color: "#ffffff",
    paddingBottom: "200px",
  },
  contact2: {
    marginTop: "-200px",
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
  contactButton: {
    background:
      "linear-gradient(145deg, rgba(132,129,122,1) 0%, rgba(209,204,192,1) 100%)",
    color: "#ffffff",
    marginTop: "40px",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: 15,
    backgroundColor: "#ffffff",
  },
  modalImg: {
    overflow: "hidden",
    display: "block",
    height: "100%",
    width: "100%",
  },
  modalBody: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "85%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    position: "absolute",
    left: "50%",
    top: "50%",

    transform: "translate(-50%, -50%)",
  },
}));

function App(props) {
  const classes = useStyles();
  const aboutRef = useRef(null);
  const [aboutActive, setAboutActive] = useState(false);
  const [about2Active, setAbout2Active] = useState(false);
  const skillsRef = useRef(null);
  const [skillsActive, setSkillsActive] = useState(false);
  const [skills2Active, setSkills2Active] = useState(false);
  const [skills3Active, setSkills3Active] = useState(false);
  const [skills4Active, setSkills4Active] = useState(false);
  const workRef = useRef(null);
  const [workActive, setWorkActive] = useState(false);
  const contactRef = useRef(null);
  const [contactActive, setContactActive] = useState(false);
  const [modal, setModal] = useState({
    active: false,
    data: [],
    step: 1,
  });

  const intersectionAbout = useIntersection(aboutRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const intersectionSkills = useIntersection(skillsRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const intersectionWork = useIntersection(workRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const intersectionContact = useIntersection(contactRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  if (intersectionAbout && !aboutActive && intersectionAbout.isIntersecting) {
    setAboutActive(true);
    setTimeout(() => setAbout2Active(true), 500);
  }
  if (
    intersectionSkills &&
    !skillsActive &&
    intersectionSkills.isIntersecting
  ) {
    setSkillsActive(true);
    setTimeout(() => setSkills2Active(true), 700);
    setTimeout(() => setSkills3Active(true), 1000);
    setTimeout(() => setSkills4Active(true), 1300);
  }
  if (intersectionWork && !workActive && intersectionWork.isIntersecting) {
    setWorkActive(true);
  }
  if (
    intersectionContact &&
    !contactActive &&
    intersectionContact.isIntersecting
  ) {
    setContactActive(true);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className={classes.allPage}>
      <Box id="top" className={classes.hero}>
        <Container className={classes.hero_body}>
          <Typography variant="h3">Pierre ASDRUBAL - Web devloper</Typography>
          <Typography variant="subtitle1">Welcome to my Portfolio</Typography>
          {props.width !== "xs" && (
            <IconButton
              aria-label="Down"
              className={classes.arrow}
              href="#about"
            >
              <ArrowDownward />
            </IconButton>
          )}
        </Container>
      </Box>

      <Box id="about" ref={aboutRef} className={classes.about1}>
        <Container maxWidth="sm">
          <Zoom in={aboutActive} timeout={500}>
            <Typography variant="h4" align="center" gutterBottom>
              Who am I
            </Typography>
          </Zoom>

          <Zoom
            in={aboutActive}
            timeout={500}
            style={{ transitionDelay: aboutActive ? "330ms" : "0ms" }}
          >
            <Typography variant="body1" align="center" gutterBottom>
              Hey! I am Pierre ASDRUBAL, WEB Developer, graduate from the
              University of Orleans in France and self-taught since then. Always
              glad to learn something new and improve my skills. Don't hesitate
              to have a look at my previous work or to contact me, I would be
              happy to get something new started. Hope to hear from you soon
            </Typography>
          </Zoom>
          {props.width !== "xs" && (
            <IconButton
              aria-label="Down"
              className={classes.arrow}
              href="#skills"
            >
              <ArrowDownward />
            </IconButton>
          )}
        </Container>
      </Box>
      <Zoom in={about2Active} timeout={1000}>
        <Avatar
          alt="Pierre ASDRUBAL"
          src="/profil/profil.jpg"
          className={classes.avatar}
        />
      </Zoom>
      <Box id="skills" ref={skillsRef} className={classes.skills1}>
        <Container maxWidth="sm">
          <Zoom in={skillsActive} timeout={500}>
            <Typography variant="h4" align="center" gutterBottom>
              My Skills
            </Typography>
          </Zoom>
          <Zoom
            in={skillsActive}
            timeout={500}
            style={{ transitionDelay: skillsActive ? "330ms" : "0ms" }}
          >
            <Typography variant="body1" align="center" gutterBottom>
              I focused on being Full Stack, I keep interested in all part of a
              project realisation.
            </Typography>
          </Zoom>
          {props.width !== "xs" && (
            <IconButton
              aria-label="Down"
              className={classes.arrow}
              href="#work"
            >
              <ArrowDownward />
            </IconButton>
          )}
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
                  value={skills2Active ? 40 : 0}
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
                  value={skills3Active ? 60 : 0}
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
                  value={skills4Active ? 75 : 0}
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

      <Box id="work" ref={workRef} className={classes.work1}>
        <Container maxWidth="sm">
          <Zoom in={workActive} timeout={500}>
            <Typography variant="h4" align="center" gutterBottom>
              My Work
            </Typography>
          </Zoom>
          <Zoom
            in={workActive}
            timeout={500}
            style={{ transitionDelay: workActive ? "330ms" : "0ms" }}
          >
            <Typography variant="body1" align="center" gutterBottom>
              Here is a preview of my last apps, fully responsive & functional.
            </Typography>
          </Zoom>
          {props.width !== "xs" && (
            <IconButton
              aria-label="Down"
              className={classes.arrow}
              href="#contact"
            >
              <ArrowDownward />
            </IconButton>
          )}
        </Container>
      </Box>
      <Paper className={classes.work2} elevation={3}>
        <Card className={classes.workCard}>
          <div>
            <CardContent>
              <Grid container direction="row" justify="space-evenly">
                <CardMedia
                  className={classes.workCardMedia}
                  image="/work/CocktailsLife/index.jpg"
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
                    onClick={() =>
                      setModal({
                        active: true,
                        data: [
                          {
                            imagePath: "/CocktailsLife/Main.jpg",
                            label: "Home page",
                          },
                          {
                            imagePath: "/CocktailsLife/Recipes.jpg",
                            label: "Recipes list",
                          },
                          {
                            imagePath: "/CocktailsLife/Negroni.jpg",
                            label: "Negroni recipe",
                          },
                        ],
                        step: 1,
                      })
                    }
                  >
                    Preview
                  </Button>
                  <Button
                    className={classes.gitButton}
                    endIcon={<GitHub />}
                    fullWidth
                    href="https://github.com/GraineFutee/CL-website"
                    target="_blank"
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
                  image="/work/RecipeZ/index.jpg"
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
                    onClick={() =>
                      setModal({
                        active: true,
                        data: [
                          {
                            imagePath: "/RecipeZ/Main.jpg",
                            label: "Home page",
                          },
                          {
                            imagePath: "/RecipeZ/MyRecipes.jpg",
                            label: "User recipes list",
                          },
                          {
                            imagePath: "/RecipeZ/Recipe1.jpg",
                            label: "Exemple of recipes part1",
                          },
                          {
                            imagePath: "/RecipeZ/Recipe2.jpg",
                            label: "Exemple of recipes part2",
                          },
                          {
                            imagePath: "/RecipeZ/SignIn.jpg",
                            label: "Sign in page",
                          },
                        ],
                        step: 1,
                      })
                    }
                  >
                    Preview
                  </Button>
                  <Button
                    className={classes.gitButton}
                    endIcon={<GitHub />}
                    fullWidth
                    href="https://github.com/GraineFutee/Recipez"
                    target="_blank"
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
                  image="/work/ArtOfLevani/index.jpg"
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
                    href="https://sad-leakey-a5543e.netlify.app/"
                    target="_blank"
                  >
                    Website
                  </Button>
                  <Button
                    className={classes.gitButton}
                    endIcon={<GitHub />}
                    fullWidth
                    href="https://github.com/GraineFutee/artoflevani"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
      </Paper>
      <Box id="contact" ref={contactRef} className={classes.contact}>
        <Container maxWidth="sm">
          <Zoom in={contactActive} timeout={500}>
            <Typography variant="h4" align="center" gutterBottom>
              Contact
            </Typography>
          </Zoom>
          {props.width !== "xs" && (
            <IconButton aria-label="Down" className={classes.arrow} href="#top">
              <ArrowUpward />
            </IconButton>
          )}
        </Container>
      </Box>
      <Paper className={classes.contact2} elevation={3}>
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
        <form action="POST" data-netlify="true">
          <Box className={classes.spaced2}>
            <TextField
              id="name"
              name="name"
              label="Name"
              fullWidth
              margin="dense"
              size="small"
              variant="outlined"
            />
            <TextField
              id="contact"
              name="contact"
              label="Contact"
              fullWidth
              margin="dense"
              size="small"
              variant="outlined"
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              fullWidth
              margin="dense"
              size="small"
              variant="outlined"
              multiline
              rows={4}
            />

            <Button
              className={classes.contactButton}
              endIcon={<Send />}
              fullWidth
              type="submit"
              value="Send Message"
            >
              Send
            </Button>
          </Box>
        </form>
      </Paper>
      <Modal
        open={modal.active}
        onClose={() => setModal({ active: false, data: [] })}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modalBody}>
          <Paper square elevation={0} className={classes.modalHeader}>
            <Typography>
              {modal.data.length > 0 ? modal.data[modal.step - 1].label : ""}
            </Typography>
          </Paper>
          <img
            className={classes.modalImg}
            src={
              modal.data.length > 0
                ? `/work/${modal.data[modal.step - 1].imagePath}`
                : ""
            }
            alt={modal.data.length > 0 ? modal.data[modal.step - 1].label : ""}
          />
          <MobileStepper
            steps={modal.data.length}
            position="static"
            variant="text"
            activeStep={modal.step - 1}
            nextButton={
              <Button
                size="small"
                onClick={() => {
                  setModal({ ...modal, step: modal.step + 1 });
                }}
                disabled={modal.step === modal.data.length}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={() => {
                  setModal({ ...modal, step: modal.step - 1 });
                }}
                disabled={modal.step === 1}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
      </Modal>
    </Box>
  );
}

export default withWidth()(App);
