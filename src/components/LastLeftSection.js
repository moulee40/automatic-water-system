import React from "react";
import { withRouter } from "react-router";
import DetailBoxLastTop from "./DetailBoxLastTop";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";

const baseUrl = "https://20ap5ahj81.execute-api.us-east-2.amazonaws.com/dev/composite";


class LastLeftSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cleanCondensateValue:'',
      kwrpValue:'',
      schemeValue:'',
      boreValue:'',
      muValue:''
    };
  }

  componentWillMount() {
    const{data}=this.props
    axios.get(baseUrl).then((res) => {
      this.setState({
        stream1:res.data[1].stream1,
        stream2:res.data[1].stream2,
        stream3:res.data[1].stream3,
        stream4:res.data[1].stream4,
        stream6:res.data[1].stream6
      })
     })
    this.setState({
      mu_conductivity:data.mu_conductivity,
      mu_flow:data.mu_flow,
      mu_ph:data.mu_ph,
      kwrp_flow_tagname:data.kwrp_flow_tagname!=undefined?data.kwrp_flow_tagname:'',
      tamala_flow_tagname:data.tamala_flow_tagname!=undefined?data.tamala_flow_tagname:'',
      scheme_flow_tagname:data.scheme_flow_tagname!=undefined?data.scheme_flow_tagname:'',
      bore13_flow_tagname:data.bore13_flow_tagname!=undefined?data.bore13_flow_tagname:'',
      ro_flow_tagname:data.ro_flow_tagname!=undefined?data.ro_flow_tagname:'',
    });
  }

  render() {
    const{mu_conductivity,mu_flow,mu_ph,stream1,stream2,stream3,stream4,stream6,kwrp_flow_tagname,
      tamala_flow_tagname,scheme_flow_tagname,bore13_flow_tagname,ro_flow_tagname} = this.state;
    const{data} = this.props;
    return (
        <div className="flex relative">
            <div className="relative flex">
              <div>
              <DetailBoxLastTop rightArrow marginRightLg title={'KWRP Flow'} value={stream2} isTagPresent={data.kwrp_flow_tagname!==undefined?true:false} 
                           tagValue={kwrp_flow_tagname}/>
              <DetailBoxLastTop rightArrow marginRightLg  title={'Tamala Flow'} value={stream1} isTagPresent={data.tamala_flow_tagname!==undefined?true:false} 
                           tagValue={tamala_flow_tagname}/>
              <DetailBoxLastTop rightArrow marginRightLg title={'Scheme Flow'} value={stream3} isTagPresent={data.scheme_flow_tagname!==undefined?true:false} 
                           tagValue={scheme_flow_tagname}/>
              <DetailBoxLastTop rightArrow marginRightLg title={'Bore13 Flow'} value={stream4} isTagPresent={data.bore13_flow_tagname!==undefined?true:false} 
                           tagValue={bore13_flow_tagname}/>
              <DetailBoxLastTop rightArrow marginRightLg title={'RO Flow'} value={stream6} isTagPresent={data.ro_flow_tagname!==undefined?true:false} 
                           tagValue={ro_flow_tagname}/>
              </div>
              <div className='max-h-[458px] mt-[87px]' style={{border:'10px solid #93c5fd',backgroundColor:'#93c5fd'}}/>
            </div>
            <div className="relative">
            
            {/* <DetailBoxLastTop title={'System Volume'} value={""} isTagPresent tagValue/> */}
            <DetailBoxLastTop title={'mu Ph'} value={mu_ph} isTagPresent={data.mu_ph_tagName!==undefined?true:false} 
                           tagValue={data.mu_ph_tagName!==undefined?data.mu_ph_tagName:''}/>
            <DetailBoxLastTop title={'mu conductivity'} value={mu_conductivity} isTagPresent={data.mu_conductivity_tagName!==undefined?true:false} 
                           tagValue={data.mu_conductivity_tagName!==undefined?data.mu_conductivity_tagName:''}/>
            <DetailBoxLastTop title={'mu flow'} value={mu_flow} isTagPresent={data.mu_flow_tagName!==undefined?true:false} 
                           tagValue={data.mu_flow_tagName!==undefined?data.mu_flow_tagName:''}/>
            <div className=' border-t-2 border-gray-500 border-solid relative mt-11' style={{border:'12px solid #93c5fd',backgroundColor:'#93c5fd'}}>
            {/* <ArrowForwardIosIcon className='absolute top-[-13px] left-[94%]' style={{color: '#01add1'}} /> */}
            </div>
            {/* <DetailBox marginTopLg/> */}
            {/* <DetailBox/> */}
            </div>
      </div>
   
    );
  }
}

export default withRouter(LastLeftSection);
