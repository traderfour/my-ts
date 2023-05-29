import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { IPost, IPostResponse } from "./interface/IPost";
import { config } from "../../config";

/**
 * @description create new post
 * @returns new post data
 * @default  endpoint is /my/posts
 * @param endpoint
 * @param identifier
 */
export const store = async (
  endpoint?: string,
  payload?: IPost
): Promise<IPostResponse> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.posts),
    useHeaders(payload, "POST")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
