
import { useListContext } from "react-admin";
import Typography from "./Typography";
import Markdown from "./Markdown";
import {makeStyles} from '@material-ui/core/styles'


/**
 * 
 * TODO: handle info about resource limits!
 * 
 */

const useStyles = makeStyles(theme => ({

}))

const Aside = ({label, children}) => {
    const { data, ids, resource } = useListContext();
    const classes = useStyles()

    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6" label={label || `resources.${resource}.name`} />

            <Markdown label={`resources.${resource}.subtitle`} />

            {children}
        </div>
    );
  };

export default Aside