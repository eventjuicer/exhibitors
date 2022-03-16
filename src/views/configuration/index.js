import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ChangeLanguageButton, Typography, Box} from '../../components'

import {
  Title,
} from 'react-admin';


const Configuration = () => {

  return (

    <Card>
        <Title title="Configuration" />
        <CardContent>
      <Typography label="pos.language" />
      <ChangeLanguageButton />



<Box mt={50}>
<Typography variant="overline" paragraph>{`
  ${process.env.REACT_APP_VERCEL_ENV} 
  ${process.env.REACT_APP_VERCEL_GIT_COMMIT_REF} 
  ${process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA}
  `}</Typography>
</Box>
         

        </CardContent>
    </Card>



  )

}



export default Configuration
