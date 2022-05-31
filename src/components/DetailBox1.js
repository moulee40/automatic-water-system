import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBox1 extends React.Component {

  render() {
      const {marginTopLg,rightArrow,title,value,subtitle,marginRightLg,rounded, widthValue} = this.props;
    return (
        <div className={`flex flex-col  border-2 border-solid ${rounded ? 'rounded-full w-40 h-16' : widthValue?'rounded-lg w-32 h-28':'rounded-lg w-56 h-28'} relative m-4 shadow-lg ${marginTopLg ? 'mt-28' :''} ${marginRightLg ? 'mr-14' :''}`} style={{background:'linear-gradient(90deg, rgba(81,180,151,1) 0%, rgba(50,181,175,1) 35%, rgba(1,173,209,1) 100%)',color:'#19435c',fontWeight:'500'}}>
          <div className='flex justify-center items-center flex-1 border-b-2 border-solid' style={{borderColor:'#105867'}}>{title}{subtitle}</div>
          <div className='flex justify-center items-center flex-1' style={{color:'black'}}>{value}</div>
        {rightArrow && <>
          <div className={`w-[1rem] border-t-2 border-gray-500 border-solid absolute top-[75%] left-full ${marginRightLg ? 'w-[58px]' :'w-[1rem]'}`} style={{border:'5px solid white',backgroundColor:'white'}}>
          {/* <ArrowForwardIosIcon className={`absolute top-[-13px] ${marginRightLg ? 'left-[74%]' :''}`} style={{color: '#01add1'}}/> */}
          </div>
        </>}
      </div>
   
    );
  }
}

export default withRouter(DetailBox1);
