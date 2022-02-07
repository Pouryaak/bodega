import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: join(__dirname, "../../.env") });

const config = {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
};

export default config;
