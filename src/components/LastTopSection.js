import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DetailBox1 from "./DetailBox1";
import DetailBox3 from "./DetailBox3";

class LastTopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <div className='flex'>
       <div className='flex flex-col'>
         <DetailBox1/>
         <DetailBox1/>
         <DetailBox1/>
         <DetailBox1/>
       </div>
       <div className='flex flex-col'>
         <DetailBox1/>
         <DetailBox1/>
         <DetailBox1/>
         <DetailBox1/>
       </div>
       <div className='flex flex-col'>
         <DetailBox1/>
         <DetailBox1/>
         <DetailBox1/>
         <DetailBox1/>
       </div>
       <div className='flex flex-col'>
         <DetailBox1/>
         <DetailBox1/>
       </div>
       <div className='flex flex-col'>
         <DetailBox3/>
         <DetailBox3/>
         <DetailBox3/>
       </div>
           
    </div>
    );
  }
}

export default withRouter(LastTopSection);
