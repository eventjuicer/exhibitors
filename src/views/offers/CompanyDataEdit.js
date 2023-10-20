import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  TopToolbar,
  ListButton,
  Toolbar,
  SaveButton,
  useAuthProvider
} from 'react-admin';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import VarLabelTextField from '../../fields/VarLabelTextField'
import VarTextInput from './VarTextInput'
import { Field } from 'react-final-form';
import { validate } from './validation';
import CompanyDataEditAside from './CompanyDataEditAside'
import { useSettings, useLoginSuccess } from '../../contexts';
import {useOnEdit} from '../../helpers'

const EditActions = ({ basePath }) => (
  <TopToolbar>
      <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
  </TopToolbar>
);


const EditToolbar = props => (
  <Toolbar {...props} >
      <SaveButton redirect="list"/>
  </Toolbar>
);



const ViewEdit = (props) => {

 

  const markdown = useSettings("companydata.markdown", [])
  const longtexts = useSettings("companydata.longtexts", [])
  const checkboxes = useSettings("companydata.checkboxes", {})
  const radios = useSettings("companydata.radios", {})
  const authProvider = useAuthProvider();
  const onLogin = useLoginSuccess()
  const onSuccess = useOnEdit("/companydata", ()=>authProvider.getIdentity().then(data => onLogin(data)))

  return (

    <Edit mutationMode="pessimistic" onSuccess={onSuccess} actions={<EditActions />} aside={<CompanyDataEditAside />} title={  <VarLabelTextField {...props} source="name" raw /> } {...props} >
  
      <SimpleForm  submitOnEnter={false} validate={validate} toolbar={<EditToolbar />}>
  
        <TextInput disabled source="id" style={{display: "none"}} />
  
        <VarLabelTextField source="name"  />
  
        <Field
          style={{marginTop: 40}}
          name="value"
          source="value"
          // parse={v => v.split('\n').filter(v => v)}
          component={VarTextInput}
          markdown={markdown}
          longtexts={longtexts}
          radios={radios}
          uploads={
            ["opengraph_image", "logotype"]
          }
  
          checkboxes={checkboxes}
        />
  
      </SimpleForm>
    </Edit>
  
  )

}

export default ViewEdit
