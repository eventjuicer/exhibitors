/**
 * 
 * https://github.com/BigBasket/ra-treemenu/tree/master/src
 * 
 * 
 */
import * as React from 'react';
import { 
    DashboardMenuItem, 
    Menu, 
    MenuItemLink, 
    usePermissions, 
    useToggleSidebar,
    useTranslate
} from 'react-admin';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DefaultIcon from '@material-ui/icons/ViewList';
import grey from '@material-ui/core/colors/grey';
import classNames from 'classnames';
import resources from '../resources'
import { useLocation } from 'react-router-dom';

import {
    Typography, 
    Support,
    ChangeLanguageButton
} from '../components'

import customRoutes from './customRoutes'
import {useSettings} from '../helpers'
// import { CategoryOutlined } from '@material-ui/icons';
// import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    accordion: {
        backgroundColor: 'inherit'
    },
    expanded: {
        backgroundColor: "#ffffff"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    list: {
        width: '100%',
    },
    icon: {
        width: '1.5em',
        height: '1.5em'
    },
    iconActive: {
      color: theme.palette.primary.main
    },
    menuItem: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeightRegular,
        paddingLeft: 0,
        whiteSpace: "unset"
    },
  }));


const CategoryWithIconAndLabel = ({icon, name, active=false}) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} direction="column" alignItems='center'>
        <Grid item>{React.createElement(icon, {className: classNames(
            classes.icon, {[classes.iconActive]: active} 
        )})}</Grid>
        <Grid item><Typography className={classes.heading} label={`menu.categories.${name}`} /></Grid>
        </Grid>
    )
}


const CustomMenuContainer = ({children, ...props}) => {

    const classes = useStyles();

    return (
        <Menu {...props}>
        <Box mt={5} className={classes.root}>
        <DashboardMenuItem />
        {children}
        </Box></Menu>
    )
}

const CustomMenu = (props) => {
    // const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const [open, toggleSidebar] = useToggleSidebar()
    const [expanded, setExpanded] = React.useState("");

    const menuItems = useSettings("menuItems")
    const permissions = usePermissions()
    const translate = useTranslate()
    const classes = useStyles();
    // const resources = useSelector(getResources);
    const {pathname} = useLocation()

    const mappedMenuItems = menuItems.reduce((prev,current)=>{
        const children = current.children.reduce((_prev, _current)=>{
            return {..._prev, [_current]: current.name}
        }, {})
        return {...prev, ...children}
    }, {})  

    React.useEffect(() => {

        let categoryName;
        Object.keys(mappedMenuItems).forEach(page => {
            if(pathname.includes(page)){
                categoryName = mappedMenuItems[page]
            }
        })
        
        setExpanded(categoryName)

    }, [pathname])


    const handleChangeMin = (panel) => {
        toggleSidebar()
        setExpanded(panel);
    }

    const handleChange = (panel) => (event, isExpanded) => {
      if(!open){
        toggleSidebar()
      }
       setExpanded(isExpanded ? panel : "");
    }

    if(!open){

        return ( <CustomMenuContainer {...props}>
        {menuItems.map(({name, icon}) => <MenuItem key={name} onClick={() => handleChangeMin(name)}>{React.createElement(icon)}</MenuItem>)}
        </CustomMenuContainer>)
    }

    return (
        
        <CustomMenuContainer {...props}>
          
        {menuItems.map((category) => {
        
            return (
                <Accordion 
                    key={category.name} 
                    expanded={expanded === category.name} 
                    onChange={handleChange(category.name)} 
                    square={true} 
                    classes={{
                        root: classes.accordion,
                        expanded: classes.expanded
                    }}
                    elevation={expanded === category.name? 2: 0}
                >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <CategoryWithIconAndLabel icon={category.icon} name={category.name} active={expanded === category.name}  />
                </AccordionSummary>
                <AccordionDetails>
            
                <div className={classes.list}>

                {category.children.map(category_name => {
                    
                    const resource = resources.find(res => res.props.name === category_name)
                    
                    if(resource){
                        
                        const {options, icon, name} = resource.props

                        return (<MenuItemLink
                            key={category_name}
                            className={classes.menuItem}
                            to={`/${name}`}
                            primaryText={options && "label" in options && options.label ? translate(options.label) : translate(`resources.${name}.menu`) }
                            leftIcon={icon ? React.createElement(icon, {}) : <DefaultIcon />}
                            onClick={props.onMenuClick}
                            sidebarIsOpen={open}
                            />)
                    }
                    const route = customRoutes.find(route => route.props.path.substring(1) === category_name)

                    if(route){
                      
                        return (<MenuItemLink
                            key={category_name}
                            className={classes.menuItem}
                            to={route.props.path}
                            primaryText={translate(`resources.${category_name}.menu`)}
                            leftIcon={"icon" in route.props ? <route.props.icon /> : <DefaultIcon />}
                            onClick={props.onMenuClick}
                            sidebarIsOpen={open}
                            />)
                    }
                
                    return category_name
                })}    
               
                </div>


                </AccordionDetails>
                </Accordion>
            )
        })}

            <Divider />

            <Box textAlign="center" p={2}>
            <ChangeLanguageButton />
            </Box>

 
    
            {/* add your custom menus here */}
            {/* {isXSmall && logout} */}
        </CustomMenuContainer>
    );
};


export default CustomMenu