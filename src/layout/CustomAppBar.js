import React from 'react'
import {AppBar, useTranslate} from 'react-admin'
import CustomUserMenu from './CustomUserMenu'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useCompany, useSetModal, useToken } from '../contexts';
import { Button } from '../components';
import LoginContainer from '../logins/LoginContainer'

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});


const UserInfo = () => {

    const slug = useCompany("slug")
    const name = useCompany("profile.name", slug)
    const modal = useSetModal()
    const token = useToken()

    const handleShowModal = () => modal("", <LoginContainer />)

    if(!token){
        return ( <Button label="common.guest" variant="text" color="inherit" onClick={handleShowModal} />)
    }


    return (
        <Typography variant="h6" color="inherit">{name}</Typography>
    )



}


const CustomAppBar = (props) => {

    const classes = useStyles();
    const translate = useTranslate();
 


    return (
        <AppBar {...props} userMenu={<CustomUserMenu />}>
            
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            {/* <Logo /> */}
            <span className={classes.spacer} />


            <UserInfo {...props} />
         

        </AppBar>
    );
    
}

{/* <AppBar {...props}  /> */}

export default CustomAppBar