
import {isValidHttpUrl, isEmpty} from '../../helpers'


export const validate = ({name, value}) => {

  const errors = {};

  switch(name){

    case "name":
    case "about":
    case "products":

      if(value && /<\/?[a-z][\s\S]*>/i.test(value)){
        errors["value"] = 'Tags? No!'
      }

      if(value && (value.match(/http/g) || []).length > 2){
        errors["value"] = 'Too many links... 2 links max'
      }

      // if(value && /^[#]{1,3}(.*)/m.test(value)){
      //   errors["value"] = 'Cannot use p'
      // }

      if(!value || value.length<3){
        errors["value"] = 'Too short...'
      }

    break

    //case "logotype":
    //case "opengraph_image":
    case "facebook":
    case "linkedin":
    case "twitter":
    case "website":
    case "xing":

      if(value && !isValidHttpUrl(value) ){
       errors["value"] = 'Must contain full valid link http(s)://'
      }

    break;

    case "keywords":

      if(value && Array.isArray(value) && value.length > 3){
        errors["value"] = 'Only 3 keywords may be selected'
      }

    break;

    default:

  }
  return !isEmpty(errors) ? errors: undefined;
};
