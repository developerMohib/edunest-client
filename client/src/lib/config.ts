interface Config {
  databaseUrl: string | undefined;
  salt: number | undefined;
  nextauthSecret: string | undefined;
  nextPublicApiUrl: string | undefined;
}
const config: Config = {
  databaseUrl: process.env.MONGODB_URI,
  salt: process.env.SALTROUNDS ? parseInt(process.env.SALTROUNDS, 10) : 14,
  nextauthSecret: process.env.NEXTAUTH_SECRET,
  nextPublicApiUrl: process.env.NEXT_PUBLIC_API_URL,
};
export default config;
