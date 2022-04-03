
import get from 'lodash/get';

const TextFieldShort = ({ record = {}, source, limit = 25 }) => {

    if(!record){
        return ""
    }

    const text = get(record, source, "")

     return text.length > limit? `${text.substring(0, limit)}...`: text
}

export default TextFieldShort