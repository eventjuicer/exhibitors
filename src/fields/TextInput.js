
import { TextInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 500
    }
}))

const FullWidthTextField = (props) => {
  const classes = useStyles()
  return <TextInput className={classes.root} {...props} />
}

export default FullWidthTextField