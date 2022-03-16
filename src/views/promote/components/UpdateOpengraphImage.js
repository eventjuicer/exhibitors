

import {
    Grid, 
    UploadAndSyncImage, 
    Alert
} from '../../../components'
import {find} from '../../../helpers'
import { useGetList } from 'react-admin'

const UpdateOpengraphImage = () => {

    const {data, ids, loading, error} = useGetList("companydata", {page:1, perPage: 100})

    const opengraph = find(data, {name: "opengraph_image"}) || {}

    console.log(opengraph, ids)

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Alert label="exhibitor.creatives.opengraph" type="info" />
            </Grid>
            <Grid item xs={6}>
                <UploadAndSyncImage preview={opengraph.value} />    
            </Grid>
        </Grid>
     
     
    )
}


export default UpdateOpengraphImage