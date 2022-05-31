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
  { name:'Blowdown'}
];

class DashboardBottomSection extends React.Component {

  render() {
    return (
        <div className="flex relative">
           <TableContainer component={Paper} style={{background:'linear-gradient(90deg, rgba(81,180,151,1) 0%, rgba(50,181,175,1) 35%, rgba(1,173,209,1) 100%)',color:'#19435c',fontWeight:'500'}}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{display:'flex',borderTop:'16px solid #7B3F00'}}>
              <div style={{minWidth:'70px'}}>{row.name}</div>:<div style={{marginLeft:5}}>{this.props.data.blowdown}</div>
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
