

import {createCloudinaryInstance} from '../api'
import {scale, fill, crop} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {image, text} from "@cloudinary/url-gen/qualifiers/source";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";

// import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
// import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
// import {vignette} from "@cloudinary/url-gen/actions/effect";
// import {byRadius, max} from "@cloudinary/url-gen/actions/roundCorners";
// import {saturation, hue} from "@cloudinary/url-gen/actions/adjust";
// import {byAngle} from "@cloudinary/url-gen/actions/rotate"
// import {Transformation} from "@cloudinary/url-gen";





export const cloudinaryAddText = ({asset_id, content="test", height, width, text_gravity="center", text_color="#fff", text_xy=[0,0], text_size=40, format}) => {

    const myImage = createCloudinaryInstance().image(asset_id);
    const [x,y] = text_xy
    
    if(content && text_gravity && text_xy && text_size){
    myImage.overlay(
      source(
        text(content, new TextStyle('Arial', text_size)
        .fontWeight('bold'))
        .textColor(text_color)
      )
      .position(new Position().gravity(compass(text_gravity)).offsetX(x).offsetY(y)) 
    )
  }



    if(parseInt(height) && parseInt(width)){
      myImage.resize(fill().width(width).height(height))
    }

    if(format){
      myImage.format(format)
    }

    return myImage

}



export const resizeCloudinaryImage = (url, width = 600, height = 600, format = "jpg") => {

    //check if not already resized!
    if (url && /cloudinary/.test(url)) {
  
      //no transformation
      if(/image\/upload\/v[0-9]+/.test(url)){
        return url.replace(/\.svg$/i, `.${format}`).replace("image/upload/", `image/upload/w_${width},h_${height},c_limit,f_auto/`);
      }
      //we have some transformation...we need to get parts!
  
      return url
      
    }
  
    return url; //do nothing!
  }
