


import {Grid, Button} from '../../../components'
import { makeStyles } from '../../../helpers';

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
  

const PromoNewsletter = ({name, lang, content, newsletter}) => {
    const classes = useStyles()
    return (<Grid container direction="row" spacing={1}>
        <Grid item ><Button label=".zip" href={newsletter.zip} variant="outlined" /></Grid>
        <Grid item><Button label=".html" href={newsletter.html}  variant="outlined" /></Grid>
    </Grid>)
}



export default PromoNewsletter