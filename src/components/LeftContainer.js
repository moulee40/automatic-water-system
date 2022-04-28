import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


class LeftContainer extends React.Component {

  render() {
    return (
        <div className="flex relative">
            <div className="relative">
            <DetailBox rightArrow/>
            <DetailBox rightArrow/>
            <DetailBox rightArrow/>
            <DetailBox rightArrow/>
            </div>
            <div className="border-l-2 border-solid border-black relative">
            <DetailBox/>
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
