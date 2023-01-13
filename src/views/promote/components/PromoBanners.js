

import { useSettings, useSetModal, usePublicCompanyData } from "../../../contexts"
import { isEmpty, head, cloudinaryAddText, makeStyles } from '../../../helpers'
import { Box, Grid, Avatar, Typography, CardImage, Button, Alert, DisplayAndCopyToClipboardText } from "../../../components"

const DialogContent = ({imageUrl, link}) => {


    return (<Box mb={2}>

    <Box textAlign="center">
    <img src={imageUrl} alt="" style={{maxWidth: 600, maxHeight: 400}} />
    </Box>

    <Box mt={3}>
    <Typography label="common.option1" variant="h5" gutterBottom />
    <Typography label="resources.promote.banners.save" variant="subtitle1" gutterBottom />
    <DisplayAndCopyToClipboardText link={link} />
    </Box>
   
    <Box mt={4}>
    <Typography label="common.option2" variant="h5"  gutterBottom  />
    <Typography label="resources.promote.banners.embed" variant="subtitle1"  gutterBottom  />
    <DisplayAndCopyToClipboardText link={link} image={imageUrl} />
    </Box>

    </Box>)

}



const ImageWithBoothNumber = ({link, name, asset_id, text_xy, text_size, text_color="#fff", text_gravity= "south_west"}) => {

 const modal = useSetModal()

 const {boothNames} = usePublicCompanyData()

 const transformedImage = cloudinaryAddText({
    asset_id,
    content: head(boothNames) || "A0.0",
    text_xy,
    text_size,
    text_gravity,
    text_color
    // width: 300,
    // height: 300
 })

 const imageUrl = transformedImage.toURL()


 const handleClick = () => modal("common.download", <DialogContent imageUrl={imageUrl} link={link} />) 

 return <CardImage minWidth={200} maxWidth={400} height={150} buttons={<Button label="common.download" variant="text" onClick={handleClick} />} text={name} cover={false} image={imageUrl} onClick={handleClick} />



//  return  <div></div><ImageWithText public_id={asset_id} content={} width={300} height={200}  />

//  return  <Avatar src={url} size="200" onClick={()=>modal("asd", url) }/>
}


const PromoBanners = ({link=""}) => {

    const {banners} = useSettings("promoninja", [])


    if(isEmpty(banners)){
        return null
    }
   
    return (<Box m={2}><Grid container spacing={2}>{(banners || []).map((banner) => <Grid key={banner.name} item>
       <ImageWithBoothNumber {...banner} link={link} />
    </Grid>)}</Grid></Box>)
}


export default PromoBanners