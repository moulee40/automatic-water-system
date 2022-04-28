import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class LastSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex  w-1/2 h-80 border-2 border-solid border-black rounded relative">
      <div className='h-80 border-l-2 border-black border-solid absolute left-1/4'>
        <p className='absolute top-1/2 left-[-70px]'>3230 PV<br/>133.773<br/>C</p>
        <p className='absolute top-1/2 min-w-[58px] left-2'>3230 PV<br/>133.773<br/>C</p>
      </div>
      <div className='h-80 border-l-2 border-black border-solid absolute left-1/2'>
      <p className='absolute top-1/2 left-[-70px]'>3230 PV<br/>133.773<br/>C</p>
        <p className='absolute top-1/2 min-w-[58px] left-2'>3230 PV<br/>133.773<br/>C</p>
      </div>
      <div className='h-80 border-l-2 border-black border-solid absolute left-3/4'>
      <p className='absolute top-1/2 left-[-70px]'>3230 PV<br/>133.773<br/>C</p>
        <p className='absolute top-1/2 min-w-[58px] left-2'>3230 PV<br/>133.773<br/>C</p>
      </div>
      <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[21.5%] top-1/3 bg-blue-100 pl-2 pt-3">1018</div>
      <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[46.5%] top-1/3 bg-blue-100 pl-2 pt-3">1019</div>
      <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[71.5%] top-1/3 bg-blue-100 pl-2 pt-3">1020</div>
      <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[96.5%] top-1/3 bg-blue-100 pl-2 pt-3">1021</div>
      <ArrowBackIosIcon className='text-blue-600 absolute top-[-4%] left-[10%]'/>
      <ArrowForwardIosIcon className='text-blue-600 absolute top-[96.5%] left-[35%]'/>
      <ArrowBackIosIcon className='text-blue-600 absolute top-[-4%] left-[60%]'/>
      <ArrowForwardIosIcon className='text-blue-600 absolute top-[96.5%] left-[86%]'/>
    </div>
    );
  }
}

export default withRouter(LastSection);
