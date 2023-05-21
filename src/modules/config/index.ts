import { IConfig } from "./interface/Config";

/**
 * @description Set Base URL and other configs
 * @returns your base URL is Set and other configs added
 */
export let config: IConfig = {
  baseURL: "",
  headers: {},
  defaultValues: {
    apiVersion: "v1",
    headerAuthorizationTitle: "Authorization",
    defaultEndpoints: {
      tradingAccountsList: "/my/trading/accounts",
    },
  },
};
