
import React, {forwardRef} from 'react'
import  {MenuItemLink, UserMenu, AppBar} from "react-admin"
import SettingsIcon from '@material-ui/icons/Settings';
import { getToken } from '../helpers';

const Configuration = forwardRef(({ onClick }, ref) => (
    
   <MenuItemLink
        ref={ref}
        to="/configuration"
        primaryText="Configuration"
        leftIcon={<SettingsIcon />}
        onClick={onClick} // close the menu on click
    />
));

const CustomUserMenu = (props) =>  <UserMenu {...props}><Configuration /></UserMenu>

export default CustomUserMenu