import {useTranslate} from 'react-admin'
import { Link as DefaultLink } from 'react-router-dom';



const Link = ({to="", label="label"}) => {

    const translate = useTranslate()

    return <DefaultLink to={{pathname: to}}>{translate(label)}</DefaultLink>
}

export default Link