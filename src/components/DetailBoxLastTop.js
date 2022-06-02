import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBoxLastTop extends React.Component {

  render() {
    const {marginTopLg,rightArrow,pvValue,ovValue,title,LMTDvalue,TTDvalue,isTagPresent,marginRightLg,value,tagValue} = this.props;
  return (
      <div className={`flex flex-col w-56 h-24 border-2 border-solid border-gray-200 rounded m-4 shadow-lg relative ${marginRightLg ? 'mr-14' :''} ${marginTopLg ? 'mt-28' :''} `} style={{background:'linear-gradient(90deg, rgba(81,180,151,1) 0%, rgba(50,181,175,1) 35%, rgba(1,173,209,1) 100%)',color:'#19435c',fontWeight:'500'}}>
      <div className='flex justify-center items-center flex-1 border-b-2 border-solid' style={{borderColor:'#105867'}}>{title}</div>
      <div className='flex flex-col flex-1'>
          {isTagPresent && <div className='flex flex-1 border-b-2 border-solid justify-center items-center' style={{borderColor:'#105867'}}>{tagValue}</div>}
          <div className='flex flex-1'>
              <div className='flex justify-center items-center flex-1 text-center border-r-2 border-solid' style={{maxWidth:100,borderColor:'#105867'}}>Value</div>
              <div className='flex justify-center items-center flex-1 text-center' style={{color:'black'}}>{value}</div>
          </div>
      </div>
      {rightArrow && <>
          <div className={`w-[1rem] absolute top-[75%] left-full ${marginRightLg ? 'w-[58px]' :'w-[1rem]'}`} style={{border:'5px solid white',backgroundColor:'white'}}>
          {/* <ArrowForwardIosIcon className={`absolute top-[-13px] ${marginRightLg ? 'left-[74%]' :''}`} style={{color: '#01add1'}}/> */}
          </div>
        </>}
    </div>
 
  );
}
}

export default withRouter(DetailBoxLastTop);
