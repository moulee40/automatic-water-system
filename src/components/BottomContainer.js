import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";
import DetailBox1 from "./DetailBox1";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";

const eventBaseUrl = "https://ouvusj69el.execute-api.us-east-2.amazonaws.com/dev/";


class BottomContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blowdownValue:'',
      blowdownCondensateValue:'',
    };
  }

  componentWillMount() {
    const{data}=this.props
    // let url= eventBaseUrl+name+"/data"
    // axios.get(url).then((res) => {
      
      if(data.blowdown && data.blowdown.length!==undefined){
        this.setState({
          blowdownPV:data.blowdown[0],
          blowdownOV:data.blowdown[1],
        })
      }
      else{
        this.setState({
          blowdownValue:data.blowdown
        })
      }

      if(data.blowdown_coc && data.blowdown_coc.length!==undefined){
        this.setState({
          blowdownCondensatePV:data.blowdown_coc[0],
          blowdownCondensateOV:data.blowdown_coc[1],
        })
      }
      else{
        this.setState({
          blowdownCondensateValue:data.blowdown_coc
        })
      }
    //  });
  }

  render() {
    const{blowdownValue,blowdownCondensateValue,blowdownOV,blowdownPV,blowdownCondensateOV,blowdownCondensatePV} = this.state;
    return (
        <div className="flex justify-end top-full left-1/3">
          <div className="border-l-2 border-b-2 border-solid border-gray-500 relative mb-10">
            <div className="mt-40">
                {blowdownValue===''?<DetailBox title={'Blowdown'} pvValue={blowdownPV} ovValue={blowdownOV}/>:
                                    <DetailBox1 title={'Blowdown'} value={blowdownValue} subtitle={'(m3/h)'}/>}
                {blowdownCondensateValue===''?<DetailBox title={'Blowdown Condensate'} pvValue={blowdownCondensatePV} ovValue={blowdownCondensateOV}/>:
                                    <DetailBox1 title={'Blowdown Condensate'} value={blowdownCondensateValue} subtitle={'(m3/h)'}/>}
                <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[94%]'/>
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[10%] left-[-8.5%]' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
   
    );
  }
}

export default withRouter(BottomContainer);
