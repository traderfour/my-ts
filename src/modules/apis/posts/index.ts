import {list} from "./list";
import {single} from "./single";
import {store} from "./store";
import {update} from "./update";
import {destroy} from "./delete";

export const posts = () => {
  return {
    list,
    single,
    store,
    update,
    destroy
  };
};
