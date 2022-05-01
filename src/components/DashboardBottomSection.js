import React from "react";
import { withRouter } from "react-router";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const rows = [
  { name:'Bore13'},
  { name:'Arthesian'},
  { name:'Sysalar'},
];

class DashboardBottomSection extends React.Component {

  render() {
    return (
        <div className="flex relative">
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{display:'flex'}}>
               {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.nap1}</TableCell>
              <TableCell align="right">{row.nap2}</TableCell>
              <TableCell align="right">{row.nap3}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>
     
   
    );
  }
}

export default withRouter(DashboardBottomSection);
