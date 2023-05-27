import {IPost} from "../../interface/IPost";

export interface IPostList extends IPost{
    results: IPost[];
}
