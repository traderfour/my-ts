import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { IPostResponse } from "./interface/IPost";
import { config } from "../../config";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param uuid
 */

export const single = async (
    uuid: string,
    endpoint?: string,
): Promise<IPostResponse> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.posts + uuid),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};