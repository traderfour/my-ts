import { IConfig } from "./interface/Config";

/**
 * @description Set Base URL and other configs
 * @returns your base URL is Set and other configs added
 */
export let config: IConfig = {
  baseURL: "https://api.trader4.net",
  headers: {},
  apiVersion: "v1",
  authorization: "Authorization",
  endpoints: {
    posts: "/my/posts/",
    trading:{
      accounts: "/my/trading/accounts/",
      frameworks: "/my/trading/frameworks/",
    }
  },
};
