import {useTranslate} from 'react-admin'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: '-webkit-link'
    }
}))

const FakeLink = ({label, ...props}) => {
    const translate = useTranslate()
    const classes = useStyles()

    return <span className={classes.root} {...props}>{translate(label)}</span>
}

export default FakeLink