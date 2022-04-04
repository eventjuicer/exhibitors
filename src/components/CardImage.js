

import { Card, CardActionArea, CardContent, CardMedia, CardActions } from "@material-ui/core"
import { makeStyles } from '../helpers'
import Typography from "./Typography"


const useStyles= ({minWidth, maxWidth, height, cover}) => makeStyles(theme => ({
    root: {
        minWidth,
        maxWidth
      },
      media: {
        height,
        backgroundSize: cover? "cover": "contain"
      },
}))


const CardImage = ({buttons=null, cover=true, minWidth=300, maxWidth=400, height=300, image=null, onClick, label=null, labelProps={}, text=null}) => {

    const classes = useStyles({minWidth, maxWidth, height, cover})()

    return (<Card className={classes.root}>
            <CardActionArea onClick={onClick} >
            {image? <CardMedia  className={classes.media} title="" image={image} />: null}
            <CardContent>
            <Typography variant="subtitle1" label={label} labelProps={labelProps}>{text}</Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>{buttons}</CardActions>
            </Card>
    )
} 


export default CardImage