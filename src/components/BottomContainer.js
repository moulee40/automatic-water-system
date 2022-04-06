import React from "react";
import { withRouter } from "react-router";
import DetailBox from "./DetailBox";

class BottomContainer extends React.Component {

  render() {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div style={{borderLeft:'1px solid black',borderBottom:'1px solid black'}}>
            <div style={{marginLeft:25, marginBottom:25}}>
          <div style={{marginTop:'20px'}}/>
           <DetailBox/>
           <div style={{marginTop:'20px'}}/>
           <DetailBox/>
           <div style={{marginTop:'20px'}}/>
           <DetailBox/>
           <div style={{marginTop:'20px'}}/>
           <DetailBox/>
           </div>
           </div>
      </div>
   
    );
  }
}

export default withRouter(BottomContainer);
