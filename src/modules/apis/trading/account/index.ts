import {list} from "./list";
import {store} from "./store";
import {single} from "./single";
import {update} from "./update";
import {destroy} from "./delete";

export const accounts = () => {
  return {
    list,
    store,
    single,
    update,
    destroy
  };
};
