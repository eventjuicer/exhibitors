import {Cloudinary} from "@cloudinary/url-gen";


const createCloudinaryInstance = () => new Cloudinary({
    cloud: {
      cloudName: 'eventjuicer'
    }
});


export default createCloudinaryInstance


