import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useTranslate} from 'react-admin'
const styles = {
  input: {
    display: 'flex'
  }
};

const CustomTextField = ({input, meta, ...rest}) => {
  const translate = useTranslate()
  const {label, error, help} = rest
  const {name, value, onChange, onBlur, onFocus, checked}=input
  // const {
  //   error,
  //   touched,
  //   active,
  //   data,
  //   dirty,
  //   dirtySinceLastSubmit,

  //   initial,
  //   invalid,
  //   length,
  //   modified,
  //   modifiedSinceLastSubmit,
  //   pristine,
  //   submitError,
  //   submitFailed,
  //   submitSucceeded,
  //   submitting,
  //   valid,
  //   validating,
  //   visited
  // } = meta

  const renderError = meta.touched && meta.error
  return (
    <div style={styles.input}>
      <TextField
        error={renderError ? true: undefined}
        variant="outlined"
        placeholder="Placeholder"
        helperText={renderError? meta.error: help}
        label={translate(label || name)}
        name={name}
        onChange={onChange}
        value={value}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        disabled={meta.submitting}
      />
    </div>
  );
}






export default CustomTextField;
