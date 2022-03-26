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
    // if (localStorage.getItem("username") === null) {
    //   const {
    //     history: { push },
    //   } = this.props;
    //   push("/");
    // }
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
    // this.setState({
    //   dataList:[...this.state.dataList,event.rows.idRowsLookup]
    // })
    // console.log('dataList--',this.state.dataList)
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
      { field: 'stream1', type: 'number',
      renderHeader: () => (
        <strong>
         <span>Stream1</span>
        </strong>
      )
    },
      { field: 'stream2', type: 'number', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream2</span>
        </strong>
      ) },
      { field: 'stream3', type: 'number', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream3</span>
        </strong>
      ) },
      { field: 'stream4', type: 'number', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream4</span>
        </strong>
      ) },
      { field: 'stream5', type: 'number', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream5</span>
        </strong>
      ) },
      { field: 'stream6',type: 'number', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream6</span>
        </strong>
      ) },
      { field: 'stream7', type: 'number', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream7</span>
        </strong>
      ) },
      { field: 'stream8', type: 'number', editable: isEditable,renderHeader: () => (
        <strong>
         <span>Stream8</span>
        </strong>
      ) },
      
    ];
    
    const rows = [
      { id: 1,constituent:'Flow, m3/h',stream1:42,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 2,constituent:'Water Cost, $/m3',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 3,constituent:'pH',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 4,constituent:'Specific Conductance, umhos',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 5,constituent:'Calcium as CaCO3',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 6,constituent:'Magnesium as CaCO3',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 7,constituent:'Sodium as Na',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 8,constituent:'Iron as Fe',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 9,constituent:'Copper as Cu',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 10,constituent:'Zinc as Zn',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 11,constituent:'M Alkalinity as CaCO3',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 12,constituent:'Chloride as Cl',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 13,constituent:'Sulfate as SO4',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 14,constituent:'Phosphate as PO4',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
      { id: 15,constituent:'Silica as SiO2',stream1:42.64,stream2: 25,stream3:42.64,stream4: 42,stream5: 42.64,stream6: 42.64,stream7: 42.64,stream8: 42.64},
    ];
  
    return (
      <div className="space-y-5 h-screen flex">
       
      <Sidebar />
      <div style={{ width: '51%', margin:'30px 0px 0px 300px' }}>
      <DataGrid
        rows={rows}
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
    </div>
 


      </div>
    );
  }
}

export default withRouter(SettingPage);
