import React from "react";
import Tab from "./Tab";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import MotorCard from "./MotorCard";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
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



          {/* <h2 className="text-4xl font-semibold text-blue-800">
           Health Care Blockchain System
          </h2> */}
          {/* <button
            class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-2"
            onClick={this.handleLogout}
          >
            Logout
          </button> */}
        {/* </div> */}
        {/* <Tab /> */}
      </div>
    );
  }
}

export default withRouter(Main);
