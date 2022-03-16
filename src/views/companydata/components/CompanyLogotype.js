

import {Grid, Box, UploadAndSyncImage} from '../../../components'


const CompanyLogotype = ({preview, id}) => {

    return (
      <Grid container direction="column" alignItems="center">
      <Grid item>
      <Box mt={10}>
      <UploadAndSyncImage resource="companydata" source="value" preview={preview} id={id}  />
      </Box>
      </Grid>
    </Grid>
    )
  }

export default CompanyLogotype