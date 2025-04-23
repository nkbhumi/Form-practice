import React from 'react';
import { Toolbar, AppBar, Typography } from '@mui/material';

const Head = ({ }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Demo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Head;