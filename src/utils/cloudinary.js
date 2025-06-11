import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    // check does file exist or not
    if (!localFilePath) return null;

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      public_id: "youtubeVideo",
      resource_type: "auto",
    });

    // file has been uploaded successfully
    console.log("File is uploaded on Cloudinary", response, response.url);

    return response;
  } catch (error) {
    // file upload is failed
    console.log("File Upload is Failed : ", error);

    // first delete or unlink the failed upload file from folder
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
