

import {
    Grid, 
    UploadAndSyncImage, 
    Alert
} from '../../../components'
import {find} from '../../../helpers'
import { useGetList } from 'react-admin'
import { useCompany } from '../../../contexts'



const UpdateOpengraphImage = () => {

    const company_id = useCompany("id")
    const {data, ids, loading, error} = useGetList("companydata", {page:1, perPage: 100})
    const opengraph = find(data, {name: "opengraph_image"}) || {}

    if(!company_id){
        return null
    }

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