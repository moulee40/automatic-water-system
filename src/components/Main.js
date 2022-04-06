import React from "react";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import MotorCard from "./MotorCard";
import Dialog from "./Dialog";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import BottomContainer from "./BottomContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog : false
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

  handleClose = () =>{
    this.setState({openDialog:false})
  }

  render() {
    const {openDialog} = this.state;
    const coolingTower = ["CT1","CT2","CT3"];
    return (
  <div className="space-y-5 h-screen flex">
      <Sidebar />
      <div className="flex flex-1 flex-wrap p-6 justify-center space-y-80">
      {coolingTower.map((label,index) => {
      return(
        <div className="flex relative">
          <LeftContainer/>  
          <MotorCard label={label} onClick={this.openDialog} key={index}/>
          <RightContainer/>
          <BottomContainer/>
  </div>
  );
})}

  </div>
  <Dialog open={openDialog} handleClose={this.handleClose}/>
      </div>
    );
  }
}

export default withRouter(Main);
