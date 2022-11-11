export interface GenericResponse {
  response: 'ok' | 'fail';
  data: unknown;
  errors: string[];
}
