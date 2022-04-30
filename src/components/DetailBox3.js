import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBox3 extends React.Component {

  render() {
      const {marginTopLg,rightArrow,pvValue,ovValue,title,LMTDvalue,TTDvalue} = this.props;
    return (
        <div className={`flex flex-col w-80 h-28 border-2 border-solid border-gray-200 rounded m-4 shadow-lg ${marginTopLg ? 'mt-28' :''}`}>
        <div className='flex justify-center items-center flex-1 border-b-2 border-solid border-gray-400'>{title}</div>
        <div className='flex flex-col flex-1'>
            <div className='flex flex-1 border-b-2 border-solid border-gray-400'>
                <div className='flex-1 text-center border-r-2 border-solid border-gray-400' style={{maxWidth:100}}>LMTD</div>
                <div className='flex-1 text-center'>{LMTDvalue}</div>
            </div>
            <div className='flex flex-1'>
                <div className='flex-1 text-center border-r-2 border-solid border-gray-400' style={{maxWidth:100}}>TTD</div>
                <div className='flex-1 text-center'>{TTDvalue}</div>
            </div>
        </div>
      </div>
   
    );
  }
}

export default withRouter(DetailBox3);
