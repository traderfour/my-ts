import {list} from "./list";
import {single} from "./single";
import {store} from "./store";
import {update} from "./update";
import {destroy} from "./destroy";
import {IPostList} from "./interface/IPostList";
import {IPost, IPostResponse} from "./interface/IPost";
import {IDelete} from "../../interface/IDelete";

export const posts = () => {
  return {
    list,
    single,
    store,
    update,
    destroy
  };
};

export interface IPostsModule {
  list: (endpoint?: string | undefined) => Promise<IPostList>;
  single: (uuid: string, endpoint?: string | undefined) => Promise<IPostResponse>;
  store: (endpoint?: string | undefined) => Promise<IPostResponse>;
  update: (uuid: string, endpoint?: string | undefined, payload?: IPost) => Promise<IPostResponse>;
  destroy: (uuid: string, endpoint?: string | undefined) => Promise<IDelete>;
}
