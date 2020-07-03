import React from 'react';
import {Box, Container, makeStyles, Typography, IconButton, Button, Paper, Grid, Divider, TextField    } from '@material-ui/core';
import {ArrowDownward, Send} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#2c3e50",
    backgroundImage: "url(/background/bg.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    lineHeight:"100vh",
    height:"100vh",
  },
  hero_body: {
    
    color:"#ffffff",
    lineHeight:"1.5",
    display:"inline-block",
    verticalAlign:"middle"
  },
  about1: {
    paddingTop:"120px",
    background:"linear-gradient(145deg, rgba(255,177,66,1) 0%, rgba(255,218,121,1) 100%)",
    color: "#ffffff",
    paddingBottom:"200px",
  },
  about2: {
    marginTop:"-120px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:"200px",
    width: "50%",
  },
  aboutButton: {
    background:"linear-gradient(145deg, rgba(255,177,66,1) 0%, rgba(255,218,121,1) 100%)",
    color: "#ffffff",
    marginTop:"40px",
  },
  skills1: {
    paddingTop:"120px",
    background:"linear-gradient(145deg, rgba(52,172,224,1) 0%, rgba(51,217,178,1) 100%)",
    color: "#ffffff",
    paddingBottom:"200px",
  },
  skills2: {
    marginTop:"-120px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:"200px",
    width: "50%",
  },
  spaced: {
    padding:"50px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
    <Box className={classes.hero}>
      <Container className={classes.hero_body}>
        <Typography variant="h3">Welcome on my Portfolio</Typography>
        <Typography variant="subtitle1">Pierre ASDRUBAL - Web devloper</Typography>
        <Divider light/>
        <IconButton aria-label="Down" color="primary">
          <ArrowDownward />
        </IconButton>
      </Container>
    </Box>
    <Box className={classes.about1}>
      <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>Who am I</Typography>
      <Typography variant="body1" align="center" gutterBottom>Hey! I am Pierre ASDRUBAL, WEB Developer, graduate from the University of Orleans in France and self-taught since then. Always glad to learn something new and improve my skills. Don't hesitate to have a look at my previous work or to contact me, I would be happy to get something new started. Hope to hear from you soon</Typography>
      </Container>
    </Box>
    <Paper className={classes.about2} elevation={3}>
      <Grid className={classes.spaced} container justify="space-evenly">
        <Grid item>
        <Typography variant="h6" align="center" gutterBottom>Phone</Typography>
      <Typography variant="body2" align="center" gutterBottom>+33 7 84 54 39 25</Typography>

        </Grid>
        <Grid item>
        <Typography variant="h6" align="center" gutterBottom>E-mail</Typography>
      <Typography variant="body2" align="center" gutterBottom>pierre.asdrubal@gmail.com</Typography>

        </Grid>
      </Grid>
      <Divider variant="middle"/>
      <form action="">
        <Box className={classes.spaced}>
        <TextField label="Name" fullWidth margin="dense" size="small" variant="outlined"/>
        <TextField label="Contact" fullWidth margin="dense" size="small" variant="outlined"/>
        <TextField label="Message" fullWidth margin="dense" size="small" variant="outlined" multiline rows={4}/>
        <Button className={classes.aboutButton} endIcon={<Send/>} fullWidth>Send </Button>
        </Box>
      </form>
    </Paper>
    <Box className={classes.skills1}>
      <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>My Skills</Typography>
      <Typography variant="body1" align="center" gutterBottom>Hey! I am Pierre ASDRUBAL, WEB Developer, graduate from the University of Orleans in France and self-taught since then. Always glad to learn something new and improve my skills. Don't hesitate to have a look at my previous work or to contact me, I would be happy to get something new started. Hope to hear from you soon</Typography>
      </Container>
    </Box>
    <Paper className={classes.skills2} elevation={3}>
      <Grid className={classes.spaced} container justify="space-evenly">
        <Grid item>
        <Typography variant="h6" align="center" gutterBottom>Phone</Typography>
      <Typography variant="body2" align="center" gutterBottom>+33 7 84 54 39 25</Typography>

        </Grid>
        <Grid item>
        <Typography variant="h6" align="center" gutterBottom>E-mail</Typography>
      <Typography variant="body2" align="center" gutterBottom>pierre.asdrubal@gmail.com</Typography>

        </Grid>
      </Grid>
      <Divider variant="middle"/>
      <form action="">
        <Box className={classes.spaced}>
        <TextField label="Name" fullWidth margin="dense" size="small" variant="outlined"/>
        <TextField label="Contact" fullWidth margin="dense" size="small" variant="outlined"/>
        <TextField label="Message" fullWidth margin="dense" size="small" variant="outlined" multiline rows={4}/>
        <Button className={classes.aboutButton} endIcon={<Send/>} fullWidth>Send </Button>
        </Box>
      </form>
    </Paper>
    </>
  );
}

export default App;
