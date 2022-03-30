
import Button from './Button'
import { useHistory } from 'react-router-dom';
import { useIsMobile } from '../helpers';


const ButtonLink = ({to, query={}, label="common.details", ...buttonProps}) => {
    const isMobile = useIsMobile("md")
    const {push} = useHistory()

    if(isMobile && "startIcon" in buttonProps){
        label = ""
    }

    return <Button onClick={() => push({
        pathname: to,
        search: new URLSearchParams(query).toString()
    })} label={label} {...buttonProps} />

}

export default ButtonLink