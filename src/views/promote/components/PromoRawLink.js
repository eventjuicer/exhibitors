
import TextField from '@material-ui/core/TextField'
import { makeStyles } from "../../../helpers"
import { Box, Button, CopyToClipboardButton } from "../../../components"


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    avatarContainer: {
      width: 300,
      height: 300,
    },
    avatarImg: {
      objectFit: "contain",
      maxHeight: "85%",
      maxWidth: "85%",
    },
    active: {
      color: "black",
      cursor: "pointer"
    },
    disabled: {
      color: "#ccc",
      cursor: "pointer"
    },
    textfield: {
        padding: 10
    },
    icon_near_text: {
        marginTop: -10
    }
});
  

const PromoRawLink = ({link}) => {
    const classes = useStyles()
    return  (<Box>
            <TextField multiline={true} value={link} fullWidth={true}  variant="outlined"  />
            <CopyToClipboardButton text={link} />
            <Button label={`common.test`} href={link} />
            </Box>)
}


export default PromoRawLink