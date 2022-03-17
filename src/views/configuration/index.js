import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ChangeCompanyLang, Typography, Box} from '../../components'
import { Title} from 'react-admin';


const Configuration = () => {

  return (

    <Card>
        <Title title="Configuration" />
        <CardContent>
      <Typography label="resources.companydata.customfields.lang.name" />
      <ChangeCompanyLang />
        </CardContent>



    <Box mt={50}>
    <Typography variant="overline" paragraph>{`
    ${process.env.REACT_APP_VERCEL_ENV} 
    ${process.env.REACT_APP_VERCEL_GIT_COMMIT_REF} 
    ${process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA}
    `}</Typography>
    </Box>


    </Card>



  )

}



export default Configuration
