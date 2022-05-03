import React, { useState } from 'react';
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
import DetailDialog from './DetailDialog';
import CoolingTower from "../img/CoolingTower.png"

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

export default function FullScreenDialog({open,handleClose,currentLabel,data}) {
  const classes = useStyles();
  const [ detailOpen, setDetailOpen ] = useState(false);

  function handleDetailClose(){
    setDetailOpen(false);
  }

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
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
        <List className='flex flex-1 justify-center mt-12'>
            <div className="flex relative mt-12">
              <LeftContainer name={currentLabel} data={data}/>
              <div className='relative'>
                <div className='mt-24'>
                <p className='text-xl font-bold uppercase text-center'>{currentLabel}</p>  
                <img class="object-contain w-full h-48 relative  shadow-lg" src={CoolingTower} alt="NIKE AIR"/>  
                </div>
                <BottomContainer name={currentLabel} data={data}/>
                </div>
              {/* <MotorCard label={currentLabel} displayBottom/> */}
              <RightContainer name={currentLabel}  data={data}/>

              {/* <BottomContainer/> */}
            </div>
        </List>
        <div className="flex justify-end">
        <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-5 mr-0" onClick={() => setDetailOpen(true)}>More Info</button>
        <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-5" onClick={handleClose}>OK</button>
        </div>
      </Dialog>
      <DetailDialog open={detailOpen} handleClose={handleDetailClose} currentLabel={currentLabel} data={data}/>
    </div>
  );
}
