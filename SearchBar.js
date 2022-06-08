import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Paper, Button, Grid, Link } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import SearchDropDown from './SearchDropDown';
import SearchDatePicker from './SearchDatePicker';
import SearchButton from './SearchButton';
import SearchTable from './SearchTable';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    padding: 60,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  divmain: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
  },
}));

function SearchBar() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  // const [value, setValue] = useState(null);

  const names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];
  return (
    <div className={classes.root}>
      <div
        style={{ background: 'black', width: '100%', margin: 0, padding: 15, color: 'white', cursor: 'pointer' }}
        onClick={() => setExpanded(!expanded)}
        onKeyDown={() => setExpanded(!expanded)}
        aria-hidden="true"
      >
        <div style={{ alignItems: 'center', alignContent: 'center', display: 'inline-block' }}>
          {expanded ? <ExpandMoreIcon style={{ verticalAlign: 'middle' }} /> : <ExpandLessIcon style={{ verticalAlign: 'middle' }} />}
          <span style={{ verticalAlign: 'middle' }}> Search Criteria</span>
        </div>
      </div>

      <Collapse in={!expanded}>
        <Grid container justifyContent="space-between" style={{ padding: '10px' }}>
          <Grid item xs="auto">
            <Grid container spacing={1}>
              <SearchDropDown names={names} dataname="Company" />
              <SearchDropDown names={names} dataname="Channel" />
              <SearchDropDown names={names} dataname="Department" />
              <SearchDropDown names={names} dataname="Brand" />
              <SearchDropDown names={names} dataname="Class" />
              <SearchDropDown names={names} dataname="SKU" />
              <SearchDropDown names={names} dataname="UPC" />
              <SearchDatePicker label="From Date" />
              <SearchDatePicker label="To Date" />
            </Grid>
            <Grid container justifyContent="flex-end">
              <SearchButton variant="contained" color="primary" label="Search" />
              <SearchButton variant="outlined" color="error" label="Clear" />
            </Grid>
          </Grid>
        </Grid>
      </Collapse>
      <SearchTable/>
    </div>
  );
}

export default SearchBar;
