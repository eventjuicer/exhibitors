
import { Box } from "../../../components"
import CustomFieldContainer from "./CustomFieldContainer"
import { useTranslate } from "react-admin"

const CustomTranslatableField = ({value, ...rest}) => {

    const translate = useTranslate()
  
    return (<CustomFieldContainer {...rest}><Box>{value ? translate(`resources.companydata.fields.countries_choices.${value}`): ""}</Box></CustomFieldContainer>)
  }

export default CustomTranslatableField