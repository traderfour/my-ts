import { IConfig } from "./interface/Config";

/**
 * @description Set Base URL and other configs
 * @returns your base URL is Set and other configs added
 */
export let config: IConfig = {
  baseURL: "https://api.trader4.net/",
  headers: {},
  apiVersion: "v1/",
  baseEndpoint: "my/",
  authorization: "Authorization",
  token: "",
  endpoints: {
    posts: "posts/",
    trading: {
      accounts: "trading/accounts/",
      frameworks: "trading/frameworks/",
      bridge: {
        check: "trading/bridge/check/",
        webhook: "trading/bridge/webhook/",
      },
    },
  },
};
