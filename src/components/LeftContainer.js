import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";
import DetailBox1 from "./DetailBox1";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";

const eventBaseUrl = "https://ouvusj69el.execute-api.us-east-2.amazonaws.com/dev/";


class LeftContainer extends React.Component {

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

           {cleanCondensateValue===''?<DetailBox title={'Clean Condensate'} pvValue={cleanCondensatePV} ovValue={cleanCondensateOV} rightArrow marginRightLg/>:
                                       <DetailBox1 title={'Clean Condensate'} value={cleanCondensateValue} subtitle={'(m3/h)'} rightArrow marginRightLg/>} 
            {kwrpValue===''?<DetailBox title={'KWRP'} pvValue={kwrpPV} ovValue={kwrpOV} rightArrow marginRightLg/>:
                             <DetailBox1 title={'KWRP'} value={kwrpValue} subtitle={'(m3/h)'} rightArrow marginRightLg/>}
           {boreValue===''?<DetailBox title={'Bore'} pvValue={borePV} ovValue={boreOV} rightArrow marginRightLg/>:
                            <DetailBox1 title={'Bore'} value={boreValue} subtitle={'(m3/h)'} rightArrow marginRightLg/> } 
            {schemeValue===''?<DetailBox title={'Scheme'} pvValue={schemePV} ovValue={schemeOV} rightArrow marginRightLg/>:
                              <DetailBox1 title={'Scheme'} value={schemeValue} subtitle={'(m3/h)'} rightArrow marginRightLg/> }
              </div>
              <div className='max-h-[386px] border-l-2 border-solid border-gray-500 mt-[99px]'/>
            </div>
            <div className="relative">
            {muValue===''?<DetailBox title={'mu'} pvValue={muPV} ovValue={muOV} />:
                           <DetailBox1 title={'mu'} value={muValue} subtitle={'(m3/h)'} />}
            <div className=' border-t-2 border-gray-500 border-solid relative mt-11 mr-1'>
            <ArrowForwardIosIcon className='absolute top-[-13px] left-[94%]' style={{color: '#01add1'}} />
            </div>
            {/* <DetailBox marginTopLg/> */}
            {/* <DetailBox/> */}
            </div>
      </div>
   
    );
  }
}

export default withRouter(LeftContainer);
