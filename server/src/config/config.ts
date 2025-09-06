import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

interface Config {
  databaseUrl: string | undefined;
  salt: number | undefined;
  port?: number | string;
  jwtSecret: string | undefined;
  JWT_EXPIRES_IN?: string | undefined;
}

const config: Config = {
  databaseUrl:( process.env.MONGODB_URI as string) ,
  salt: process.env.SALTROUNDS ? parseInt(process.env.SALTROUNDS, 10) : 14,
  port: process.env.PORT || 5000,
  jwtSecret: process.env.jwtSecret,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
};
export default config;
