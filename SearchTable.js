import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const useStyles = makeStyles((theme) => ({
  spanRoot: {
    verticalAlign: 'middle',
    padding: 2,
    margin: 2,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function SearchTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dummy SKUs - Select Like Assortments</StyledTableCell>
            
            <StyledTableCell align="right">
              <FilterListIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
              <span className={classes.spanRoot}>X</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <UnfoldMoreIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
              <span className={classes.spanRoot}>X</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <AutorenewIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            </StyledTableCell>
            <StyledTableCell align="right">
              <VisibilityOffIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
              <span className={classes.spanRoot}>13</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <LockIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
              <span className={classes.spanRoot}>5</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <SwapVertIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            </StyledTableCell>
            <StyledTableCell align="right">
              <KeyboardArrowDownIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
