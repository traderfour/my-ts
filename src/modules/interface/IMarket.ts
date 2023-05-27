import {IResponse} from "./IResponse";

export interface IMarket extends IResponse{
    uuid: string;
    name: string;
    slug: string;
    icon: string;
}
