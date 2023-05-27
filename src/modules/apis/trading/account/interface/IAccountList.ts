import {IResponse} from "../../../../interface/IResponse";
import {IAccount} from "./IAccount";

export interface IAccountList extends IResponse{
    results: IAccount[];
}
