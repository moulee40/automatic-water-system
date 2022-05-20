import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBox extends React.Component {
s
  render() {
      const {marginTopLg,rightArrow,pvValue,ovValue,title,marginRightLg} = this.props;
      const pvStringValue = pvValue.toString();
      const ovStringValue = ovValue.toString();
      const finalPvValue = Number(pvStringValue.slice(0, 6));
      const finalOvValue = Number(ovStringValue.slice(0, 6));
    return (
        <div  className={`flex flex-col w-64 h-28 border-2 border-solid border-gray-200 rounded-lg relative m-4 shadow-lg ${marginTopLg ? 'mt-28' :''} ${marginRightLg ? 'mr-14' :''}`} style={{background:'linear-gradient(90deg, rgba(81,180,151,1) 0%, rgba(50,181,175,1) 35%, rgba(1,173,209,1) 100%)',color:'#19435c',fontWeight:'500'}}>
          <div className='flex justify-center items-center flex-1 border-b-2 border-solid border-gray-400'>{title}(m3/h)</div>
          <div className='flex flex-1'>
            <div className='flex justify-center items-center flex-1 text-center border-r-2 border-solid border-gray-400'><span className='text-sm'>PV Value : </span>{finalPvValue}</div>
            <div className='flex justify-center items-center flex-1 text-center'><span className='text-sm'>OV Value : </span>{finalOvValue}</div>
          </div>
        {rightArrow && <>
          <div className={`w-[1rem] border-t-2 border-gray-500 border-solid absolute top-[75%] left-full ${marginRightLg ? 'w-[58px]' :'w-[1rem]'}`}>
          <ArrowForwardIosIcon className={`text-blue-600 absolute top-[-13px] ${marginRightLg ? 'left-[74%]' :''}`}/>
          </div>
        </>}
      </div>
   
    );
  }
}

export default withRouter(DetailBox);
