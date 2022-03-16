import React from 'react'
import {useLogout, useTranslate} from 'react-admin'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {useIsMobile} from '../helpers'
import {  makeStyles } from '@material-ui/core/styles';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import {useLogoutSuccess} from '../contexts'
import { useToken } from '../contexts'

const useStyles = makeStyles((theme) => ({
        menuItem: {
            color: theme.palette.text.secondary,
        },
        icon: { minWidth: theme.spacing(5) },
    })
);

/**
 * Log the current user out by calling the authProvider.logout() method,
 * and redirect them to the login screen.
 *
 * @param {Object} params The parameters to pass to the authProvider
 * @param {string} redirectTo The path name to redirect the user to (optional, defaults to login)
 * @param {boolean} redirectToCurrentLocationAfterLogin Whether the button shall record the current location to redirect to it after login. true by default.
 *
 * @return {Promise} The authProvider response
 */


const LogoutButton = () => {
    
    const token = useToken()
    const isMobile = useIsMobile()
    const classes = useStyles()
    const translate = useTranslate()
    const logout = useLogout()
    const onLogout = useLogoutSuccess()

    const handleClick = React.useCallback(
        () => logout("", "/", false).then(()=>onLogout()), [logout, onLogout]
    );

    console.log({token})

    if(!token){
        return null
    }

    return (
        <MenuItem
        // className={classnames('logout', classes.menuItem, className)}
        onClick={handleClick}
        // ref={ref}
        component={isMobile ? 'span' : 'li'}

    >
        <ListItemIcon className={classes.icon}>
        <ExitIcon />
        </ListItemIcon>
        {translate('ra.auth.logout')}
    </MenuItem>
    )
}


export default LogoutButton