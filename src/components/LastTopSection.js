import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DetailBox1 from "./DetailBox1";
import DetailBoxLastTop from "./DetailBoxLastTop";

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
     <div className='flex flex-col'>
       <div className='flex '>
         <DetailBoxLastTop title={'System Volume'} value={system_vol} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Recirculation Rate'} value={rec_rate} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Evaporation Loss'} value={evap_loss} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Drift loss'} value={drift_loss}  tagValue/>
         <DetailBoxLastTop title={'Basin Level'} value={drift_loss}  tagValue/>
       </div>
       <div className='flex '>
         <DetailBoxLastTop  title={'Relative Humidity'} value={hti} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Air Temperature'} value={ct_alk}  tagValue/>
         <DetailBoxLastTop title={'Wet Bulb Temperature'} value={ct_chloride} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Approach Temperature'} value={ct_conductivity} isTagPresent tagValue/>
       </div>
       <div className='flex '>
         <DetailBoxLastTop title={'Supply Temperature'} value={relativeHumitidity} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Return Temperature'} value={ambientTemp} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Range'} value={wetBulbTemp} isTagPresent tagValue/>
         <DetailBoxLastTop title={'Current Cost Of Operation'} value={wetBulbTemp} isTagPresent tagValue/>
       </div>
    </div>
    );
  }
}

export default withRouter(LastTopSection);
