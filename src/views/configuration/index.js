import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ChangeCompanyLang, Section, Vercel} from '../../components'
import { Title} from 'react-admin';


const Configuration = () => {

  return (

    <Card>
    <Title title="Configuration" />
    <CardContent>

    <Section label="resources.companydata.customfields.lang.name">
    <ChangeCompanyLang />
    </Section>
    
    
    <Vercel />
    </CardContent>
    </Card>
  )

}



export default Configuration
