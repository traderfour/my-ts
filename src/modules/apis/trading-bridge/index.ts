import {postTradingBridgeCheck} from "./store-check/index";
import{postTradingBridgeWebhook} from "./store-webhook/index";
export const tradingBridges = () => {
  return {
    postTradingBridgeCheck,
    postTradingBridgeWebhook,
}
}