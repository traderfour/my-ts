import {IResponse} from "../../../../interface/IResponse";
import {IFramework} from "./IFramework";

export interface IFrameworkList extends IResponse{
    results: IFramework[];
}
