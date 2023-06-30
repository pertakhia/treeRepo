import axios, { Axios, AxiosResponse } from "axios";

export class HttpRequest {
  constructor(
    public url: string,
    public method: string,
    public body: object,
    public headers
  ) {
    this.url = url;
    this.method = method;
    this.body = body;
    this.headers = headers;
  }

  public execute(): Promise<AxiosResponse<any, any>> {
    return axios.request({
      url: this.url,
      method: this.method,
      data: this.body,
      headers: this.headers,
    });
  }
}
