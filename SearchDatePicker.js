import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 9,
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 160,
  },
}));

export default function SearchDatePicker(props) {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        placeholder={props.label}
        label={props.label}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
