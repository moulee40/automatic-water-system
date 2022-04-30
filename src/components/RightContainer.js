import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";
import DetailBox1 from "./DetailBox1";
import DetailBox2 from "./DetailBox2";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";

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
    const{name}=this.props
    let url= eventBaseUrl+name+"/data"
    axios.get(url).then((res) => {
      
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
        supplyTempValue:res.data.supply_temp,
        returnTempValue:res.data.return_temp
      })

     });
  }

  render() {
    const{supplyTempValue,returnTempValue} = this.state;
    return (
      <div className="flex">
        <div className="space-y-4">
            <DetailBox1 title={'Return Temp'} value={returnTempValue} subtitle={'(C)'}/>
            <div className="flex w-40 h-28 border-2 border-l-0 border-solid border-black rounded-none relative">
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[90%] left-[90%]'/>
            <ArrowBackIosIcon className='text-blue-600 absolute top-[-13%] '/>
            </div>
            <DetailBox1 title={'Supply Temp'} value={supplyTempValue} subtitle={'(C)'}/>
          </div>
          <div>
          <DetailBox />
          <DetailBox/>
          <DetailBox/>
          </div>
      </div>
   
    );
  }
}

export default withRouter(RightContainer);
