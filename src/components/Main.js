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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import axios from "axios";

const eventBaseUrl = "https://n8meabel9l.execute-api.us-east-2.amazonaws.com/dev/all";
const plantDataUrl = "https://ouvusj69el.execute-api.us-east-2.amazonaws.com/dev/";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog : false,
      currentLabel:'',
      data:{},
      status:[],
      plantData:{}
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
    let url= plantDataUrl+label+"/data"
    axios.get(url).then((res) => {
    this.setState({openDialog:true,currentLabel:label,plantData:res.data})
  })
}

  handleClose = () =>{
    this.setState({openDialog:false})
  }

  render() {
    const {openDialog,data,status,plantData} = this.state;
    const coolingTower = ["nap1","nap2","nap3"];
    return (
  <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col relative w-full">
      <DashboardTopSection data={data}></DashboardTopSection>
      <div className="flex flex-1 flex-wrap px-6 pt-14 justify-evenly relative">
      {coolingTower.map((label,index) => {
      return(
        <div className={status && status[index]==="ON"?"flex flex-col relative":"flex flex-col relative pointer-events-none opacity-80"}>
          {/* <div id='pipe'></div> */}
          
          {/* <div className="flex flex-1 justify-center">
            <div className='border-l-2 border-solid border-white relative'>
            <KeyboardArrowDownIcon className='text-blue-600 absolute bottom-[-15px] left-[-24px]' style={{fontSize:'46px'}}/>
            </div>
          </div> */}
          <MotorCard label={label} onClick={()=>this.openDialog(label)} key={index}/>
          <div className="flex flex-1 justify-center">
            <div className='border-l-8 border-solid border-[#7B3F00] relative'>
            <KeyboardArrowDownIcon className='text-white absolute bottom-[-17px] left-[-27px]' style={{fontSize:'46px'}}/>
            </div>
          </div>
  </div>
  );
})}

  </div>
  <DashboardBottomSection data={data}></DashboardBottomSection>
  <footer class="text-center lg:text-left" >
  <div class="text-white text-center p-4 ">
    © Copyright 2021, Ariceo :
    <a class="text-white" href=""> Privacy Terms</a>
  </div>
</footer>
      </div>
      
  <Dialog open={openDialog} handleClose={this.handleClose} currentLabel={this.state.currentLabel} data={plantData}/>
      </div>
    );
  }
}

export default withRouter(Main);
