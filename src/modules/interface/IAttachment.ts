import {IResponse} from "./IResponse";

export interface IAttachment extends IResponse{
    uuid: string;
    path: string;
    type: number;
}
