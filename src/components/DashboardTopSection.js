import React from "react";
import { withRouter } from "react-router";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
  { name:'KWRP',nap1:'kwrp NAP1',nap2:'kwrp NAP2',nap3: 'kwrp NAP3'},
  { name:'Scheme',nap1:'schemeNap1',nap2:'schemeNap2',nap3: 'schemeNap3'},
  { name:'Bore',nap1:'borenap1',nap2:'borenap2',nap3: 'borenap3'},
  { name:'Progress',nap1:'Progressnap1',nap2:'Progressnap2',nap3: 'Progressnap3'},
];

class DashboardTopSection extends React.Component {

  render() {
    return (
        <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.nap1}</TableCell>
              <TableCell align="right">{row.nap2}</TableCell>
              <TableCell align="right">{row.nap3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
   
    );
  }
}

export default withRouter(DashboardTopSection);
