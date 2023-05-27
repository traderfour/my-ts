import {IResponse} from "./IResponse";

export interface IPlatform extends IResponse{
    uuid: string;
    title: string;
    slug: string;
    icon: string;
}
