//#region Public Routes
import { config } from "./modules/config";
import { tradingAccounts } from "./modules/apis/trading-accounts";
import { tradingFrameworks } from "./modules/apis/trading-framework"; 
import { tradingBridges } from "./modules/apis/trading-bridge";
import { ITradingAccountListResponse } from "./modules/apis/trading-accounts/list/types/TradingAccounts.type";
import { ITradingAccountStoreResponse } from "./modules/apis/trading-accounts/store/types/tradingAccountsStore.type";
import { IDeleteTradingAccountResponse } from "./modules/apis/trading-accounts/delete/types/deleteTradingAccounts.type";
import { ITradingSingleAccountResponse } from "./modules/apis/trading-accounts/single/types/singleTradingAccount.type";
import { IUpdateTradingAccountResponse } from "./modules/apis/trading-accounts/update/types/updateTradingAccounts.type";
import { ITradingFrameworkListResponse } from "./modules/apis/trading-framework/list/types/tradingFramworkList.type";
import { ITradingFrameworkStoreResponse } from "./modules/apis/trading-framework/store/types/TradingFrameworksStore.type";
import { ISingleTradingFrameworkResponse } from "./modules/apis/trading-framework/single/types/singleTradingFramework.type";
import { IUpdateTradingFrameworkResponse } from "./modules/apis/trading-framework/update/types/updateTradingFramework.type";
import { IDeleteTradingFrameworkResponse } from "./modules/apis/trading-framework/delete/types/deleteFramework.type";
import { IBridgeCheckStoreResponse } from "./modules/apis/trading-bridge/store-check/types/postTradingBridgeCheck.type";
import { IBridgeWebhookStoreResponse } from "./modules/apis/trading-bridge/store-webhook/types/postTradingBridgeWebhook.type";
//#endregion
export interface IMyTs {
  config: typeof config;
  tradingAccounts: {
    getTradingAccounts: (
      endpoint?: string | undefined
    ) => Promise<ITradingAccountListResponse>,
    postTradingAccounts:(
      endpoint?: string | undefined
    ) => Promise<ITradingAccountStoreResponse>,
    getSingleTradingAccount:(
      endpoint?: string | undefined
    ) => Promise<ITradingSingleAccountResponse>,
    deleteTradingAccount:(
      endpoint?: string | undefined
    ) => Promise<IDeleteTradingAccountResponse>,
    UpdateTradingAccounts:(
      endpoint?: string | undefined
    ) => Promise<IUpdateTradingAccountResponse>
  },
  tradingFrameworks:{
    getTradingFrameworkList:(
      endpoint?: string | undefined
    ) => Promise<ITradingFrameworkListResponse>,
    postTradingFramework:(
      endpoint?: string | undefined
    ) => Promise<ITradingFrameworkStoreResponse>,
    getSingleTradingFramework:(
      endpoint?: string | undefined
    ) => Promise<ISingleTradingFrameworkResponse>,
    deleteTradingFramework:(
      endpoint?: string | undefined
    ) => Promise<IDeleteTradingFrameworkResponse>,
    updateTradingFramework:(
      endpoint?: string | undefined
    ) => Promise<IUpdateTradingFrameworkResponse>,
  },
  tradingBridges:{
    postTradingBridgeCheck:(
      endpoint?: string | undefined
    ) => Promise<IBridgeCheckStoreResponse>,
    postTradingBridgeWebhook:(
      endpoint?: string | undefined
    ) => Promise<IBridgeWebhookStoreResponse>
  }
}
// add IMyTs type to myTs function

export const myTs = (): IMyTs => {
  return {
    config,
    tradingAccounts: tradingAccounts(),
    tradingFrameworks:tradingFrameworks(),
    tradingBridges:tradingBridges(),
  };
};
