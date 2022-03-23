

import { useSettings, useSetModal } from "../../../contexts"
import { map } from '../../../helpers'
import { Box, Grid, Avatar } from "../../../components"


const PromoBanners = ({link}) => {

    const {banners} = useSettings("promoninja", {})
    const modal = useSetModal()

    return (<Box><Grid container>{map(banners, (url, name) => <Grid key={name} item>
        <Avatar src={url} size="200" onClick={()=>modal("asd", url) }/>
    </Grid>)}</Grid></Box>)
}


export default PromoBanners