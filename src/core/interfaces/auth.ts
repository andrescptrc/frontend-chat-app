export type TLoginForm = {
  email: string;
  password: string;
};

export interface ILoginResponse {
  data: TLogin;
}

export type TLogin = {
  token: string;
};
