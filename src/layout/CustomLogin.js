import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'react-admin';

import { ThemeProvider } from '@material-ui/styles';
import { UrlWatcher, makeStyles, Box } from '../components';
import LoginContainer from '../logins/LoginContainer'
import backgroundImage from '../imgs/12052503_1174776899198981_2983491387424920150_o.jpg';


const useStyles = makeStyles(theme => ({

  root: {
    
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundBlendMode: 'multiply'

  }

}))


const CustomLogin = ({theme, ...rest}) => {

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
    
    {/******IMPORTANT!!!!******/}
    <UrlWatcher />
     {/******IMPORTANT!!!!******/}

      <Box className={classes.root}>
     
          <LoginContainer />

        <Notification />
      </Box>
    </ThemeProvider>
  );
};


export default CustomLogin;
