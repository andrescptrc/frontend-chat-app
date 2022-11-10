import { ILoginResponse, TLoginForm } from '@interfaces/auth';

import HttpService from './http-request';

class AuthService extends HttpService {
  async login(data: TLoginForm) {
    this.configRequest('/api/auth/login');

    return (await this.post<ILoginResponse>(data)).data;
  }
}

export default new AuthService();
