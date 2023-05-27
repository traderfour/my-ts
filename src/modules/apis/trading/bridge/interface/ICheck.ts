import {IResponse} from "../../../../interface/IResponse";

export interface ICheck extends IResponse {
    results:{
        access: boolean;
        identity: string;
    }
}