import {postTradingBridgeCheck} from "./join/index";
import{postTradingBridgeWebhook} from "./webhook/index";
export const tradingBridges = () => {
  return {
    postTradingBridgeCheck,
    postTradingBridgeWebhook,
}
}