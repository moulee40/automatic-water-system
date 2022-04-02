import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

export default function FullScreenDialog({open,handleClose}) {
  const classes = useStyles();

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
            <Button autoFocus color="inherit" onClick={handleClose}>
              Ok
            </Button>
          </Toolbar>
        </AppBar>
        <List className='flex flex-1'>
            <div className="flex m-auto w-1/2 h-80 border-2 border-solid border-black rounded relative">
              <div className='h-80 border-l-2 border-black border-solid absolute left-1/4'></div>
              <div className='h-80 border-l-2 border-black border-solid absolute left-1/2'></div>
              <div className='h-80 border-l-2 border-black border-solid absolute left-3/4'></div>
              <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[21.5%] top-1/3 bg-blue-100 pl-2 pt-3">1018</div>
              <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[46.5%] top-1/3 bg-blue-100 pl-2 pt-3">1019</div>
              <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[71.5%] top-1/3 bg-blue-100 pl-2 pt-3">1020</div>
              <div className="border-black rounded-full border-2 border-solid w-14 h-14 absolute left-[96.5%] top-1/3 bg-blue-100 pl-2 pt-3">1021</div>
              <ArrowBackIosIcon className='text-blue-600 absolute top-[-4%] left-[10%]'/>
              <ArrowForwardIosIcon className='text-blue-600 absolute top-[96.5%] left-[35%]'/>
              <ArrowBackIosIcon className='text-blue-600 absolute top-[-4%] left-[60%]'/>
              <ArrowForwardIosIcon className='text-blue-600 absolute top-[96.5%] left-[86%]'/>
            </div>
        </List>
      </Dialog>
    </div>
  );
}
