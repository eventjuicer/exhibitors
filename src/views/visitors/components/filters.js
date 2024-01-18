
import {TextInput, SelectInput } from 'react-admin';

const participant_types = [
    "retailer_wholesaler",
    "brand_manufacturer",
    "service_provider",
    "consultant",
    "developer",
    "media",
    "student"
]

const company_roles = [
  "student",
  "entry",
  "manager",
  "professional",
  "head_of_department",
  "director",
  "c_level",
  "board_member",
  "other"
]


const filters = [



  <SelectInput
  source="participant_type"
  allowEmpty
  choices={participant_types.map(item => ({id: item, name: `resources.visitors.fields.participant_type.options.${item}`}))}
  alwaysOn
  />,

  <SelectInput
  source="company_role"
  allowEmpty
  choices={company_roles.map(item => ({id: item, name: `resources.visitors.fields.company_role.options.${item}`}))}
  alwaysOn
  />,
  

  <TextInput label="pos.search" source="q" alwaysOn />
]

export default filters;
