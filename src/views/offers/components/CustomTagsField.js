
import CustomFieldContainer from "./CustomFieldContainer"
import { Chip, Box } from "../../../components"

const CustomTagsField = ({value, ...rest}) => {

    return (<CustomFieldContainer {...rest}><Box>{
      value && Array.isArray(value)? 
      value.map(tag=> <Chip key={tag} label={`resources.companydata.fields.keywords_choices.${tag}`} />):
      ""}</Box></CustomFieldContainer>)
  }

export default CustomTagsField