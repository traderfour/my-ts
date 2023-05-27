import { myTs } from "../../src/index";
import type { IMyTs } from "../../src/index";
import type { ITradingAccountListResponse } from "../../src/modules/apis/trading-accounts/list/types/TradingAccounts.type";

export function setupApp(element: HTMLButtonElement) {
  const my = myTs() as unknown as IMyTs;
  // Configuration
  const config = {
    baseURL: "https://api.trader4.net/v1", // Replace with your API base URL
    defaultEndpoints: {
      tradingAccountsList: "/trading/accounts", // Replace with your default endpoint
    },
    headers: {
      // Replace with any additional headers if needed
    },
  };

  my.config.baseURL = config.baseURL;
  const {
    tradingAccounts: { getTradingAccounts },
  } = my;

  const testFetch = async () => {
    try {
      const response = (await getTradingAccounts(
        "/trading/accounts"
      )) as ITradingAccountListResponse;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  testFetch();
}
