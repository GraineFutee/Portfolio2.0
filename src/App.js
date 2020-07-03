import React from 'react';
import {Box, Container, makeStyles, Typography, IconButton, Button, Paper, Grid, Divider, TextField, CircularProgress     } from '@material-ui/core';
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
    width: "75%",
  },
  spaced: {
    padding:"50px",
  },
  spaced2: {
    padding:"25px",
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
        <Box className={classes.spaced2}>
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
      </Container>
    </Box>
    <Paper className={classes.skills2} elevation={3}>
      <Grid container alignItems="center" justify="space-evenly" direction="row">
        <Grid item  alignItems="center" justify="space-evenly"  direction="column">
          <Grid item>
            <Box position="relative" display="inline-flex" className={classes.spaced2}>
              <CircularProgress size={120} thickness={6} variant="static" value={40} />
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
                <Typography variant="caption" component="div" color="textSecondary">Project</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h7" align="center" gutterBottom>Technologies/Methods</Typography>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item alignItems="center" justify="space-evenly" item direction="column">
          <Grid item>
            <Box position="relative" display="inline-flex" className={classes.spaced2}>
              <CircularProgress size={120} thickness={6} variant="static" value={40} />
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
                <Typography variant="caption" component="div" color="textSecondary">Project</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h7" align="center" gutterBottom>Technologies/Methods</Typography>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item alignItems="center" justify="space-evenly" item direction="column">
          <Grid item>
            <Box position="relative" display="inline-flex" className={classes.spaced2}>
              <CircularProgress size={120} thickness={6} variant="static" value={40} />
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
                <Typography variant="caption" component="div" color="textSecondary">Project</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h7" align="center" gutterBottom>Technologies/Methods</Typography>
          </Grid>
        </Grid>
        
      </Grid>
    </Paper>
    </>
  );
}

export default App;
