import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, ".env") });

interface ENV {
  COPY_DIR: string | undefined;
  PASTE_DIR: string | undefined;
}

interface Config {
  COPY_DIR: string;
  PASTE_DIR: string;
}

const getConfig = (): ENV => {
  return {
    COPY_DIR: process.env.COPY_DIR,
    PASTE_DIR: process.env.PASTE_DIR,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
