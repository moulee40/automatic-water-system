import React from "react";
import { withRouter } from "react-router";
import DetailBox3 from "./DetailBox3";
import DetailBox1 from "./DetailBox1";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";
import HeatIcon from "../img/HeatIcon.png"

const eventBaseUrl = "https://ouvusj69el.execute-api.us-east-2.amazonaws.com/dev/";


class RightContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      returnTempValue:'',
      supplyTempValue:'',
    };
  }

  componentWillMount() {
    const{data}=this.props
    // let url= eventBaseUrl+name+"/data"
    // axios.get(url).then((res) => {
      
      // if(res.data.kwrp.length!==undefined){
      //   this.setState({
      //     kwrpPV:res.data.kwrp[0],
      //     kwrpOV:res.data.kwrp[1],

      //   })
      // }
      // else{
      //   this.setState({
      //     kwrpValue:res.data.kwrp
      //   })
      // }
      this.setState({
        supplyTempValue:data.supply_temp,
        returnTempValue:data.return_temp,
        LMTD1value:data.LMTD1,
        LMTD2value:data.LMTD2,
        LMTD3value:data.LMTD3,
        TTD1value:data.TTD1,
        TTD2value:data.TTD2,
        TTD3value:data.TTD3
      })

    //  });
  }

  render() {
    const{supplyTempValue,returnTempValue,LMTD1value,LMTD2value,LMTD3value,TTD1value,TTD2value,TTD3value} = this.state;
    return (
      <div className="flex">
        <div className="space-y-4">
            <DetailBox1 title={'Return Temp'} value={returnTempValue} subtitle={'(C)'} rounded/>
            <div className="flex w-40 h-28 border-2 border-l-0 border-solid border-gray-500 rounded-none relative" 
                 style={{borderBottom:'15px solid white',borderTop:'15px solid Red',borderRight:'15px solid white',
                 borderImageSource:'linear-gradient(0deg, rgba(147,197,253,1) 0%, rgba(229,241,255,1) 50%, rgba(255,0,0,1) 85%)',borderImageSlice:'1'}}>
            {/* <ArrowForwardIosIcon className='absolute top-[90%] left-[90%]' style={{color: '#01add1'}}/> */}
            {/* <ArrowBackIosIcon className='absolute top-[-13%]' style={{color: '#01add1'}}/> */}
            <img class="object-contain h-16 absolute left-[70%]" src={HeatIcon} alt="Heat Icon"/>
            </div>
            <DetailBox1 title={'Supply Temp'} value={supplyTempValue} subtitle={'(C)'} rounded/>
          </div>
          <div>
          <DetailBox3 title={'Hex 1(C)'} LMTDvalue={LMTD1value} TTDvalue={TTD1value}/>
          <DetailBox3 title={'Hex 2(C)'} LMTDvalue={LMTD2value} TTDvalue={TTD2value}/>
          <DetailBox3 title={'Hex 3(C)'} LMTDvalue={LMTD3value} TTDvalue={TTD3value}/>
          </div>
      </div>
   
    );
  }
}

export default withRouter(RightContainer);
