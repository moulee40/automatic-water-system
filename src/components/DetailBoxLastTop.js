import React from "react";
import { withRouter } from "react-router";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class DetailBoxLastTop extends React.Component {

  render() {
    const {marginTopLg,rightArrow,pvValue,ovValue,title,LMTDvalue,TTDvalue,isTagPresent} = this.props;
  return (
      <div className={`flex flex-col w-56 h-24 border-2 border-solid border-gray-200 rounded m-4 shadow-lg ${marginTopLg ? 'mt-28' :''}`} style={{background:'linear-gradient(90deg, rgba(81,180,151,1) 0%, rgba(50,181,175,1) 35%, rgba(1,173,209,1) 100%)',color:'#19435c',fontWeight:'500'}}>
      <div className='flex justify-center items-center flex-1 border-b-2 border-solid' style={{borderColor:'#105867'}}>{title}</div>
      <div className='flex flex-col flex-1'>
          {isTagPresent && <div className='flex flex-1 border-b-2 border-solid justify-center items-center' style={{borderColor:'#105867'}}>RCF 3V.IV</div>}
          <div className='flex flex-1'>
              <div className='flex justify-center items-center flex-1 text-center border-r-2 border-solid' style={{maxWidth:100,borderColor:'#105867'}}>Value</div>
              <div className='flex justify-center items-center flex-1 text-center' style={{color:'black'}}>{12.5}</div>
          </div>
      </div>
    </div>
 
  );
}
}

export default withRouter(DetailBoxLastTop);
