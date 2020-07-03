import React from 'react';
import {Box, Container, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  hero: {
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Container>
        <h1>YO</h1>
      </Container>
    </Box>
  );
}

export default App;
