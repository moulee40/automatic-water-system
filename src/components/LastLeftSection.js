import React from "react";
import { withRouter } from "react-router";
import DetailBoxLastTop from "./DetailBoxLastTop";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";

const eventBaseUrl = "https://ouvusj69el.execute-api.us-east-2.amazonaws.com/dev/";


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
    // let url= eventBaseUrl+name+"/data"
    // axios.get(url).then((res) => {
      if(data.kwrp.length!==undefined){
        this.setState({
          kwrpPV:data.kwrp[0],
          kwrpOV:data.kwrp[1],
        })
      }
      else{
        this.setState({
          kwrpValue:data.kwrp
        })
      }

      if(data.clean_condensate.length!==undefined){
        this.setState({
          cleanCondensatePV:data.clean_condensate[0],
          cleanCondensateOV:data.clean_condensate[1],
        })
      }
      else{
        this.setState({
          cleanCondensateValue:data.clean_condensate
        })
      }

      if(data.scheme.length!==undefined){
        this.setState({
          schemePV:data.scheme[0],
          schemeOV:data.scheme[1],
        })
      }
      else{
        this.setState({
         schemeValue:data.scheme
        })
      }

      if(data.tamala.length!==undefined){
        this.setState({
          borePV:data.tamala[0],
          boreOV:data.tamala[1],
        })
      }
      else{
        this.setState({
        boreValue:data.tamala
        })
      }

      if(data.mu_flow.length!==undefined){
        this.setState({
          muPV:data.mu_flow[0],
          muOV:data.mu_flow[1],
        })
      }
      else{
        this.setState({
        muValue:data.mu_flow
        })
      }

    //  });
  }

  render() {
    const{cleanCondensatePV,cleanCondensateOV,kwrpOV,kwrpPV,schemeOV,schemePV,schemeValue,kwrpValue,cleanCondensateValue,
          boreValue,boreOV,borePV,muValue,muPV,muOV} = this.state;
    return (
        <div className="flex relative">
            <div className="relative flex">
              <div>
              <DetailBoxLastTop rightArrow marginRightLg title={'System Volume'} value={""} isTagPresent tagValue/>
              <DetailBoxLastTop rightArrow marginRightLg  title={'System Volume'} value={""} isTagPresent tagValue/>
              <DetailBoxLastTop rightArrow marginRightLg title={'System Volume'} value={""} isTagPresent tagValue/>
              <DetailBoxLastTop rightArrow marginRightLg title={'System Volume'} value={""} isTagPresent tagValue/>
              <DetailBoxLastTop rightArrow marginRightLg title={'System Volume'} value={""} isTagPresent tagValue/>
              </div>
              <div className='max-h-[458px] mt-[87px]' style={{border:'10px solid white',backgroundColor:'white'}}/>
            </div>
            <div className="relative">
            
            {/* <DetailBoxLastTop title={'System Volume'} value={""} isTagPresent tagValue/> */}
            <DetailBoxLastTop title={'System Volume'} value={""} isTagPresent tagValue/>
            <DetailBoxLastTop title={'System Volume'} value={""} isTagPresent tagValue/>
            <DetailBoxLastTop title={'System Volume'} value={""} isTagPresent tagValue/>
            <div className=' border-t-2 border-gray-500 border-solid relative mt-11' style={{border:'12px solid white',backgroundColor:'white'}}>
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
