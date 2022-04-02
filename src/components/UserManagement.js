import React from "react";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import MotorCard from "./MotorCard";
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const columns = [
  { id: 'employeeId', label: 'Employee ID' },
  { id: 'username', label: 'User Name' },
  { id: 'phone', label: 'Phone Number' },
  { id: 'email', label: 'Email ID' },
  { id: 'isPartner', label: 'Partner' },
];


const eventBaseUrl = "https://o1b2elozsb.execute-api.us-east-2.amazonaws.com/dev/details/all";
const getUserDetail = "https://o1b2elozsb.execute-api.us-east-2.amazonaws.com/dev/details/";
class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog : false,
      userList:[],
      role:localStorage.getItem("role"),
      employeeId:"",
      username: "",
      email: "",
      phone: "",
      password: "",
      isPartner:false,
      shouldAlertDisplay: false,
      shouldErrorMessageDisplay: false,
      signupErrorMessage:"",
      page:0,
      rowsPerPage:10,
      checked:false
    };
  }

  componentWillMount() {
    this.loadUserDeatil();
  }

  loadUserDeatil =()=>{
    // const userId =  localStorage.getItem("userId");
    axios.get(eventBaseUrl).then((res) => {
     this.setState({
      userList:res.data
     })
    });
    
  }


 handleChange = (userId) => {
  axios.get(getUserDetail+userId).then((res) => {
    const reqJson={
      userId:res.data.userId,
      username:res.data.username,
      email:res.data.email,
      phone:res.data.phone,
      isPartner:!res.data.isPartner,
      // password:localStorage.getItem("password")
     }
    axios.put(getUserDetail+userId,reqJson).then((res) => {
      if(res.data.status==="SUCCESS")
      {
       
        this.loadUserDeatil();
      }
    });

   });

   
  //  this.setState({
  //    checked:event.target.checked
  //  })
  };

   handleChangePage = (event, newPage) => {
    this.setState({
      page:newPage
    })
  };

   handleChangeRowsPerPage = (event) => {
     const{rowsPerPage} = this.state;
     this.setState({
      rowsPerPage: event.target.value,
      page:0
     })
   
  };

  render() {
    const {checked,userList,employeeId, username,password, email, phone, shouldAlertDisplay,shouldErrorMessageDisplay,signupErrorMessage,page,rowsPerPage } =
    this.state;
    console.log('User LIST---',this.state.userList);
   return(
    <div className="space-y-5 h-screen flex">
       
    <Sidebar />

    <Paper sx={{ width: '60%', overflow: 'hidden',marginLeft:'175px',maxHeight:'850px'}}>
      <TableContainer>
        <Table  aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.userId}>
                    {columns.map((column) => {
                      if(column.id==="isPartner"){
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                           
                           <Switch
      checked={value}
      onChange={e=>this.handleChange(row.userId)}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                          </TableCell>
                        );
                      }else{
                        const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                         
                        </TableCell>
                      );
                      }
                      
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={userList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={this.handleChangePage}
        onRowsPerPageChange={this.handleChangeRowsPerPage}
      />
    </Paper>
    
            </div>
   )
    
  }
}

export default withRouter(UserManagement);
