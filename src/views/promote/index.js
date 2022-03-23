import React from 'react'
import { useGet, isEmpty, findInArrayOrObject } from '../../helpers'
import {
  Box, 
  Button,
  CompanySelector,
  ResourceAbout
} from '../../components';
import { useSetModal, useResolveCompanyId } from '../../contexts';
import {
  CompanyRankInfo, 
  PartnerCreativesContent,
  PromoBanners
} from './components'
import { useHistory } from 'react-router';


const Empty = (props) => (<ResourceAbout descriptionLabel="logistics.timeline.items.promo.description" resource="creatives" {...props} />)

const CompanySelectorInModal = () => {

  const modal = useSetModal()
  const {replace, } = useHistory()
  
  return ( <Button label="common.reset" variant="text" onClick={() => modal("", <CompanySelector onSelect={company_id => replace({
    pathname: "/promote",
    search: new URLSearchParams({company_id}).toString()
  })} />) } />)
}

const Promote = () => {

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
      <PromoBanners />
      <CompanyRankInfo logotype={company.logotype}/>
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