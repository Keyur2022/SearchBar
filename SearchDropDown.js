import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import SvgIcon from '@mui/material/SvgIcon';

const useStyles = makeStyles((theme) => ({
  rootform: {
    marginLeft: 10,
    marginRight: 10,
  },
}));

export default function SearchDropDown({ names, dataname }) {
  const theme = useStyles();

  return (
    <Grid item xs="auto">
      <div>
        <FormControl variant="standard" sx={{ width: 160 }} className={theme.rootform}>
          <InputLabel id="demo-simple-select-standard-label">{dataname}</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label={dataname}
            renderValue={(value) => (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SvgIcon color="primary">
                  <SearchIcon />
                </SvgIcon>
                {value}
              </Box>
            )}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Grid>
  );
}
