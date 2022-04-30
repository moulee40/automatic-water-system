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
    const{name}=this.props
    let url= eventBaseUrl+name+"/data"
    axios.get(url).then((res) => {
      if(res.data.kwrp.length!==undefined){
        this.setState({
          kwrpPV:res.data.kwrp[0],
          kwrpOV:res.data.kwrp[1],
        })
      }
      else{
        this.setState({
          kwrpValue:res.data.kwrp
        })
      }

      if(res.data.clean_condensate.length!==undefined){
        this.setState({
          cleanCondensatePV:res.data.clean_condensate[0],
          cleanCondensateOV:res.data.clean_condensate[1],
        })
      }
      else{
        this.setState({
          cleanCondensateValue:res.data.clean_condensate
        })
      }

      if(res.data.scheme.length!==undefined){
        this.setState({
          schemePV:res.data.scheme[0],
          schemeOV:res.data.scheme[1],
        })
      }
      else{
        this.setState({
         schemeValue:res.data.scheme
        })
      }

      if(res.data.tamala.length!==undefined){
        this.setState({
          borePV:res.data.tamala[0],
          boreOV:res.data.tamala[1],
        })
      }
      else{
        this.setState({
        boreValue:res.data.tamala
        })
      }

      if(res.data.mu_flow.length!==undefined){
        this.setState({
          muPV:res.data.mu_flow[0],
          muOV:res.data.mu_flow[1],
        })
      }
      else{
        this.setState({
        muValue:res.data.mu_flow
        })
      }

     });
  }

  render() {
    const{cleanCondensatePV,cleanCondensateOV,kwrpOV,kwrpPV,schemeOV,schemePV,schemeValue,kwrpValue,cleanCondensateValue,
          boreValue,boreOV,borePV,muValue,muPV,muOV} = this.state;
    return (
        <div className="flex relative">
            <div className="relative">
           {cleanCondensateValue===''?<DetailBox title={'Clean Condensate'} pvValue={cleanCondensatePV} ovValue={cleanCondensateOV} rightArrow/>:
                                       <DetailBox1 title={'Clean Condensate'} value={cleanCondensateValue} subtitle={'(m3/h)'}/>} 
            {kwrpValue===''?<DetailBox title={'KWRP'} pvValue={kwrpPV} ovValue={kwrpOV} rightArrow/>:
                             <DetailBox1 title={'KWRP'} value={kwrpValue} subtitle={'(m3/h)'}/>}
           {boreValue===''?<DetailBox title={'Bore'} pvValue={borePV} ovValue={boreOV}rightArrow/>:
                            <DetailBox1 title={'Bore'} value={boreValue} subtitle={'(m3/h)'}/> } 
            {schemeValue===''?<DetailBox title={'Scheme'} pvValue={schemePV} ovValue={schemeOV} rightArrow/>:
                              <DetailBox1 title={'Scheme'} value={schemeValue} subtitle={'(m3/h)'}/> }
            </div>
            <div className="border-l-2 border-solid border-black relative">
            {muValue===''?<DetailBox title={'mu'} pvValue={muPV} ovValue={muOV}/>:
                           <DetailBox1 title={'mu'} value={muValue} subtitle={'(m3/h)'}/>}
            <div className='w-[11.5rem] border-t-2 border-black border-solid relative mt-11'>
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[-13px] left-[92%]'/>
            </div>
            {/* <DetailBox marginTopLg/> */}
            {/* <DetailBox/> */}
            </div>
      </div>
   
    );
  }
}

export default withRouter(LeftContainer);
