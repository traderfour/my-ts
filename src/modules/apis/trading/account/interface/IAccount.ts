import {IBroker} from "../../../../interface/IBroker";
import {IMarket} from "../../../../interface/IMarket";
import {IResponse} from "../../../../interface/IResponse";
import {ITag} from "../../../../interface/ITag";
import {IPlatform} from "../../../../interface/IPlatform";

export interface IAccount extends IResponse {
    uuid: string;
    name: string;
    company?: string;
    identity: string;
    trade_mode?: number;
    margin_type?: number,
    order_limit?: number,
    trade_allowed?: boolean,
    hedge?: boolean,
    capital_road?: boolean,
    currency: string,
    leverage?: number,
    stopout_level?: string,
    report?: number,
    status: number,
    balance: number,
    credit?: number,
    equity: number,
    margin?: number,
    free_margin?: number,
    margin_level?: number,
    tags: ITag[],
    platforms?: IPlatform[],
    brokers?: IBroker[],
    markets?: IMarket[],
}
