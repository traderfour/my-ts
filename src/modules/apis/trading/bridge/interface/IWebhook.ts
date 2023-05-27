import {IResponse} from "../../../../interface/IResponse";

export interface IWebhook extends IResponse {
    results:{
        app_key: string,
        order: string,
        instrument: string,
        stop_loss: string,
        target_price: string,
        risk: string,
        risk_mode: string,
        trading_account: string
    }
}