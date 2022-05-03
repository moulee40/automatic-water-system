import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DetailBox1 from "./DetailBox1";
import DetailBox3 from "./DetailBox3";

class LastTopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hex1LMTD:'',
      hex2LMTD:'',
      hex3LMTD:'',
      hex1TTD:'',
      hex2TTD:'',
      hex3TTD:'',
    };
    
  }

  componentWillMount(){
    const {data} = this.props;
    console.log('checing res',data)
    this.setState({
      hex1LMTD:data.LMTD1,
      hex2LMTD:data.LMTD2,
      hex3LMTD:data.LMTD3,
      hex1TTD:data.TTD1,
      hex2TTD:data.TTD2,
      hex3TTD:data.TTD3,
      supplyTmp:data.supply_temp,
      returnTmp:data.return_temp,
      relativeHumitidity:data.relative_humidity,
      ambientTemp:data.ambient_temp,
      wetBulbTemp:data.wetBulb_temp,
      approachTemp:data.approach_temp,
      hti:data.hold_time_index,
      ct_alk:data.ct_alk,
      ct_chloride:data.ct_chloride,
      ct_conductivity:data.ct_conductivity,
      system_vol:data.system_vol,
      rec_rate:data.rec_rate,
      evap_loss:data.evap_loss,
      drift_loss:data.drift_loss,
     
    })
  }

  render() {
    const{hex1LMTD,hex2LMTD,hex3LMTD,hex3TTD,hex2TTD,hex1TTD,supplyTmp,returnTmp,relativeHumitidity,ambientTemp,
          wetBulbTemp,approachTemp,hti,ct_alk,ct_chloride,ct_conductivity,system_vol,rec_rate,evap_loss,
           drift_loss} = this.state;
    return (
     <div className='flex'>
       <div className='flex flex-col'>
         <DetailBox1 title={'System Vol'} value={system_vol}/>
         <DetailBox1 title={'Rec rate'} value={rec_rate}/>
         <DetailBox1 title={'Evap loss'} value={evap_loss}/>
         <DetailBox1 title={'Drift loss'} value={drift_loss}/>
       </div>
       <div className='flex flex-col'>
         <DetailBox1  title={'HTI'} value={hti}/>
         <DetailBox1 title={'CT Alk'} value={ct_alk}/>
         <DetailBox1 title={'CT chloride'} value={ct_chloride}/>
         <DetailBox1 title={'CT conductivity'} value={ct_conductivity}/>
       </div>
       <div className='flex flex-col'>
         <DetailBox1 title={'Relative Humitidity'} value={relativeHumitidity} subtitle={'%'}/>
         <DetailBox1 title={'Ambient Temp'} value={ambientTemp} subtitle={'(C)'}/>
         <DetailBox1 title={'Wetbulb Temp'} value={wetBulbTemp} subtitle={'(C)'}/>
         <DetailBox1 title={'Approach Temp'} value={approachTemp} subtitle={'(C)'}/>
       </div>
       <div className='flex flex-col'>
         <DetailBox1 title={'Supply Temp'} value={supplyTmp} subtitle={'(C)'}/>
         <DetailBox1 title={'Return Temp'} value={returnTmp} subtitle={'(C)'}/>
       </div>
       <div className='flex flex-col'>
         <DetailBox3 title={'HEX 1(C)'} LMTDvalue={hex1LMTD} TTDvalue={hex1TTD} />
         <DetailBox3  title={'HEX 2(C)'} LMTDvalue={hex2LMTD} TTDvalue={hex2TTD}/>
         <DetailBox3  title={'HEX 3(C)'} LMTDvalue={hex3LMTD} TTDvalue={hex3TTD}/>
       </div>
           
    </div>
    );
  }
}

export default withRouter(LastTopSection);
