
import Button from './Button'
import { useHistory } from 'react-router-dom';

const ButtonLink = ({to, query={}, label="common.details", ...buttonProps}) => {
    const {push} = useHistory()
    return <Button onClick={() => push({
        pathname: to,
        search: new URLSearchParams(query).toString()
    })} label={label} {...buttonProps} />

}

export default ButtonLink