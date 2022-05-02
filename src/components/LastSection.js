import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HeatIcon from "../img/HeatIcon.png"
class LastSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex  w-[400px] h-60 border-2 border-solid border-gray-200 rounded relative shadow-lg">
      <div className='h-60 border-l-2 border-gray-500 border-solid absolute left-1/3'>
        <p className='absolute top-1/2 left-[-70px]'>HEX 1</p>
      </div>
      <div className='h-60 border-l-2 border-gray-500 border-solid absolute left-2/3'>
      <p className='absolute top-1/2 left-[-70px]'>HEX 2</p>
      </div>
      <img class="object-contain h-12 absolute left-[24%] top-1/3" src={HeatIcon} alt="Heat Icon"/>
      <img class="object-contain h-12 absolute left-[57%] top-1/3" src={HeatIcon} alt="Heat Icon"/>
      <img class="object-contain h-12 absolute left-[90.5%] top-1/3" src={HeatIcon} alt="Heat Icon"/>
      <p className='absolute top-1/2 left-[83%]'>HEX 3</p>
      <ArrowBackIosIcon className='text-blue-600 absolute top-[-5%] left-[10%]'/>
      <ArrowForwardIosIcon className='text-blue-600 absolute top-[95.5%] left-1/4'/>
      <ArrowBackIosIcon className='text-blue-600 absolute top-[-5%] left-3/4'/>
      <ArrowForwardIosIcon className='text-blue-600 absolute top-[95.5%] left-[96%]'/>
    </div>
    );
  }
}

export default withRouter(LastSection);
