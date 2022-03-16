import React from 'react';
import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { Typography } from '../components';
import LoginByEmail from './LoginByEmail';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: 600,
        // height: "50vh"
    },
    icon: {
        fontSize: 80,
        color: theme.palette.secondary.main
    }
}))

const NewLogin = ({preview, ...props}) => {

    // const {values} = useFormState()
    // console.log(props, values)
    const classes = useStyles()

    // preview = React.isValidElement(preview) ?

    return (

        <Card>
        <CardContent>

        <Grid container className={classes.container} direction='column' justifyContent='center' alignItems="center">
            <Grid item>
                <Box m={5}>
                <Grid container direction='column' alignItems="center" spacing={4}>
                    <Grid item>
                        <LockIcon className={classes.icon} /></Grid>
                    <Grid item>
                        <Typography label="auth.login-by-email.info" />
                    </Grid>
                    <Grid item>
                        <LoginByEmail {...props} />
                    </Grid>
                </Grid>
                </Box>
            </Grid>
            <Grid item><Box mt={5}>{preview}</Box></Grid>
        </Grid>

      
        </CardContent>
        </Card>
  );
};




export default NewLogin;
