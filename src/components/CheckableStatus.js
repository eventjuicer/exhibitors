import MoodIcon from '@material-ui/icons/MoodTwoTone';
import MoodBadIcon from '@material-ui/icons/MoodBadSharp';
import { makeStyles } from '@material-ui/core/styles';
import { teal, red, yellow } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
// import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from './Typography';
import { useGet } from '../helpers';
import { useToken, useSetModal } from '../contexts';
import LoginByEmail from '../logins/LoginByEmail'

const useStyles = makeStyles((theme) => ({
  
    // secondaryHeading: {
    //   fontSize: theme.typography.pxToRem(15),
    //   color: theme.palette.text.secondary,
    //   marginRight: 10
    // },
  


    iconCompleted:{
      fontSize: theme.typography.pxToRem(25),
      marginRight: 10,
      color: teal[800]
    },
    iconInProgress:{
      fontSize: theme.typography.pxToRem(25),
      marginRight: 10,
      color: yellow[400]
    },
    iconStarted:{
      fontSize: theme.typography.pxToRem(25),
      marginRight: 10,
      color: yellow[800]
    },
    iconNotStarted:{
      fontSize: theme.typography.pxToRem(25),
      marginRight: 10,
      color: red[800]
    }

  }));


  
const CheckableStatusIcon = ({completed}) => {

  const classes = useStyles();
  

  if(completed > 0.99){
    return <MoodIcon className={classes.iconCompleted} />
  }

  if(completed > 0.5){
    return <MoodIcon className={classes.iconInProgress} />
  }

  if(completed > 0.3){
    return <MoodBadIcon className={classes.iconStarted} />
  }

  if(completed < 0.3){
    return <MoodBadIcon className={classes.iconNotStarted} />
  }

  return null
}

const CheckableStatusProgress = ({completed, showProgress}) => {

  if(!showProgress){
    return `${completed}`
  }

  return `${Math.round(completed*100)}%`
}

const CheckableStatus = ({check=false, edit=""}) => {

 
    const token = useToken();
    const {data, checking, error} = useGet(token&&check? check: null);
    const dialog = useSetModal()

    const handleDialog = () => dialog("common.login", <LoginByEmail/>)
    const handleClick = (e) => {
      e.stopPropagation()
    }

    if(error){
      console.error("error", error)
      return null
    }

    if(!token || checking || !data){
      return null
    }

    const {max, current} = data;
    const completed = max? current/max : current;

    return (
    <Grid container alignItems='center'>
      <Grid item>
      <CheckableStatusIcon completed={completed} />
      </Grid>
      <Grid item>
        <CheckableStatusProgress completed={completed} showProgress={!!max} />
      </Grid>
    </Grid>
    )
  }


  export default CheckableStatus