import { getTradingFrameworkList } from "./list";
import { postTradingFramework } from "./store";
import { getSingleTradingFramework } from "./single";
import { deleteTradingFramework } from "./delete";
import { updateTradingFramework } from "./update";
export const tradingFrameworks = () => {
  return {
    getTradingFrameworkList,
    postTradingFramework,
    getSingleTradingFramework,
    deleteTradingFramework,
    updateTradingFramework,
  };
};
