
import { Chip } from '../../../components';
import {grey, blue, teal} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {  usePurchase } from '../../../contexts'

/**
 * 
 * https://v4.mui.com/customization/color/#color-palette
 */

const useStyles = makeStyles(theme => ({

  new: {
    backgroundColor: blue[300]
    },

  hold: {
    backgroundColor: blue[200]
  },

  confimed: {
    backgroundColor: blue[200]
  },

  ok: {
    backgroundColor: teal[200]
  },

  cancelled: {
    backgroundColor: grey[200],
    color: grey[500]
  },


}))



const PurchaseStatus = () => {

    const classes = useStyles()
    const {status} = usePurchase()

    return <Chip label={`common.statuses.${status}`} className={classes[status]}/>
}


export default PurchaseStatus