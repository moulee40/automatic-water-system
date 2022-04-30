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
  { name:'KWRP',nap1:'kwrp NAP1',nap2:'kwrp NAP2',nap3: 'kwrp NAP3'},
  { name:'Scheme',nap1:'schemeNap1',nap2:'schemeNap2',nap3: 'schemeNap3'},
  { name:'Bore',nap1:'borenap1',nap2:'borenap2',nap3: 'borenap3'},
  { name:'Progress',nap1:'Progressnap1',nap2:'Progressnap2',nap3: 'Progressnap3'},
];

class DashboardTopSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }


  render() {
    const{data}=this.props;
    return (
        <div className="flex relative">
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" style={{display:'flex'}}>
               <div style={{minWidth:'70px'}}> KWRP</div>:<div style={{marginLeft:5}}> {data.kwrp}</div>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" style={{display:'flex'}}>
               <div style={{minWidth:'70px'}}> Bore</div>:<div style={{marginLeft:5}}> {data.bore}</div>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" style={{display:'flex'}}>
               <div style={{minWidth:'70px'}}> Blockdown</div>:<div style={{marginLeft:5}}> {data.blowdown}</div>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" style={{display:'flex'}}>
               <div style={{minWidth:'70px'}}> Clean Condensate</div>:<div style={{marginLeft:5}}> {data.cleanCondensate}</div>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <div className="flex justify-end absolute left-[20%]" style={{height:'350px'}}>
          <div className="border-l-2 border-b-2 border-solid border-gray-500 relative mb-10">
            <div className="mt-40">
                
                {/* <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[91%]'/> */}
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[92%] -ml-6' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
      <div className="flex justify-end absolute left-[19%] ml-28 top-full" style={{height:'145px'}}>
          <div className="border-l-2 border-b-2 border-solid border-gray-500 relative mb-10 ">
            <div className="mt-40">
                
                {/* <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[91%]'/> */}
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[72%] -ml-6' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
      <div className="flex justify-end absolute left-[47%]" style={{height:'350px'}}>
          <div className="border-l-2 border-b-2 border-solid border-gray-500 relative mb-10">
            <div className="mt-40">
                
                {/* <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[91%]'/> */}
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[92%] -ml-6' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
      <div className="flex justify-end absolute left-[47%] ml-28 top-full" style={{height:'145px'}}>
          <div className="border-l-2 border-b-2 border-solid border-gray-500 relative mb-10 ">
            <div className="mt-40">
                
                {/* <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[91%]'/> */}
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[72%] -ml-6' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
      <div className="flex justify-end absolute left-[72%]" style={{height:'350px'}}>
          <div className="border-l-2 border-b-2 border-solid border-gray-500 relative mb-10">
            <div className="mt-40">
                
                {/* <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[91%]'/> */}
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[92%] -ml-6' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
      <div className="flex justify-end absolute left-[73%] ml-28 top-full" style={{height:'145px'}}>
          <div className="border-l-2 border-b-2 border-solid border-gray-500 relative mb-10 ">
            <div className="mt-40">
                
                {/* <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[91%]'/> */}
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[72%] -ml-6' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
      </div>
   
    );
  }
}

export default withRouter(DashboardTopSection);
