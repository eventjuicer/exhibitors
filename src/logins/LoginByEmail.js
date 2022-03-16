import React from 'react';
import { Field, Form } from 'react-final-form';
import { required, email as emailValidation, fetchUtils} from 'react-admin';
import renderInput from '../redux-form/TextInput';
import Grid from '@material-ui/core/Grid'
import { Button, Box } from '../components';
import { isEmpty } from '../helpers';
import { useLocation } from 'react-router-dom' 


const validate = ({email}) => {

  const isNotValidEmail = emailValidation("BAD EMAIL")(email)

  if(isEmpty(email)){
    return {email: "Required!"}
  }

  if(isNotValidEmail && "message" in isNotValidEmail){
    return {email: isNotValidEmail.message}
  }

}

const LoginByRequest = () => {
  
  const {pathname} = useLocation();

  const onSubmit = ({email}) => {

    fetchUtils.fetchJson(`${process.env.REACT_APP_API_ENDPOINT}/checkauth`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        host: `${process.env.REACT_APP_BASEHOST}`,
        from: pathname
      })
    }).then(res => {

      console.log(res)
      

    })


  }
  
  return (
    <Form onSubmit={onSubmit} validate={validate} render={({handleSubmit, submitError, submitErrors, form, submitting}) => (
      
      <form onSubmit={handleSubmit}>    

      {submitError}

      <Grid container direction='row' spacing={2} justifyContent="center" alignItems='center'>
        <Grid item>
          <Field
          name="email"
          component={renderInput}
          label="E-mail"
          />
        </Grid>
        <Grid item>
          <Button color="secondary" disabled={submitting} type="submit" variant="contained" label="common.login" />
        </Grid>
      </Grid>
  
    
      </form>

    )} />


 
  )

}



export default LoginByRequest
