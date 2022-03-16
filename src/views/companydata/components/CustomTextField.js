

import CustomFieldContainer from "./CustomFieldContainer"

const CustomTextField = ({value, ...rest}) => {
    return (<CustomFieldContainer {...rest}>{value}</CustomFieldContainer>)
  }

export default CustomTextField

