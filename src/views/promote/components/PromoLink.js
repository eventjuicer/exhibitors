import React from 'react'
import { Grid, Box, CopyToClipboardButton, Button } from "../../../components"
import { makeStyles, capitalizeFirstLetter, isObject } from "../../../helpers"
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Linkedin from '@material-ui/icons/LinkedIn'

const icons = {Facebook, Twitter, Linkedin}


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  avatarContainer: {
    width: 300,
    height: 300,
  },
  avatarImg: {
    objectFit: "contain",
    maxHeight: "85%",
    maxWidth: "85%",
  },
  active: {
    color: "black",
    cursor: "pointer"
  },
  disabled: {
    color: "#ccc",
    cursor: "pointer"
  },
  textfield: {
      padding: 10
  },
  icon_near_text: {
      marginTop: -10
  }
});



const PromoLink = ({link_full, sharable, enabled, sharers}) => {
    const classes = useStyles()
    
    if(!enabled){
        return null
    }

    if(!isObject(sharers)){
      return null
    }

    return <div>{Object.keys(sharers).map(service => {
        const link = sharers[service]
        const icon = (large=false) => React.createElement(icons[capitalizeFirstLetter(service)], {fontSize: large? "large": "medium"})
        return (
            <Box key={service} mb={2}>

            <Grid container direction='row'>
              <Grid item xs={12} sm={1}>{icon(true)}</Grid>
              <Grid item xs={12} sm={11}>
                {/* <TextField multiline={true} value={link} fullWidth={true}  variant="outlined" /> */}
                <CopyToClipboardButton text={link} variant="text" />
                <Button label={`actions.share_${service}`} href={link} startIcon={icon()} variant="text" />  
              </Grid>
            </Grid>
          
           
            </Box>
        )
    })}</div>
}


export default PromoLink