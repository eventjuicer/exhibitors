

import { Paper, Box, Markdown, makeStyles } from "../../../components"
import CustomFieldContainer from "./CustomFieldContainer"
import {grey} from '@material-ui/core/colors'


const useStyles = makeStyles(theme => ({
    text: {
      overflowY: "scroll",
      maxHeight: 200
    },
    paper: {
      backgroundColor: grey[100]
    }
  }))
  

const CustomMarkdownField = ({value, ...rest}) => {
    const classes = useStyles()
    return (<CustomFieldContainer {...rest}>
      <Paper variant="outlined" className={classes.paper}>
        <Box p={1} className={classes.text}>
        <Markdown>{value}</Markdown>
        </Box>
      </Paper>
      </CustomFieldContainer>)
  }

export default CustomMarkdownField