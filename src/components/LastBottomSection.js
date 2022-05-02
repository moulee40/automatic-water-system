import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class LastBottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rows = [{name:'Mu alt',value:''},{name:'Mu comp',value:''},{name:'Mu ph',value:''},{name:'Mu ch',value:''},{name:'Mu alt',value:''},{name:'Mu comp',value:''},{name:'Mu TDS',value:''}];
    return (
     <div className="flex flex-col border-2 border-solid border-gray-200 rounded shadow-lg w-60 mt-5">
      {rows.map((data,index) => {
      return(
        <div key={index} className={`flex h-10 ${(rows.length-1) === index ? '' : 'border-b-2 border-solid border-gray-400'}`}>
          <div className="flex justify-center items-center flex-1 text-center border-r-2 border-solid border-gray-400">{data.name}</div>
          <div className="flex justify-center items-center flex-1 text-center">{data.value}</div>
        </div>
  );
})}
    </div>
    );
  }
}

export default withRouter(LastBottomSection);
