import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBox2 extends React.Component {

  render() {
      const {marginTopLg,rightArrow} = this.props;
    return (
        <div className={`flex w-40 h-28 border-2 border-solid border-black rounded relative m-4 ${marginTopLg ? 'mt-28' :''}`}>
            <span className="pl-2">Return Temp [C] 3B
            62T1510
            </span>
        <div className='w-full h-14 border-t-2 border-black border-solid absolute top-1/2 pt-2'>
            <span className="pl-2">R3CF</span>
        </div>
        <div className='h-14 w-20 border-l-2 border-t-2 border-black border-solid absolute top-1/2 left-1/2 pt-2'>
        <span className="pl-2">NA</span>
        </div>
        <div className='w-full h-14 border-t-2 border-black border-solid absolute top-full pt-2'>
            <span className="pl-2">PV</span>
        </div>
        <div className='h-14 w-20 border-l-2 border-t-2 border-black border-solid absolute top-full left-1/2 pt-2'>
        <span className="pl-2">OV</span>
        </div>
        {rightArrow && <>
          <div className='w-[1rem] border-t-2 border-black border-solid absolute top-[75%] left-full '>
          <ArrowForwardIosIcon className='text-blue-600 absolute top-[-13px]'/>
          </div>
        </>}
      </div>
   
    );
  }
}

export default withRouter(DetailBox2);