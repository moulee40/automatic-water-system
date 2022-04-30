import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBox extends React.Component {

  render() {
      const {marginTopLg,rightArrow,pvValue,ovValue,title} = this.props;
    return (
        <div className={`flex w-64 h-28 border-2 border-solid border-black rounded relative m-4 ${marginTopLg ? 'mt-28' :''}`}>
            <span className="pl-2">{title}
            (m3/h)
            </span>
        <div className='w-32 h-14 border-t-2 border-black border-solid absolute top-1/2 pt-2'>
            <span className="pl-2">{pvValue}</span>
        </div>
        <div className='h-14 w-32 border-l-2 border-t-2 border-black border-solid absolute top-1/2 left-1/2 pt-2'>
        <span className="pl-2">{ovValue}</span>
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

export default withRouter(DetailBox);
