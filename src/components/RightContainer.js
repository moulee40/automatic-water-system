import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


class RightContainer extends React.Component {

  render() {
    return (
      <div className="flex">
        <div className="space-y-4">
            <DetailBox/>
            <div className="flex w-40 h-28 border-2 border-l-0 border-solid border-black rounded-none relative">
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[90%] left-[90%]'/>
            <ArrowBackIosIcon className='text-blue-600 absolute top-[-13%] '/>
            </div>
            <DetailBox/>
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
