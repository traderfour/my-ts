import { config } from "./modules/config";
import {IPostList} from "./modules/apis/posts/interface/IPostList";
import {IPost} from "./modules/apis/posts/interface/IPost";
import {IDelete} from "./modules/interface/IDelete";
import {posts} from "./modules/apis/posts";
import {IAccountList} from "./modules/apis/trading/account/interface/IAccountList";
import {IAccount} from "./modules/apis/trading/account/interface/IAccount";
import {accounts} from "./modules/apis/trading/account";
import {IFrameworkList} from "./modules/apis/trading/framework/interface/IFrameworkList";
import {IFramework} from "./modules/apis/trading/framework/interface/IFramework";
import {frameworks} from "./modules/apis/trading/framework";

export interface IMyTs {
  config: typeof config;
  posts: {
    list: (endpoint?: string | undefined) => Promise<IPostList>;
    single: (endpoint?: string | undefined) => Promise<IPost>;
    store: (endpoint?: string | undefined) => Promise<IPost>;
    update: (endpoint?: string | undefined) => Promise<IPost>;
    destroy: (endpoint?: string | undefined) => Promise<IDelete>;
  }
  trading: {
    accounts: {
        list: (endpoint?: string | undefined) => Promise<IAccountList>;
        single: (endpoint?: string | undefined) => Promise<IAccount>;
        store: (endpoint?: string | undefined) => Promise<IAccount>;
        update: (endpoint?: string | undefined) => Promise<IAccount>;
        destroy: (endpoint?: string | undefined) => Promise<IDelete>;
    },
    frameworks: {
        list: (endpoint?: string | undefined) => Promise<IFrameworkList>;
        single: (endpoint?: string | undefined) => Promise<IFramework>;
        store: (endpoint?: string | undefined) => Promise<IFramework>;
        update: (endpoint?: string | undefined) => Promise<IFramework>;
        destroy: (endpoint?: string | undefined) => Promise<IDelete>;
    }
  }
}

export const myTs = (): IMyTs => {
  return {
    config,
    posts: posts(),
    trading: {
        accounts: accounts(),
        frameworks: frameworks(),
    },
  };
};
