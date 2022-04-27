import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


class BottomContainer extends React.Component {

  render() {
    return (
        <div className="flex justify-end absolute top-full left-1/3">
          <div className="border-l-2 border-b-2 border-solid border-black relative mb-10">
            <div className="mt-40">
                <DetailBox/>
                <DetailBox/>
                <ArrowForwardIosIcon className='text-blue-600 absolute top-[97.3%] left-[91%]'/>
                <KeyboardArrowDownIcon className='text-blue-600 absolute top-[10%] left-[-12.5%]' style={{fontSize:'46px'}}/>
           </div>
           </div>
      </div>
   
    );
  }
}

export default withRouter(BottomContainer);
