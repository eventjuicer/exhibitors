import {makeStyles} from '@material-ui/core/styles'
import MuiChip from '@material-ui/core/Chip'
import {useTranslate} from 'react-admin'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
    chip: {
      marginRight: theme.spacing(0.5)
    }
}))

const Chip = ({label, className}) => {

    const classes = useStyles()
    const translate = useTranslate()

    return <MuiChip className={classNames(classes.chip, className)} label={translate(label)} />
}

export default Chip
