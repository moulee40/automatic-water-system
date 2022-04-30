import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBox3 extends React.Component {

  render() {
      const {marginTopLg,rightArrow,pvValue,ovValue,title} = this.props;
    return (
        <div className={`flex flex-col w-40 h-28 border-2 border-solid border-black rounded m-4 ${marginTopLg ? 'mt-28' :''}`}>
        <div className='flex justify-center items-center flex-1 border-b-2 border-solid border-black'>HEX 1(C)</div>
        <div className='flex flex-col flex-1'>
            <div className='flex flex-1 border-b-2 border-solid border-black'>
                <div className='flex-1 text-center border-r-2 border-solid border-black'>MTD</div>
                <div className='flex-1 text-center'>MTD1</div>
            </div>
            <div className='flex flex-1'>
                <div className='flex-1 text-center border-r-2 border-solid border-black'>TTD</div>
                <div className='flex-1 text-center'>TTD1</div>
            </div>
        </div>
      </div>
   
    );
  }
}

export default withRouter(DetailBox3);
