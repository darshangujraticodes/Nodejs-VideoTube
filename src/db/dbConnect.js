import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
  try {
    const dbResponse = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log("DB Response Instance | Host :", dbResponse.connection.host);
  } catch (error) {
    console.error("dbConnect.js | Connection Error ", error);
    process.exit(1);
  }
};

export default dbConnect;
