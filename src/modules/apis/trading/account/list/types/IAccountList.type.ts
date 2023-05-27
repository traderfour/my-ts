import {IResponse} from "../../../../../interface/IResponse";
import {IAccount} from "../../interface/IAccount";

export interface IAccountList extends IResponse{
    results: IAccount[];
}
