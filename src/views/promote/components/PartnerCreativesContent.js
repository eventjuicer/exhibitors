


import { useTranslate } from 'react-admin'
import { Typography, Box, Grid } from '../../../components'
import { makeStyles } from '../../../helpers'
import PromoRawLink from "./PromoRawLink"
import PromoNewsletter from "./PromoNewsletter"
import PromoLink from "./PromoLink"

import UpdateOpengraphImage from "./UpdateOpengraphImage"
import EmailIcon from '@material-ui/icons/Email';


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


const PartnerCreativesContent = ({ newsletters=[], links=[] }) => {

    const classes = useStyles()
    const translate = useTranslate()
    const rawlink = links.find(Boolean) || {}


    return (<Box>

        <Box mb={6} mt={2}>
        <Box mb={2}>
        <Typography variant="h6" label="exhibitor.creatives.rawlink.title" />
        <Typography variant="body2" label="exhibitor.creatives.rawlink.description" />
        </Box>

        <PromoRawLink link={rawlink.link_full}  />

        </Box>

        <Box mb={6}>
        <Box mb={2}>
        <Typography variant="h6" label="resources.newsletters.name" />
        <Typography variant="body2" label="exhibitor.creatives.newsletters.description" />
        </Box>

        <Grid container spacing={5}>

        {newsletters.map(item => (<Grid item key={item.id}>
        
        <EmailIcon className={classes.icon_near_text} /> 
        <Typography label={`resources.creatives.langs.${item.lang}`} variant="body1" />
        
        <PromoNewsletter  {...item} /></Grid>))}
        </Grid>
        </Box>
        
        <Box mb={6}>
        <Box mb={2}>
        <Typography variant="h6" label="exhibitor.creatives.social.title" />
        <Typography variant="body2" label="exhibitor.creatives.social.description" paragraph />
        </Box>

    
        {links.map(item =><PromoLink key={item.id} {...item} />)}

          <UpdateOpengraphImage />

        </Box>
    </Box>)
}

export default PartnerCreativesContent