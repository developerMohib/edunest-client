import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

interface Config {
  databaseUrl: string | undefined;
  salt: number | undefined;
  nextauthSecret: string | undefined;
}
const config: Config = {
  databaseUrl: process.env.MONGODB_URI,
  salt: process.env.SALTROUNDS ? parseInt(process.env.SALTROUNDS, 10) : 14,
  nextauthSecret: process.env.NEXTAUTH_SECRET,
};
export default config;
