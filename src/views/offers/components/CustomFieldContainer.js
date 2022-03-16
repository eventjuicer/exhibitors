
import { Typography, Box, Grid } from "../../../components"

import {
    EditButton
  } from 'react-admin';


const CustomFieldContainer = ({id, name, children}) => {
  
    return (<Box mb={2}>
      <Typography label={`resources.companydata.customfields.${name}.name`} variant="overline" gutterBottom />
      
      <Box mt={2} ml={1}>
        <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} sm={9} md={10} lg={9} xl={7}>{children}</Grid>
        <Grid item xs={12} sm={3} md={2} lg={1} xl={1}><EditButton basePath="companydata" record={{id}} /></Grid>
        </Grid>
      </Box>
  
      </Box>)
  }


export default CustomFieldContainer