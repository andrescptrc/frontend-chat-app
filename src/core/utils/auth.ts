import jsCookie from 'js-cookie';

import { TOKEN_NAME } from '@constants/auth';

export const login = (token: string) =>
  jsCookie.set(TOKEN_NAME, token, {
    sameSite: 'Lax',
    secure: true
  });

export const getToken = () => jsCookie.get(TOKEN_NAME);
