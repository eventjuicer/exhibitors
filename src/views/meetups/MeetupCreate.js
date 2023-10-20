import React, {useEffect} from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,

  required,
  email,
  minLength,
  maxLength,

  useRedirect,
  useRefresh,
  useGetOne
} from 'react-admin';

import { getUserFullName, getUserData } from '../../helpers';
import { useSearchParams, useCompanyDataItem, get } from '../../helpers';
import { Typography, Box } from '../../components'
 

const MeetupCreateUserInfo = () => {

  const params = useSearchParams()
  const {data, loading, error} = useGetOne("visitors", params.get("participant_id") )

  if(!data || loading || error){
    return null
  }

  const fname = get(data, "profile.fname", "")
  const lname = get(data, "profile.lname", "")
  const cname = get(data, "profile.cname2", "")
  const position = get(data, "profile.position", "")

  return ( <Box>
     <Typography variant="h5">{`${fname} ${lname}, ${position} @ ${cname}`}</Typography>
  </Box> )


}

const MeetupCreate = props => {

  const params = useSearchParams()
  const cd = useCompanyDataItem("invitation_template")
  const redirect = useRedirect();
  const refresh = useRefresh();

  useEffect(() => {
    if(!params.has("participant_id")){
      redirect("/visitors")
    }
  }, [ params.toString() ])

  const onSuccess = () => {
    redirect('/meetups');
    refresh()
  }

  if(!cd){
    return null
  }



  return (
    <Create title="aor.page.meeting_request" {...props} onSuccess={onSuccess}  >
      <SimpleForm submitOnEnter={false}>
        
        <MeetupCreateUserInfo />
        
        <NumberInput
          disabled={true}
          source="participant_id"
          initialValue={params.get("participant_id")}
          style={{display: "none"}}
        />
  
        <TextInput
          multiline
          source="message"
          validate={[required(), minLength(10), maxLength(1000)]}
          style={{ minWidth: 700, maxWidth: 900 }}
          initialValue={ cd.value||"" }
          minRows={10}
        />
  
        <TextInput
          source="data.from_name"
          validate={[required(), minLength(2), maxLength(255)]}
          options={{ fullWidth: true }}
          style={{ width: 544 }}
          initialValue={getUserFullName()}
        />
  
        <TextInput
          type="email"
          source="data.from_email"
          validate={[ required(), email() ]}
          options={{ fullWidth: true }}
          style={{ width: 544 }}
          initialValue={getUserData('email')}
        />
      </SimpleForm>
    </Create>
  );
  
}


export default MeetupCreate;
