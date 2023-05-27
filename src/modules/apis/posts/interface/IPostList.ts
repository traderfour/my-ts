import {IPost} from "./IPost";
import {IAccount} from "../../trading/account/interface/IAccount";

export interface IPostList extends IPost{
    results: IAccount[];
}
