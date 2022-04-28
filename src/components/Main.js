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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog : false,
      currentLabel:''
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

  openDialog = (label) =>{
    this.setState({openDialog:true,currentLabel:label})
  }

  handleClose = () =>{
    this.setState({openDialog:false})
  }

  render() {
    const {openDialog} = this.state;
    const coolingTower = ["CT1","CT2","CT3"];
    return (
  <div className="space-y-5 h-screen flex">
      <Sidebar />
      <div className="flex flex-col relative w-full">
      <DashboardTopSection></DashboardTopSection>
      <div className="flex flex-1 flex-wrap p-6 justify-evenly relative">
      {coolingTower.map((label,index) => {
      return(
        <div className="flex relative">
          {/* <LeftContainer/>   */}
          <MotorCard label={label} onClick={()=>this.openDialog(label)} key={index}/>
          {/* <RightContainer/>
          <BottomContainer/> */}
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
