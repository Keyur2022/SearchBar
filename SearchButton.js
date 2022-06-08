import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    padding: 6,
    width: 120,
    marginTop:30,
    marginLeft:10
  },
}));

function SearchButton({ variant, color, label }) {
  const classes = useStyles();
  return (
    <Button variant={variant} color={color} className={classes.buttons}>
      {label}
    </Button>
  );
}

export default SearchButton;
