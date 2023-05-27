import {IResponse} from '../../../interface/IResponse';
import {ITag} from "../../../interface/ITag";
import {ICategory} from "../../../interface/ICategory";
import {IPlatform} from "../../../interface/IPlatform";
import {IAttachment} from "../../../interface/IAttachment";

export interface IPost extends IResponse{
    uuid: string;
    title: string;
    slogan: string;
    excerpt: string;
    content?: string;
    logo?: string;
    cover?: string;
    download_count: number;
    view_count: number;
    purchase_count: number;
    comment_count: number;
    comments?: number;
    type: number;
    is_public: boolean;
    status: number;
    published_at: string;
    last_update?: string;
    tags?: ITag[];
    categories?: ICategory[];
    platforms?: IPlatform[];
    attachments?: IAttachment[];
}
