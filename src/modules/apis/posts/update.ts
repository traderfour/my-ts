import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { IPost, IPostResponse } from "./interface/IPost";
import { config } from "../../config";

/**
 * @description update a post
 * @returns a post update response
 * @default  endpoint is /my/posts
 * @param payload
 * @param uuid
 * @param endpoint
 */

export const update = async (
    uuid: string,
    endpoint?: string,
    payload?: IPost,
): Promise<IPostResponse> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.posts + uuid),
    useHeaders(payload, "PUT")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
