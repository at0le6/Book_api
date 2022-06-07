import cloudImage from 'cloudinary'
import multer from 'multer'
import { CloudinaryStorage } from "multer-storage-cloudinary";

const cloudinary=cloudImage.v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRETKEY,
})
const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder: "Library_api"
    }
})

const upload= multer({storage:storage});
export default upload