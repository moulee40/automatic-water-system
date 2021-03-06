import React from "react";
import { withRouter } from "react-router";
import CoolingTower from "../img/CoolingTower.png"
import BottomContainer from "./BottomContainer";

class MotorCard extends React.Component {
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
    return (
        <div class="max-w-xs bg-white rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 max-h-[176px] min-w-[9rem] relative "
        // transition ease-in-out delay-100 hover:scale-110 duration-300" 
        onClick={this.props.onClick}>
        <div class="px-4 py-2">
            <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{this.props.label}</h1>
            {/* <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p> */}
        </div>

        <img class="object-contain w-full h-24" src={CoolingTower} alt="NIKE AIR"/>

        <div class="flex items-center justify-between px-4 py-2 bg-gray-600">
            <h1 class="text-sm font-bold text-white">Status</h1>
            <h1 class="text-sm font-bold text-white">ON</h1>
            {/* <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">ON</button> */}
        </div>
        {this.props.displayBottom && <BottomContainer name={this.props.label} data={this.props.data}/>}

        <div className='border-l-[16px] border-solid border-red-400 h-[156%] absolute bottom-full left-1/4'></div>
        <div className='border-l-[16px] border-solid border-yellow-200 h-[195%] absolute bottom-full left-1/2'></div>
        <div  className='border-l-[16px] border-solid border-blue-300 h-[234%] absolute bottom-full left-3/4'></div>

    </div>
    );
  }
}

export default withRouter(MotorCard);
