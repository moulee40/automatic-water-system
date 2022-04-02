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
import axios from "axios";

const baseUrl = "https://20ap5ahj81.execute-api.us-east-2.amazonaws.com/dev/composite";
let updatedValues = [];
class SettingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog : false,
      dataList:[],
      role:localStorage.getItem("role")
    };
  }

  componentWillMount() {
    axios.get(baseUrl).then((res) => {
      this.setState({
        dataList:res.data
      })
     });
  }

  handleLogout = () => {
    // localStorage.removeItem("username");
    const {
      history: { push },
    } = this.props;
    push("/");
  };

  openDialog = () =>{
    this.setState({openDialog:true})
  }

  // onCellEditCommit=(event)=>{
  //   console.log('onCellEditCommit--',event)
  // }
  // onCellEditStart=(event)=>{
  //   console.log('onCellEditStart--',event)
  // }
  // onCellClick=(event)=>{
  //   console.log('onCellClick--',event)
  // }
  // onCellDoubleClick=(event)=>{
  //   console.log('onCellDoubleClick--',event)
  // }
  // onEditCellPropsChange=(event)=>{
  //   console.log('onEditCellPropsChange--',event)
  // }
  // onEditRowsModelChange=(event)=>{
  //   console.log('onEditRowsModelChange--',event)
  // }
  // onRowEditCommit=(event)=>{
  //   console.log('onRowEditCommit--',event)
  // }
  // isCellEditable=(event)=>{
  //   console.log('isCellEditable--',event)
  // }
  onStateChange=(event)=>{
    console.log('onStateChange--',event.rows.idRowsLookup)
    updatedValues = event.rows.idRowsLookup;
    console.log('updatedValues--',Object.values(updatedValues))
    // this.setState({
    //   dataList:[...this.state.dataList,event.rows.idRowsLookup]
    // })
    // console.log('dataList--',this.state.dataList)
  }

  handleSubmit=()=>{
    let updatedValueList = [];
    updatedValueList = Object.values(updatedValues)
    axios.post(baseUrl,updatedValueList).then((res) => {
      if(res.data.status==="SUCCESS"){
        alert("Successfully updated")
      }
     });
  }
 
  

  render() {
    const{role}= this.state;
    const isEditable = (role==="admin"?true:false);
    const columns = [
      { field: 'constituent', width: 180,  editable:isEditable, renderHeader: () => (
        <strong>
         <span>Constituent</span>
        </strong>
      ) },
      { field: 'stream1', type: 'string', editable: isEditable,
      renderHeader: () => (
        <strong>
         <span>Stream1</span>
        </strong>
      )
    },
      { field: 'stream2', type: 'string', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream2</span>
        </strong>
      ) },
      { field: 'stream3', type: 'string', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream3</span>
        </strong>
      ) },
      { field: 'stream4', type: 'string', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream4</span>
        </strong>
      ) },
      { field: 'stream5', type: 'string', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream5</span>
        </strong>
      ) },
      { field: 'stream6',type: 'string', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream6</span>
        </strong>
      ) },
      { field: 'stream7', type: 'string', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream7</span>
        </strong>
      ) },
      { field: 'stream8', type: 'string', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream8</span>
        </strong>
      ) },
      
    ];
    
  
    return (
      <div className="space-y-5 h-screen flex">
       
      <Sidebar />
      <div style={{ width: '51%',height:'85%', margin:'30px 0px 0px 300px' }}>
      <DataGrid
        rows={this.state.dataList}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        autoPageSize={true}
        // onCellEditCommit={this.onCellEditCommit}
        // onCellEditStart = {this.onCellEditStart}
        // onCellClick = {this.onCellClick}
        // onCellDoubleClick = {this.onCellDoubleClick}
        // onEditCellPropsChange = {this.onEditCellPropsChange}
        // onEditRowsModelChange = {this.onEditRowsModelChange}
        // onRowEditCommit = {this.onRowEditCommit}
        onStateChange = {e=>this.onStateChange(e)}
        // isCellEditable = {this.isCellEditable}
        // disableSelectionOnClick = {true}
      />
      <div style={{display:'flex',justifyContent:'flex-end',marginTop:'20px'}}>
      <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
      </div>
      
      
    </div>
 


      </div>
    );
  }
}

export default withRouter(SettingPage);
