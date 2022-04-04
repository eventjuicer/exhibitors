import React from 'react';
import { List, Datagrid, downloadCSV } from 'react-admin';
import { ResourceTitle, ResourceAbout, ButtonLink } from '../../components';
import { PromoteIcon } from '../promote'
import { TextFieldShort } from '../../fields'
import { IsVipcodeUsed, UseVipcodeButton, IsVipcodeSent } from './components'
import { VipIcon } from '.'
import jsonExport from 'jsonexport/dist';
import { useCompany } from '../../contexts';
import { vipCodeUrl } from '../../helpers';


const Aside = (props) => (
  <ResourceAbout 
  {...props}
  resource="vipcodes" 
  label="logistics.timeline.items.vips.title"
  descriptionLabel="logistics.timeline.items.vips.description"
  aside={true} 
  icon={ VipIcon } 
  buttons={<ButtonLink to="promote" label="resources.promote.menu" startIcon={<PromoteIcon />} variant="text" />}
  />
)


const exporter = (slug) => (items) => {

  const filtered = items.filter(item => {
    if(item.participant){
      return false //used!
    }

    if(item.email){
      return false //used!
    }

    return true
  }).map(item => ({
    code: vipCodeUrl(slug, item.code)
  }))

  jsonExport(filtered, {
      headers: ['code'] 
  }, (err, csv) => {
      downloadCSV(csv, `${slug}-invite-links`); 
  });

};


const VipList = props => {

  const slug = useCompany("slug")

  return (
    <List
      {...props}
      // filters={<VisitorFilter />}
      sort={{ field: 'lname', order: 'ASC' }}
      perPage={100}
      title={ <ResourceTitle {...props} />}
      exporter={ exporter(slug) }
      aside={ <Aside {...props} />}
      bulkActionButtons={false}
  >
      <Datagrid>
  
        <TextFieldShort source="code" limit="10" sortable={false} />
        <IsVipcodeSent label="fields.recipient" source="email" />
        <IsVipcodeUsed source="participant" />
        <UseVipcodeButton />
        
      </Datagrid>
    </List>
  );

}

export default VipList;

