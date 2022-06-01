import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import BottomContainer from "./BottomContainer";
import MotorCard from "./MotorCard";
import LastSection from "./LastSection";
import CoolingTower from "../img/CoolingTower.png"
import LastTopSection from './LastTopSection';
import LastBottomSection from './LastBottomSection';
import LastLeftSection from './LastLeftSection';
import LastRightSection from './LastRightSection';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailDialog({open,handleClose,currentLabel,data}) {
  const classes = useStyles();

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{backgroundColor:'#017781'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Details
            </Typography>
            {/* <Button color="inherit" onClick={handleClose}>
              Ok
            </Button> */}
          </Toolbar>
        </AppBar>
        <div style={{background:'radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%)',display:'flex',flexDirection:'column',flex:'1',alignItems: 'center'}}>
          <div className='flex flex-col flex-1'>
            <LastTopSection data={data}/>
            <div className='flex'>
              <LastLeftSection data={data}/>
              <div className='mt-24 border-2 border-solid border-gray-200 rounded-lg self-center' style={{backgroundColor:'#017781'}}>
                <p className='text-xl text-white font-bold uppercase text-center'>{currentLabel}</p>  
                <img class="object-contain w-full h-48 relative  shadow-lg" src={CoolingTower} alt="NIKE AIR"/>  
              </div> 
              <LastRightSection data={data}/>
            </div>
            {/* <div className='flex justify-center'>
            <LastBottomSection data={data}/>
            </div> */}
          </div>
          <div className="flex justify-end self-end">
        <button style={{backgroundColor:'#017781'}} class=" text-white font-bold py-2 px-4 rounded m-5" onClick={handleClose}>OK</button>
        </div>
        </div>
      </Dialog>
    </div>
  );
}
