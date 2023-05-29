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
 */

export const update = async (
  endpoint?: string,
  payload?: IPost,
  uuid?: string
): Promise<IPostResponse> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.posts + uuid),
    useHeaders(payload, "PUT")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
