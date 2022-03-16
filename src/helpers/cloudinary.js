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
