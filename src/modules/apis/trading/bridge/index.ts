import {check} from "./check";
import {webhook} from "./webhook";

export const bridge = () => {
  return {
    check,
    webhook
}
}