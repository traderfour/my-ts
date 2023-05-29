import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { IPostList } from "./interface/IPostList";
import { config } from "../../config";

/**
 * @description list of posts
 * @returns a trading accounts list
 * @default  endpoint is /my/posts
 */
export const list = async (endpoint?: string): Promise<IPostList> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.posts),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
