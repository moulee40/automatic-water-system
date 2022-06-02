import React from "react";
import { withRouter } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DetailBoxLastTop from "./DetailBoxLastTop";

class LastBottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mu_conductivity:'',
      mu_flow:'',
      mu_ph:''
    };
  }

  componentWillMount(){
    const {data}=this.props;
    this.setState({
      mu_conductivity:data.mu_conductivity,
      mu_flow:data.mu_flow,
      mu_ph:data.mu_ph
    })
  }

  render() {
    const {mu_conductivity,mu_flow,mu_ph}=this.state;
    const rows = [{name:'Mu conductivity',value:mu_conductivity},{name:'Mu flow',value:mu_flow},{name:'Mu ph',value:mu_ph}];
    return (
     <div className="flex justify-between">
       <div className="flex ">
        <div className="flex flex-col">
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        </div>
        <div className="flex flex-col">
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
        </div>
       </div>
       <div className="flex flex-col">
          <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
          <DetailBoxLastTop title={'System Volume'} value isTagPresent tagValue/>
       </div>
    </div>
    );
  }
}

export default withRouter(LastBottomSection);
