import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DetailBoxLastTop from "./DetailBoxLastTop";

class LastBottomSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const {data}=this.props;
    this.setState({
      flow_cycle:data.flow_cycle,
      sat_index:data.sat_index,
      sta_index:data.sta_index,
      perf_index:data.perf_index,
      hold_time_index:data.hold_time_index,
      dosing_continuous:data.dosing_continuous,
      dosing_slug:data.dosing_slug,
      dosing_contact_time:data.dosing_contact_time,
      ct_ph:data.ct_ph,
      ct_alk: data.ct_alk,
      ct_chloride: data.ct_chloride,
      ct_conductivity: data.ct_conductivity,
      ct_tds:data.ct_tds

    })
  }

  render() {
    const {flow_cycle,sat_index,sta_index,perf_index,hold_time_index,dosing_continuous,dosing_slug,
      dosing_contact_time,ct_ph,ct_alk,ct_chloride,ct_conductivity,ct_tds}=this.state;
    const {data} = this.props;
    return (
     <div className="flex justify-center">
       <div className="flex ">
        <div className="flex flex-col">
        <DetailBoxLastTop title={'CT Cycles'} value={flow_cycle} 
        isTagPresent={data.flow_cycle_tagname!==undefined?true:false} 
        tagValue={data.flow_cycle_tagname!==undefined?data.flow_cycle_tagname:''}/>
        <DetailBoxLastTop title={'LSI'} value={sat_index} 
        isTagPresent={data.flow_cycle_tagname!==undefined?true:false} 
        tagValue={data.flow_cycle_tagname!==undefined?data.flow_cycle_tagname:''}/>
        <DetailBoxLastTop title={'RSI'} value={sta_index} 
        isTagPresent={data.flow_cycle_tagname!==undefined?true:false} 
        tagValue={data.flow_cycle_tagname!==undefined?data.flow_cycle_tagname:''}/>
        <DetailBoxLastTop title={'Performance Index'} value={perf_index} 
        isTagPresent={data.perf_index_tagname!==undefined?true:false} 
        tagValue={data.perf_index_tagname!==undefined?data.perf_index_tagname:''}/>
        </div>
        <div className="flex flex-col">
        <DetailBoxLastTop title={'HTI'} value={hold_time_index} 
        isTagPresent={data.hold_time_index_tagname!==undefined?true:false} 
        tagValue={data.hold_time_index_tagname!==undefined?data.hold_time_index_tagname:''}/>
        <DetailBoxLastTop title={'Chemical Dose Continuous'} value={dosing_continuous} 
        isTagPresent={data.dosing_continuous_tagname!==undefined?true:false} 
        tagValue={data.dosing_continuous_tagname!==undefined?data.dosing_continuous_tagname:''}/>
        <DetailBoxLastTop title={'Chemical Dose Slug'} value={dosing_slug} 
        isTagPresent={data.dosing_slug_tagname!==undefined?true:false} 
        tagValue={data.dosing_slug_tagname!==undefined?data.dosing_slug_tagname:''}/>
        <DetailBoxLastTop title={'Dosing Contact Time'} value={dosing_contact_time} 
        isTagPresent={data.dosing_contact_time_tagname!==undefined?true:false} 
        tagValue={data.dosing_contact_time_tagname!==undefined?data.dosing_contact_time_tagname:''}/>
        </div>
       </div>
        <div className="border-l-2 border-solid border-white mx-8"></div>
       <div className="flex flex-col">
          <DetailBoxLastTop title={'BD pH'} value={ct_ph} 
          isTagPresent={data.ct_ph_tagname!==undefined?true:false} 
          tagValue={data.ct_ph_tagname!==undefined?data.ct_ph_tagname:''}/>
          <DetailBoxLastTop title={'BD conductivity'} value={ct_conductivity} 
          isTagPresent={data.ct_conductivity_tagname!==undefined?true:false} 
          tagValue={data.ct_conductivity_tagname!==undefined?data.ct_conductivity_tagname:''}/>
          <DetailBoxLastTop title={'BD chloride'} value={ct_chloride} 
          isTagPresent={data.ct_chloride_tagname!==undefined?true:false} 
          tagValue={data.ct_chloride_tagname!==undefined?data.ct_chloride_tagname:''}/>
          <DetailBoxLastTop title={'BD alkalinity'} value={ct_alk} 
          isTagPresent={data.ct_alk_tagname!==undefined?true:false} 
          tagValue={data.ct_alk_tagname!==undefined?data.ct_alk_tagname:''}/>
          <DetailBoxLastTop title={'BD TDS'} value={ct_tds} 
          isTagPresent={data.ct_tds_tagname!==undefined?true:false} 
          tagValue={data.ct_tds_tagname!==undefined?data.ct_tds_tagname:''}/>
       </div>
    </div>
    );
  }
}

export default withRouter(LastBottomSection);
