export interface IConfig {
  baseURL: string;
  headers?: HeadersInit;
  apiVersion?: string;
  authorization: string;
  endpoints?: any;
  baseEndpoint?: string;
  token?: string;
}
