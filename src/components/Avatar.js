
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'
import { resizeCloudinaryImage, isString } from '../helpers'



const useStyles = ({size, mobileSize}) => makeStyles(theme => ({

    root: {
       height: size,
       width: size,
       [theme.breakpoints.down("md")]: {
          height: mobileSize,
          width: mobileSize,
       }
     },        
     img: {
       objectFit: "contain",
       maxHeight: "90%",
       maxWidth: "90%",
     },
 
}))


const CustomAvatar = ({size=150, mobileSize=0, src=null, variant="square", onClick}) => {

    size = parseInt(size) || 150
    mobileSize = parseInt(mobileSize) || size

    const classes = useStyles({size, mobileSize})()
   
    return (
        <Avatar onClick={onClick} variant={variant} src={ isString(src)? resizeCloudinaryImage(src, size, size): null } classes={{
            root: classes.root,
            img: classes.img
        }}/>
)

}


export default CustomAvatar