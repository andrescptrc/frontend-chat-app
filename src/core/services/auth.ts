import { GenericResponse } from '@constants/response';
import { ILoginResponse, TLoginForm } from '@interfaces/auth';
import { getToken } from '@utils/auth';

import HttpService from './http-request';

class AuthService extends HttpService {
  async login(data: TLoginForm) {
    this.configRequest('/api/auth/login');

    return (await this.post<ILoginResponse>(data)).data;
  }

  async isAuthenticated() {
    const token = getToken();

    if (token) {
      this.useToken(token);
    }

    this.configRequest('/api/auth/is-authenticated');

    const response = await this.get<Promise<GenericResponse>>();

    if (response.response !== 'ok') return false;
    return true;
  }
}

export default new AuthService();
