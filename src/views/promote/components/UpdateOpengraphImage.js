

import {
    Grid, 
    UploadAndSyncImage, 
    Alert
} from '../../../components'

import { useCompanyDataItem } from '../../../helpers'
import { useCompany } from '../../../contexts'

const UpdateOpengraphImage = ({enabled=false}) => {

    const company_id = useCompany("id")
    const opengraph = useCompanyDataItem("opengraph_image")

    if(!opengraph){
        return null;
    }

    if(!company_id || !("id" in opengraph) ){
        return   <Alert label={`resources.promote.opengraph_image.${enabled? "enabled": "disabled"}`} type="info" />
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Alert label={`resources.promote.opengraph_image.${enabled? "enabled": "disabled"}`} type="info" />
            </Grid>
            <Grid item xs={6}>
               {company_id? <UploadAndSyncImage source="value" preview={opengraph.value} variant="rect" size="300" id={opengraph.id} />: null}    
            </Grid>
        </Grid>
    
    )
}


export default UpdateOpengraphImage