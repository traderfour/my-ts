import {IResponse} from '../../../interface/IResponse';

export interface ITag extends IResponse{
    uuid: string;
    title: string;
    slug: string;
}
