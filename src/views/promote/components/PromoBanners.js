

import { useSettings, useSetModal, usePublicCompanyData } from "../../../contexts"
import { isEmpty, head, cloudinaryAddText, makeStyles } from '../../../helpers'
import { Box, Grid, Avatar, Typography, CardImage, Button } from "../../../components"


const DialogContent = () => {


    return (<div></div>)

}



const ImageWithBoothNumber = ({name, asset_id, text_xy, text_size}) => {

 const modal = useSetModal()

 const boothIds = usePublicCompanyData()

 const transformedImage = cloudinaryAddText({
    asset_id,
    content: head(boothIds),
    text_xy,
    text_size,
    text_gravity: "south_west"
    // width: 300,
    // height: 300
 })

 const handleClick = () => modal("asd", "") 

 return <CardImage minWidth={300} height={200} buttons={<Button label="common.download" variant="text" onClick={handleClick} />} text={name} cover={false} image={transformedImage.toURL()} onClick={handleClick} />



//  return  <div></div><ImageWithText public_id={asset_id} content={} width={300} height={200}  />

//  return  <Avatar src={url} size="200" onClick={()=>modal("asd", url) }/>
}


const PromoBanners = ({link}) => {

    const {banners} = useSettings("promoninja", [])

    if(isEmpty(banners)){
        return null
    }
   
    return (<Box><Grid container spacing={2}>{(banners || []).map((banner) => <Grid key={banner.name} item>
       <ImageWithBoothNumber {...banner} />
    </Grid>)}</Grid></Box>)
}


export default PromoBanners