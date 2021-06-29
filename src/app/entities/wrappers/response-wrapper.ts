export class ResponseWrapper<T> {
  [x: string]: any;
  code: number;
  message: string;
  data: T;

}


