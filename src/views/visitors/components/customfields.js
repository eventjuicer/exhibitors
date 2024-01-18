
import { get } from '../../../helpers';
import { Chip } from '../../../components';

const getFullName = (field, option) => {

    if(!field || !option) return ""

    return  `resources.visitors.fields.${field}.options.${option}`

}

export const PersonField = ({record}) => {

    if(!record) return null
    
    return <span>{`${get(record, "profile.fname")} ${get(record, "profile.lname")}`}</span>
  
  }
  
  export const PositionField = ({record}) => {
      
    if(!record) return null
  
    const cr = get(record, "profile.company_role", "")

    return (<span><span>{get(record, "profile.position", "").substr(0, 35)}</span>
    {cr? <span><Chip label={getFullName("company_role", cr)}/></span>: null}</span>)
  
  }


  export const CompanyField = ({record}) => {
    
    if(!record) return null

    const pt = get(record, "profile.participant_type", "");
  
    return (<span><span>{get(record, "profile.cname2", "").substr(0, 35)}</span>
    <span>{pt? <Chip label={getFullName("participant_type", pt)} />: null}</span></span>)
  
  }

  
