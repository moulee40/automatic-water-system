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
      supply_temp:data.supply_temp,
      return_temp:data.return_temp,
      relative_humidity:data.relative_humidity,
      ambient_temp:data.ambient_temp,
      wetBulb_temp:data.wetBulb_temp,
      delta_temp:data.delta_temp,
      approach_temp:data.approach_temp,
      hold_time_index:data.hold_time_index,
      ct_alk:data.ct_alk,
      ct_chloride:data.ct_chloride,
      ct_conductivity:data.ct_conductivity,
      system_vol:data.system_vol,
      rec_rate:data.rec_rate,
      evap_loss:data.evap_loss,
      drift_loss:data.drift_loss,
      cooling_tower_level:data.cooling_tower_level,
      currentOperatingCost:data.currentOperatingCost
     
    })
  }

  render() {
    const{hex1LMTD,hex2LMTD,hex3LMTD,hex3TTD,hex2TTD,hex1TTD,supply_temp,return_temp,relative_humidity,ambient_temp,
          wetBulb_temp,approach_temp,hold_time_index,ct_alk,ct_chloride,ct_conductivity,system_vol,rec_rate,evap_loss,
           drift_loss,cooling_tower_level,delta_temp,currentOperatingCost} = this.state;
           const{data} = this.props;
    return (
     <div className='flex flex-col'>
       <div className='flex '>
         <DetailBoxLastTop title={'System Volume'} value={system_vol} isTagPresent={data.system_vol_tagName!==undefined?true:false} 
                           tagValue={data.system_vol_tagName!==undefined?data.system_vol_tagName:''}/>
         <DetailBoxLastTop title={'Recirculation Rate'} value={rec_rate}  isTagPresent={data.rec_rate_tagName!==undefined?true:false} 
                           tagValue={data.rec_rate_tagName!==undefined?data.rec_rate_tagName:''}/>
         <DetailBoxLastTop title={'Evaporation Loss'} value={evap_loss}  isTagPresent={data.evap_loss_tagName!==undefined?true:false} 
                           tagValue={data.evap_loss_tagName!==undefined?data.evap_loss_tagName:''}/>
         <DetailBoxLastTop title={'Drift loss'} value={drift_loss}   isTagPresent={data.drift_loss_tagName!==undefined?true:false} 
                           tagValue={data.drift_loss_tagName!==undefined?data.drift_loss_tagName:''}/>
         <DetailBoxLastTop title={'Basin Level'} value={cooling_tower_level}   isTagPresent={data.cooling_tower_level_tagName!==undefined?true:false} 
                           tagValue={data.cooling_tower_level_tagName!==undefined?data.cooling_tower_level_tagName:''}/>
       </div>
       <div className='flex '>
         <DetailBoxLastTop  title={'Relative Humidity'} value={relative_humidity} isTagPresent={data.relative_humidity_tagName!==undefined?true:false} 
                           tagValue={data.relative_humidity_tagName!==undefined?data.relative_humidity_tagName:''}/>
         <DetailBoxLastTop title={'Air Temperature'} value={ambient_temp} isTagPresent={data.ambient_temp_tagName!==undefined?true:false} 
                           tagValue={data.ambient_temp_tagName!==undefined?data.ambient_temp_tagName:''}/>
         <DetailBoxLastTop title={'Wet Bulb Temperature'} value={wetBulb_temp}  isTagPresent={data.wetBulb_temp_tagName!==undefined?true:false} 
                           tagValue={data.wetBulb_temp_tagName!==undefined?data.wetBulb_temp_tagName:''}/>
         <DetailBoxLastTop title={'Approach Temperature'} value={approach_temp}  isTagPresent={data.approach_temp_tagName!==undefined?true:false} 
                           tagValue={data.approach_temp_tagName!==undefined?data.approach_temp_tagName:''}/>
       </div>
       <div className='flex '>
         <DetailBoxLastTop title={'Supply Temperature'} value={supply_temp} isTagPresent={data.supply_temp_tagName!==undefined?true:false} 
                           tagValue={data.supply_temp_tagName!==undefined?data.supply_temp_tagName:''}/>
         <DetailBoxLastTop title={'Return Temperature'} value={return_temp} isTagPresent={data.return_temp_tagName!==undefined?true:false} 
                           tagValue={data.return_temp_tagName!==undefined?data.return_temp_tagName:''}/>
         <DetailBoxLastTop title={'Range'} value={delta_temp} isTagPresent={data.delta_temp_tagName!==undefined?true:false} 
                           tagValue={data.delta_temp_tagName!==undefined?data.delta_temp_tagName:''}/>
         <DetailBoxLastTop title={'Current Cost Of Operation'} value={currentOperatingCost} isTagPresent={data.currentOperatingCost_tagName!==undefined?true:false} 
                           tagValue={data.currentOperatingCost_tagName!==undefined?data.currentOperatingCost_tagName:''}/>
       </div>
    </div>
    );
  }
}

export default withRouter(LastTopSection);
