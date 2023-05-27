import {list} from "./list";
import {store} from "./store";
import {single} from "./single";
import {update} from "./update";
import {destroy} from "./destroy";

export const frameworks = () => {
  return {
    list,
    store,
    single,
    update,
    destroy,
  };
};
