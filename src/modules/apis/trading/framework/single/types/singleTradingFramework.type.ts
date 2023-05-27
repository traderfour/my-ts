export interface ISingleTradingFrameworkResponse {
    succeed: boolean;
    message: string;
    results: any[];
    metas: {
      current_page: number;
      from: any;
      last_page: number;
      links: {
        first: string;
        last: string;
        next: string | null;
        prev: string | null;
      };
      path: string;
      per_page: number;
      to: any;
      total: number;
    };
}
