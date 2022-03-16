
import {isValidHttpUrl} from '../../helpers'

export const validate = ({name, value}) => {

  const errors = {};

  switch(name)
  {
    case "logotype":
    case "facebook":
    case "linkedin":
    case "twitter":
    case "website":
    case "opengraph_image":

      if(value && !isValidHttpUrl(value) )
      {
        errors["value"] = 'Must contain valid link http(s)://'
      }

      break;

    case "keywords":


      if(value && Array.isArray(value) && value.length > 3)
      {
          errors["value"] = 'Only 3 keywords may be selected'
      }

      break;

    default:


  }
  return errors;
};
