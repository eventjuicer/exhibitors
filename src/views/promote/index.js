import React from 'react'
import { useGet, isEmpty, findInArrayOrObject, useAddCompanyIdToUrl, useStoreCompanyId } from '../../helpers'
import {
  Box, 
  Button,
  CompanySelector,
  Alert
} from '../../components';
import { useSetModal, useResolveCompanyId, useCompany } from '../../contexts';
import {
  CompanyRankInfo, 
  PartnerCreativesContent,
} from './components'
import PromoteIcon from '@material-ui/icons/VolumeUp'
import { Loading } from 'react-admin';

const CompanySelectorInModal = () => {

  const modal = useSetModal()
  const hasCompany = useCompany("id")

  if(hasCompany){
    return null
  }
  
  return ( <Box>

    <Alert label="resources.promote.unknown-company" type="error" action={

    <Button label="common.choose" variant="contained" onClick={() => modal("Search for a company", <CompanySelector decorateUrl={true} />) } />

    } />

    </Box>)
}

const Promote = () => {

  useAddCompanyIdToUrl()
  useStoreCompanyId()

  const {data, loading, error} = useGet("/ranking", true)
  const company_id = useResolveCompanyId()
  const company = (data || []).find(item => item.company_id == company_id)
 

  if(error){
    return <div>error</div>
  }

  if(loading){
  return <Loading />
  }


  if(!company){
    return  <Box p={2}><CompanySelectorInModal /></Box>
  }else{
    return (
    <Box p={2}>
    
      <CompanyRankInfo logotype={company.logotype} setting="promoninja" />

      <Alert type="info" label="resources.promote.howto" />
      
      <PartnerCreativesContent 
      links={ findInArrayOrObject(company.creatives, (item)=>item.act_as=="link") } 
      newsletters={ findInArrayOrObject(company.creatives, (item)=>item.act_as=="newsletter") } />
    </Box>)
  }


//const newsletters = Object.values(data).filter(item => item.act_as === "newsletter")
//const links = Object.values(data).filter(item => item.act_as === "link")
//return <PartnerCreativesContent newsletters={newsletters} links={links} />

}


export {PromoteIcon}

export default Promote