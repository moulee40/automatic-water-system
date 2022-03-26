import React from "react";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import MotorCard from "./MotorCard";

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

  render() {
    const {openDialog} = this.state;
    const coolingTower = ["CT1","CT2","CT3","CT4","CT5","CT6","CT7","CT8","CT9","CT10"];
    return (
      <div className="space-y-5 h-screen flex">
        {/* <div className="flex justify-end items-center"> */}


  <Sidebar />
  <div className="flex flex-wrap p-6 justify-center items-center">
  {coolingTower.map(label => {
  return(<MotorCard label={label}/>);
})}

  </div>

      </div>
    );
  }
}

export default withRouter(Main);
