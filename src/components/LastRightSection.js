import React from "react";
import { withRouter } from "react-router";
import DetailBox3 from "./DetailBox3";
import DetailBox1 from "./DetailBox1";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";
import HeatIcon from "../img/HeatIcon.png"

const eventBaseUrl = "https://ouvusj69el.execute-api.us-east-2.amazonaws.com/dev/";


class LastRightSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      returnTempValue:'',
      supplyTempValue:'',
    };
  }

  componentWillMount() {
    const{data}=this.props
      this.setState({
        LMTD1value:data.LMTD1,
        LMTD2value:data.LMTD2,
        LMTD3value:data.LMTD3,
        TTD1value:data.TTD1,
        TTD2value:data.TTD2,
        TTD3value:data.TTD3,
        HEX1_tagname:data.HEX1_tagname!==undefined?data.HEX1_tagname:'',
        HEX2_tagname:data.HEX2_tagname!==undefined?data.HEX2_tagname:'',
        HEX3_tagname:data.HEX3_tagname!==undefined?data.HEX3_tagname:'',
      })

    //  });
  }

  render() {
    const{HEX3_tagname,HEX1_tagname,HEX2_tagname,LMTD1value,LMTD2value,LMTD3value,TTD1value,TTD2value,TTD3value} = this.state;
    const {data} = this.props;
    return (
      <div className="flex">
        <div className="space-y-4 self-center mr-9">
            <div className="flex w-40 h-28 border-2 border-l-0 border-solid border-gray-500 rounded-none relative" 
                 style={{borderBottom:'15px solid white',borderTop:'15px solid Red',borderRight:'15px solid white',
                 borderImageSource:'linear-gradient(0deg, rgba(147,197,253,1) 0%, rgba(229,241,255,1) 50%, rgba(255,0,0,1) 85%)',borderImageSlice:'1'}}>
            {/* <ArrowForwardIosIcon className='absolute top-[90%] left-[90%]' style={{color: '#01add1'}}/> */}
            {/* <ArrowBackIosIcon className='absolute top-[-13%]' style={{color: '#01add1'}}/> */}
            <img class="object-contain h-16 absolute left-[70%]" src={HeatIcon} alt="Heat Icon"/>
            </div>
          </div>
          <div className="self-center">
          <DetailBox3 title={'Hex 1(C)'} LMTDvalue={LMTD1value} TTDvalue={TTD1value} 
                      isTagPresent={data.HEX1_tagname!==undefined?true:false} tagValue={HEX1_tagname}/>
          <DetailBox3 title={'Hex 2(C)'} LMTDvalue={LMTD2value} TTDvalue={TTD2value} 
           isTagPresent={data.HEX2_tagname!==undefined?true:false} tagValue={HEX2_tagname}/>
          <DetailBox3 title={'Hex 3(C)'} LMTDvalue={LMTD3value} TTDvalue={TTD3value} 
           isTagPresent={data.HEX3_tagname!==undefined?true:false} tagValue={HEX3_tagname}/>
          </div>
      </div>
   
    );
  }
}

export default withRouter(LastRightSection);
