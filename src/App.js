import React from "react";
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
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#2c3e50",
    backgroundImage: "url(/background/bg.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    lineHeight: "100vh",
    height: "100vh",
  },
  hero_body: {
    color: "#ffffff",
    lineHeight: "1.5",
    display: "inline-block",
    verticalAlign: "middle",
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
    width: "50%",
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
    width: "75%",
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
    padding: "25px",
    marginTop: "-120px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "200px",
    width: "75%",
  },
  workCard: { display: "flex" },
  workCardMedia: { width: "35%" },
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
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.hero}>
        <Container className={classes.hero_body}>
          <Typography variant="h3">Welcome on my Portfolio</Typography>
          <Typography variant="subtitle1">
            Pierre ASDRUBAL - Web devloper
          </Typography>
          <Divider light />
          <IconButton aria-label="Down" color="primary">
            <ArrowDownward />
          </IconButton>
        </Container>
      </Box>
      <Box className={classes.about1}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Who am I
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Hey! I am Pierre ASDRUBAL, WEB Developer, graduate from the
            University of Orleans in France and self-taught since then. Always
            glad to learn something new and improve my skills. Don't hesitate to
            have a look at my previous work or to contact me, I would be happy
            to get something new started. Hope to hear from you soon
          </Typography>
        </Container>
      </Box>
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
          <Grid
            item
            alignItems="center"
            justify="space-evenly"
            direction="column"
          >
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
                    variant="caption"
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
              </List>
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid
            item
            alignItems="center"
            justify="space-evenly"
            direction="column"
          >
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
                    variant="caption"
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
              </List>
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid
            item
            alignItems="center"
            justify="space-evenly"
            direction="column"
          >
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
                    variant="caption"
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
          <CardMedia
            className={classes.workCardMedia}
            image="/background/bg.jpg"
            title="Live from space album cover"
          />
          <div>
            <CardContent>
              <Grid container direction="row" justify="space-evenly">
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
                {/* <Divider orientation="vertical" flexItem /> */}
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
      </Paper>
    </>
  );
}

export default App;
