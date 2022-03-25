

import { useSettings, useSetModal, usePublicCompanyData } from "../../../contexts"
import { isEmpty, head, cloudinaryAddText, makeStyles } from '../../../helpers'
import { Box, Grid, Avatar, Typography, CardImage, Button, Alert } from "../../../components"

const DialogContent = ({code, imageUrl}) => {


    return (<Box>

    <Box maxWidth={600} maxHeight={600} mb={2}>
    <img src={imageUrl} alt="" style={{maxWidth: 600, maxHeight: 600}} />
    </Box>

    <Alert label="resources.promote.banners.howto" type="info" />

    <Box mt={2}>
        {code}
    </Box>

    </Box>)

}



const ImageWithBoothNumber = ({wrap, name, asset_id, text_xy, text_size, text_color="#fff", text_gravity= "south_west"}) => {

 const modal = useSetModal()

 const boothIds = usePublicCompanyData()

 const transformedImage = cloudinaryAddText({
    asset_id,
    content: head(boothIds) || "A0.0",
    text_xy,
    text_size,
    text_gravity,
    text_color
    // width: 300,
    // height: 300
 })

 const imageUrl = transformedImage.toURL()

 const handleClick = () => modal("asd", <DialogContent imageUrl={imageUrl} code={wrap(imageUrl)} />) 

 return <CardImage minWidth={200} maxWidth={400} height={150} buttons={<Button label="common.download" variant="text" onClick={handleClick} />} text={name} cover={false} image={imageUrl} onClick={handleClick} />



//  return  <div></div><ImageWithText public_id={asset_id} content={} width={300} height={200}  />

//  return  <Avatar src={url} size="200" onClick={()=>modal("asd", url) }/>
}


const PromoBanners = ({wrap}) => {

    const {banners} = useSettings("promoninja", [])

    if(isEmpty(banners)){
        return null
    }
   
    return (<Box m={2}><Grid container spacing={2}>{(banners || []).map((banner) => <Grid key={banner.name} item>
       <ImageWithBoothNumber {...banner} wrap={wrap} />
    </Grid>)}</Grid></Box>)
}


export default PromoBanners