import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBox extends React.Component {
s
  render() {
      const {marginTopLg,rightArrow,pvValue,ovValue,title} = this.props;
    return (
        <div className={`flex flex-col w-64 h-28 border-2 border-solid border-gray-200 rounded relative m-4 shadow-lg ${marginTopLg ? 'mt-28' :''}`}>
          <div className='flex justify-center items-center flex-1 border-b-2 border-solid border-gray-400'>{title}(m3/h)</div>
          <div className='flex flex-1'>
            <div className='flex justify-center items-center flex-1 text-center border-r-2 border-solid border-gray-400'>{pvValue}</div>
            <div className='flex justify-center items-center flex-1 text-center'>{ovValue}</div>
          </div>
        {rightArrow && <>
          <div className='w-[1rem] border-t-2 border-gray-500 border-solid absolute top-[75%] left-full '>
          <ArrowForwardIosIcon className='text-blue-600 absolute top-[-13px]'/>
          </div>
        </>}
      </div>
   
    );
  }
}

export default withRouter(DetailBox);
