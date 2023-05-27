import {postTradingBridgeCheck} from "./join/index";
import{postTradingBridgeWebhook} from "./webhook/index";
export const bridge = () => {
  return {
    postTradingBridgeCheck,
    postTradingBridgeWebhook,
}
}