import React from 'react';
import { useFormState, Field } from 'react-final-form';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslate, useLogin } from 'react-admin';
import styles from './styles';
import renderInput from '../react-final-form/TextInput';

/**
 * 
https://marmelab.com/react-admin/Inputs.html#linking-two-inputs
 */

const Login = () => {

  const translate = useTranslate()
  const login = useLogin()


  const handleSubmit = ({ email, password }) => {
    login(
      { email, password },
      location.state ? location.state.nextPathname : '/'
    );
  };

  return (
    <form onSubmit={handleSubmit}>
    <div style={styles.form}>
      <p style={styles.hint}>{translate('auth.loginByPassword.hint')}</p>

      <Field
        name="email"
        component={renderInput}
        floatingLabelText={translate('auth.fields.email')}
      />

      <Field
        name="password"
        component={renderInput}
        floatingLabelText={translate('auth.fields.password')}
        type="password"
      />
    </div>
    <CardActions>
      <Button
        type="submit"
        primary
       // disabled={submitting}
        label={translate('auth.actions.loginWithPassword')}
        fullWidth
      />
    </CardActions>
  </form>
  )

}

/**
 * 
 
 reduxForm({
    form: 'signInWithPassword',
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.email) errors.email = translate('aor.validation.required');
      if (!values.password)
        errors.password = translate('aor.validation.required');
      return errors;
    }
  }),

 */

export default Login
