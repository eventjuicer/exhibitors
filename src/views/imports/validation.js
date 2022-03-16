/*

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

*/

const containsOneEmailPerLine = line =>
  line && line.indexOf('@') > 0 && (line.match(/@/g) || []).length === 1;

export const validate = values => {


  const errors = {};

  if (!values.imported_manually && !values.imported_json)
  {
    errors.imported_manually = ['No input detected...'];
    errors.imported_json = ['No file detected...'];
  }

  if (values.imported_manually)
  {
    if (
      !values.imported_manually.every((el, idx, arr) =>
        containsOneEmailPerLine(el)
      )
    ) {
      errors.imported_manually = ['Bad input? One email per line?'];
    }
  }

  if (values.imported_json) {

    if (! values.imported_json.every((el, idx, arr) => 'email' in el)) {

      errors.imported_json = ['At least email address must be selected...'];
    }

    if (
      !values.imported_json.some(
        (el, idx, arr) => 'email' in el && containsOneEmailPerLine(el['email'])
      )
    ) {
      errors.imported_json = ['No of the emails seem to be ...emails.'];
    }
  }

  return errors;
};
