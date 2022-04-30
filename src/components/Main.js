import React from "react";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import MotorCard from "./MotorCard";
import Dialog from "./Dialog";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import BottomContainer from "./BottomContainer";
import DashboardTopSection from "./DashboardTopSection";
import DashboardBottomSection from "./DashboardBottomSection";
import axios from "axios";

const eventBaseUrl = "https://n8meabel9l.execute-api.us-east-2.amazonaws.com/dev/all";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog : false,
      currentLabel:'',
      data:{},
      status:[]
    };
  }

  
  componentWillMount() {
    const{name}=this.props
    axios.get(eventBaseUrl).then((res) => {
     this.setState({
       data:res.data.data,
       status:res.data.data.status
     })
    })
  }

  handleLogout = () => {
    // localStorage.removeItem("username");
    const {
      history: { push },
    } = this.props;
    push("/");
  };

  openDialog = (label) =>{
    this.setState({openDialog:true,currentLabel:label})
  }

  handleClose = () =>{
    this.setState({openDialog:false})
  }

  render() {
    const {openDialog,data,status} = this.state;
    const coolingTower = ["nap1","nap2","nap3"];
    return (
  <div className="space-y-5 h-screen flex">
      <Sidebar />
      <div className="flex flex-col relative w-full">
      <DashboardTopSection data={data}></DashboardTopSection>
      <div className="flex flex-1 flex-wrap p-6 justify-evenly relative">
      {coolingTower.map((label,index) => {
      return(
        <div className={status && status[index]==="ON"?"flex relative":"flex relative pointer-events-none opacity-80"}>
          <MotorCard label={label} onClick={()=>this.openDialog(label)} key={index}/>
  </div>
  );
})}

  </div>
  <DashboardBottomSection></DashboardBottomSection>
      </div>
      
  <Dialog open={openDialog} handleClose={this.handleClose} currentLabel={this.state.currentLabel}/>
      </div>
    );
  }
}

export default withRouter(Main);
