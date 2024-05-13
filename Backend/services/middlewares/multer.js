import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { config } from "dotenv";

config();

cloudinary.config({
    cloud_name: "ddaonjhpg",
    api_key: "832743964474311",
    api_secret: "52mO1DBZHzC--UH5k5EfoR0hsm8",
});

const options = {
    storage: new CloudinaryStorage({
        cloudinary,
        params: {
            folder: "avatars",
        },
    }),
};

export default multer(options).single("avatar");