const { v2 } = require("cloudinary");
const fs = require("fs");
const cloudinary = v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file uploaded to Cloudinary");
    // file has been uploaded successfully
    return response;
  } catch (err) {
    // remove locally saved file, uploading failed
    fs.unlinkSync(localFilePath);
    console.error(err); // Log the error for debugging
    return null;
  }
};

module.exports = { uploadOnCloudinary };
