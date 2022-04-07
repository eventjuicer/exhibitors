
import {Grid, Box, Markdown} from '.'
import { useSettings } from '../contexts'
import { resizeCloudinaryImage, isEmpty, makeStyles } from '../helpers'


const useStyles = makeStyles(theme => ({
    root: {

    },
    image: {
        [theme.breakpoints.down("md")]: {
           width: 200 
        }
    }
}))

const Tutorial = ({setting="badgescanner"}) => {

    const classes = useStyles()
    const {baseLabel, items} = useSettings(setting, {})

    if(isEmpty(items)){
        return true
    }

    return (<Box className={classes.root}>{items.map(({label, image}) => (<Grid key={label} spacing={2} container>
        <Grid item md={8} lg={5} xl={5}>
            <Box p={2}>
            <Markdown label={`${baseLabel}.items.${label}`} />
            </Box>
        </Grid>
        <Grid item><img src={resizeCloudinaryImage(image)} className={classes.image} /></Grid>
    </Grid>))}</Box>)

}


export default Tutorial