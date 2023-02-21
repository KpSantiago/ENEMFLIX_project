export interface Response<T> {
  kind: string;
  etag: string;
  items: T;
}
