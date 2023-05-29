import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { IDelete } from "../../interface/IDelete";
import { config } from "../../config";

/**
 * @description delete a post
 * @returns a trading account delete res
 * @default  endpoint is /my/posts
 * @param uuid
 */
export const destroy = async (
  endpoint?: string,
  uuid?: string
): Promise<IDelete> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.posts + uuid),
    useHeaders("DELETE")
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
