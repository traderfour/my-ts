import {IResponse} from "./IResponse";

export interface IBroker extends IResponse{
    uuid: string;
    name: string;
    logo: string;
}
