


import { useTranslate } from 'react-admin'
import { Typography, Box, Grid, DisplayAndCopyToClipboardText } from '../../../components'
import { makeStyles } from '../../../helpers'
import PromoNewsletter from "./PromoNewsletter"
import PromoLink from "./PromoLink"
import PromoBanners from "./PromoBanners"

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
    const rawlink = links.find(item => item.enabled) || {}

    const has_custom_sharing = rawlink.name == "opengraph_image"
    
    console.log({links, rawlink, has_custom_sharing})

    return (<Box mt={2}>


        <Box mb={6}>
          <Typography variant="h6" label="resources.promote.banners.title" />
          <PromoBanners link={rawlink.link_full}  />
        </Box> 
       

        <Box mb={6}>

        <Box mb={2}>
        <Typography variant="h6" label="resources.promote.newsletters.title" />
   
        </Box>

        <Grid container spacing={5}>

        {newsletters.map(item => (<Grid item key={item.id}>
        
        <EmailIcon className={classes.icon_near_text} /> 
        <Typography label={`common.langs.${item.lang}`} variant="body1" />
        
        <PromoNewsletter  {...item} /></Grid>))}
        </Grid>
        </Box>

        
        <Box mb={6}>
        <Box mb={2}>
        <Typography variant="h6" label="resources.promote.social.title" />
 
        </Box>    
        {links.map(item =><PromoLink key={item.id} {...item} />)}

          <UpdateOpengraphImage enabled={has_custom_sharing} />

        </Box>






        <Box mb={6} mt={2}>
        <Box mb={2}>
        <Typography variant="h6" label="resources.promote.rawlink.title" />
      
        </Box>

        <DisplayAndCopyToClipboardText link={rawlink.link_full}  />

        </Box>




    </Box>)
}

export default PartnerCreativesContent