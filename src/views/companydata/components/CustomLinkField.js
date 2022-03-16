

import { Box, makeStyles } from '../../../components'
import CustomFieldContainer from "./CustomFieldContainer"
import {teal} from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  link:{
    color: teal[800]
  }
}))

const CustomLinkField = ({value, ...rest}) => {

    const classes = useStyles()

    return (<CustomFieldContainer {...rest}><Box>
    <a target="_blank" href={value} className={classes.link}>{value}</a>
    </Box></CustomFieldContainer>)
  }

export default CustomLinkField