import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "../../env") })

export const ACCESS_TOKEN = process.env.ACCESS_TOKEN;