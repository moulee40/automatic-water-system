import React from "react";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import MotorCard from "./MotorCard";
import Dialog from "./Dialog";
import DetailBox from "./DetailBox";

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
    const coolingTower = ["CT1"];
    return (
      <div className="space-y-5 h-screen flex">
        {/* <div className="flex justify-end items-center"> */}


  <Sidebar />
  <div className="flex flex-1 flex-wrap p-6 justify-center">
  {coolingTower.map((label,index) => {
  return(
  <div className="flex">  
  <MotorCard label={label} onClick={this.openDialog} key={index}/>
  <DetailBox/>
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
