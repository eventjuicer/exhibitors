import React from 'react';
import { List, useListContext, ListBase, Datagrid} from 'react-admin';
import {ButtonBase}from '@material-ui/core'
import {find, isEmpty} from '../../helpers'
import { useSettings, useLimit } from '../../contexts';
// import CompanyDataListActions from './CompanyDataListActions';
import withLogin from '../withLogin'
import { Grid, Box, ResourceTitle } from '../../components'
// import { CustomTextField, CustomTagsField, CustomLinkField, CompanyLogotype, CustomMarkdownField, CustomTranslatableField } from './components';


const CustomIterator = () => {
  const { ids, data, basePath, loaded} = useListContext();
  const fields = useSettings("vips", {})
  const get = (name) => find(data, {name}) || {}
const limit = useLimit("vips")

    console.log({data, limit})

  if(isEmpty(fields)){
    console.error("define visible fields in settings!")
    // return null
  }
  
  if(!loaded){
    // return null
  }

  const {texts, tags, translatable, links} = fields
  
  return <Box>
    <ButtonBase><Box></Box></ButtonBase>
  </Box>

  return <Box m={2}>
  <Grid container spacing={3} direction="row">
  <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>

    {/* <CompanyLogotype preview={get("logotype").value} id={get("logotype").id} /> */}
     
  </Grid>
  <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
      
      {/* <CustomTextField name={get("name").name} value={get("name").value} id={get("name").id} />
      {texts.map(key => <CustomMarkdownField key={key} name={get(key).name} value={get(key).value} id={get(key).id} />)}
      {tags.map(key => <CustomTagsField key={key} name={get(key).name}value={get(key).value} id={get(key).id} />)}
      {translatable.map(key => <CustomTranslatableField key={key} name={get(key).name} value={get(key).value} id={get(key).id} />)}
      {links.map(key => <CustomLinkField key={key} name={get(key).name} value={get(key).value} id={get(key).id} />)} */}
  </Grid>
  </Grid>
  </Box>
}


const ViewList = props => {

  return (

    <List
      {...props}
      exporter={false}
    //   actions={<CompanyDataListActions/>}
      bulkActionButtons={false}
      perPage={100}
      title={ <ResourceTitle {...props} />}
      >

      <CustomIterator />


  </List>
  );
}

export default withLogin(ViewList);


/**
 * 
 * 
 


0: {id: 1, name: 'about', value: 'lorem ipsum', summary: 'lorem ipsum', created_at: '2018-03-13 10:52:00', …}
1: {id: 1089, name: 'countries', value: 'europe', summary: 'europe', created_at: '2018-03-15 00:51:35', …}
2: {id: 2106, name: 'event_manager', value: '', summary: '', created_at: '2018-04-18 19:23:07', …}
3: {id: 3, name: 'expo', value: '<ul><li class="ql-align-justify">Lorem ipsum dolor…mmodo porta nulla vitae porttitor.</p><p><br></p>', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing', created_at: '2018-03-13 10:52:00', …}
4: {id: 6, name: 'facebook', value: 'https://www.facebook.com/targi.ehandlu/', summary: 'https://www.facebook.com/targi.ehandlu/', created_at: '2018-03-13 10:52:00', …}
5: {id: 2108, name: 'invitation_template', value: 'czesc czesc', summary: 'czesc czesc', created_at: '2018-04-19 03:40:20', …}
6: {id: 4, name: 'keywords', value: Array(2), summary: Array(2), created_at: '2018-03-13 10:52:00', …}
7: {id: 2105, name: 'lang', value: '', summary: '', created_at: '2018-04-18 19:23:07', …}
8: {id: 8, name: 'linkedin', value: 'https://www.linkedin.com/showcase/targi-ehandlu-e-commerce-poland-trade-fair-/', summary: 'https://www.linkedin.com/showcase/targi-ehandlu-e-', created_at: '2018-03-13 10:52:00', …}
9: {id: 9, name: 'logotype', value: {…}, summary: {…}, created_at: '2018-03-13 10:52:00', …}
10: {id: 1088, name: 'name', value: 'targi ehandlu', summary: 'targi ehandlu', created_at: '2018-03-15 00:51:35', …}
11: {id: 1354, name: 'opengraph_image', value: 'https://asd.pl', summary: 'https://asd.pl', created_at: '2018-04-05 19:40:41', …}
12: {id: 6092, name: 'pr_manager', value: '', summary: '', created_at: '2019-01-05 23:05:10', …}
13: {id: 2, name: 'products', value: 'lorem ipsum', summary: 'lorem ipsum', created_at: '2018-03-13 10:52:00', …}
14: {id: 6093, name: 'sales_manager', value: '', summary: '', created_at: '2019-01-05 23:05:10', …}
15: {id: 7, name: 'twitter', value: 'https://twitter.com/targiehandlu', summary: 'https://twitter.com/targiehandlu', created_at: '2018-03-13 10:52:00', …}
16: {id: 5, name: 'website', value: 'https://targiehandlu.pl/', summary: 'https://targiehandlu.pl/', created_at: '2018-03-13 10:52:00', …}
17: {id: 6091, name: 'xing', value: '', summary: '', created_at: '2019-01-05 23:05:10', …}


 */