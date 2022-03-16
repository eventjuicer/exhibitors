
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'
import { resizeCloudinaryImage, isString } from '../helpers'



const useStyles = size => makeStyles(theme => ({

    root: {
       height: size,
       width: size,
     },        
     img: {
       objectFit: "contain",
       maxHeight: "90%",
       maxWidth: "90%",
     },
 
}))


const CustomAvatar = ({size=150, src=null, variant="square", onClick}) => {

    size = parseInt(size) || 150
    const classes = useStyles(size)()
   
    return (
        <Avatar onClick={onClick} variant={variant} src={ isString(src)? resizeCloudinaryImage(src, size, size): null } classes={{
            root: classes.root,
            img: classes.img
        }}/>
)

}


export default CustomAvatar