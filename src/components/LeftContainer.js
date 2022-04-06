import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


class LeftContainer extends React.Component {

  render() {
    return (
        <div className="flex relative">
            <div className="relative">
            <DetailBox/>
            <DetailBox/>
            <DetailBox/>
            <DetailBox/>
            <div className='w-[1rem] border-t-2 border-black border-solid absolute left-[91.5%] top-[13%] '/>
            <div className='w-[1rem] border-t-2 border-black border-solid absolute left-[91.5%] top-[32%] '/>
            <div className='w-[1rem] border-t-2 border-black border-solid absolute left-[91.5%] top-[52%] '/>
            <div className='w-[1rem] border-t-2 border-black border-solid absolute left-[91.5%] top-[70%] '/>
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[11.3%] left-[91.5%] '/>
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[30.3%] left-[91.5%]'/>
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[50.3%] left-[91.5%]'/>
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[68.3%] left-[91.5%]'/>
            </div>
            <div className="border-l-2 border-solid border-black relative">
            <DetailBox/>
            <div className='w-[11.5rem] border-t-2 border-black border-solid absolute top-[27%] '>
            <ArrowForwardIosIcon className='text-blue-600 absolute top-[-12px] left-[92%]'/>
            </div>
            <DetailBox marginTopLg/>
            <DetailBox/>
            <DetailBox/>
            </div>
      </div>
   
    );
  }
}

export default withRouter(LeftContainer);
