import React from 'react';
import { useLocation } from 'react-router-dom' 
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import {grey} from '@material-ui/core/colors'

import Typography from './Typography';
import Markdown  from './Markdown';
import CopyToClipboardButtonWithUrl from './CopyToClipboardButtonWithUrl'
import CheckableStatus from './CheckableStatus'
import Chip from './Chip'
import {get, useIsMobile, useMenuItemsContext} from '../helpers'
import ButtonLink from './ButtonLink'
import Button from './Button'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   flexBasis: '33.33%',
  //   flexShrink: 0,
  // },

  icon: {
    marginRight: 10
  },

  titleExpanded: {
  
    '& p': {
      fontWeight: 900
    } 
  },

  itemExpanded: {
    backgroundColor: grey[100],
  },

  important: {
    backgroundColor: theme.palette.primary.dark,
    color: "#ffffff"
  }


}));


const ItemImportant = ({active=false}) => {

  const classes = useStyles();

  if(!active){
    return null
  }

  return <Chip label="common.deadline" className={classes.important} />
}

const ActionButton = ({resource}) => {

  const {enabled} = useMenuItemsContext("menuItems")

  if(!resource){
    return null
  }

  if(Array.isArray(enabled) && !enabled.includes( resource.replace(/^\//, "") ) ){
    return <Button disabled label="common.not_yet_available" />
  }

  return <ButtonLink to={resource} label="common.details" />
}


const CustomAccordionItem = ({
  baseLabel="", 
  label="", 
  icon=null, 
  buttons,
  important=false, 
  details=null, 
  check=false, 
  edit="",
  expanded=false, 
  onChange
}) => {
    
    const classes = useStyles();
    const {search} = useLocation()
    const isMobile = useIsMobile()


    return (
        <Accordion classes={{expanded: classes.itemExpanded}} elevation={expanded? 2: 0} expanded={expanded || search.includes(label)} onChange={onChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} classes={{
          expanded: classes.titleExpanded
        }} >
        <Grid container spacing={2} justifyContent="space-between">

          <Grid item>  
      
        <Grid container direction="row" alignItems="center">
       {!isMobile && icon && !important? React.createElement(icon, {className: classes.icon}): null} 
       <ItemImportant active={important} />
        <Typography className={classes.heading} label={`${baseLabel}${label}.title`} />
        </Grid>

        </Grid>

          <Grid item>
            <CheckableStatus check={check} edit={edit} />
          </Grid>
        </Grid>
       
        </AccordionSummary>
        <AccordionDetails>
          <Box display="block">
          <Markdown label={`${baseLabel}${label}.description`} fontSize={14} />
         {details}
          {buttons}
          </Box>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <ActionButton resource={edit} />
          <CopyToClipboardButtonWithUrl path={label} />
        </AccordionActions>
      </Accordion>
    )
}

 const CustomAccordion = ({baseLabel="", items=[]}) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {search} = useLocation()
  const myRef = React.useRef(null)

  const handleChange =  (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);
  
  React.useEffect(() => {

    if(search){
      const label = get(items.find(item => search.includes(item.label)), "label", false)
      setExpanded(label)
      if(label){
        myRef.current.scrollIntoView()
      }
    }

  },[search, items])

  return (
    <div className={classes.root} ref={myRef}>
    
      {items.map(item => <CustomAccordionItem 
          key={item.label} 
          expanded={expanded === item.label}
          onChange={handleChange(item.label)}
          baseLabel={baseLabel} 
          {...item} />)}

    </div>
  );
}


export default CustomAccordion