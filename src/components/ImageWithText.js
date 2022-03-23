import {AdvancedImage} from '@cloudinary/react'

import {cloudinaryAddText} from '../helpers'


const ImageWithText = (data) => {

    const myImage = cloudinaryAddText(data)

    return <AdvancedImage cldImg={myImage} />

}


export default ImageWithText