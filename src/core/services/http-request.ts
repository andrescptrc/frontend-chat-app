import axios from 'axios';
import jsCookie from 'js-cookie';

import { catchError } from '@libs/axios.lib';
import { TOKEN_NAME } from '@constants/auth';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class HttpService {
  constructor(
    private endpoint = '/',
    private headers: Record<string, string> = {
      'Content-Type': 'application/json'
    }
  ) {}

  protected configRequest(endpoint = '/') {
    this.endpoint = endpoint;
  }

  protected getPath() {
    return `${BASE_URL}${this.endpoint}`;
  }

  protected useToken(jwt?: string) {
    const token = jwt || jsCookie.get(TOKEN_NAME);
    this.headers = {
      ...this.headers,
      ...(token && {
        Authorization: token
      })
    };
  }

  protected async get<R>(): Promise<R> {
    return axios
      .get(this.getPath(), { headers: this.headers })
      .then(res => res.data)
      .catch(catchError);
  }

  protected async post<R>(data: unknown): Promise<R> {
    return axios
      .post(this.getPath(), data, { headers: this.headers })
      .then(res => res.data)
      .catch(catchError);
  }

  protected async put<R>(data: unknown): Promise<R> {
    return axios
      .put(this.getPath(), data, { headers: this.headers })
      .then(res => res.data)
      .catch(catchError);
  }

  protected async delete<R>(id: string | number): Promise<R> {
    return axios
      .delete(this.getPath() + id, { headers: this.headers })
      .then(res => res.data)
      .catch(catchError);
  }
}

export default HttpService;
