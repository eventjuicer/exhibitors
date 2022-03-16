
import Button from './Button'
import Visibility from '@material-ui/icons/Visibility';
import { useCompany } from '../contexts';
import { getFullUrl } from '../helpers'

const ProfilePreviewButton = ({ variant="outlined", color="primary"}) => {

    const slug = useCompany("slug")
    const href = getFullUrl(`/exhibitors/${slug}`)

    if(!slug){
        return null
    }

    return (<Button key="preview" variant={variant} color={color} href={href} target="_blank" label="resources.companydata.actions.preview" startIcon={<Visibility />}  />)
}

export default ProfilePreviewButton