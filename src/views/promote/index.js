import React from 'react'
import { useGet, isEmpty, findInArrayOrObject, useAddCompanyIdToUrl } from '../../helpers'
import {
  Box, 
  Button,
  CompanySelector,
  ResourceAbout,
  Alert
} from '../../components';
import { useSetModal, useResolveCompanyId } from '../../contexts';
import {
  CompanyRankInfo, 
  PartnerCreativesContent,
} from './components'


const Empty = (props) => (<ResourceAbout descriptionLabel="logistics.timeline.items.promo.description" resource="creatives" {...props} />)

const CompanySelectorInModal = () => {

  const modal = useSetModal()

  
  return ( <Button label="common.reset" variant="text" onClick={() => modal("Search for a company", <CompanySelector decorateUrl={true} />) } />)
}

const Promote = () => {

  useAddCompanyIdToUrl()

  const {data} = useGet("/ranking", true)
  const company_id = useResolveCompanyId()
  const company = (data || []).find(item => item.company_id == company_id)

  console.log({company, company_id})

  if(!company){
    return <CompanySelectorInModal />
  }else{
    return (
    <Box p={2}>
      <CompanySelectorInModal />
    
      <CompanyRankInfo logotype={company.logotype}/>

      <Alert type="info" label="resources.promote.description" />
      
      <PartnerCreativesContent 
      links={ findInArrayOrObject(company.creatives, (item)=>item.act_as=="link") } 
      newsletters={ findInArrayOrObject(company.creatives, (item)=>item.act_as=="newsletter") } />
    </Box>)
  }


//const newsletters = Object.values(data).filter(item => item.act_as === "newsletter")
//const links = Object.values(data).filter(item => item.act_as === "link")
//return <PartnerCreativesContent newsletters={newsletters} links={links} />

}




export default Promote