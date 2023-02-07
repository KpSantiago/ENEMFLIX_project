export interface Response<T> {
  kind: string;
  etag: string;
  pageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: T;
}
