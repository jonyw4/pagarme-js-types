import { Options } from './Options';

export interface Authentication {
  api_key?: string;
  encryption_key?: string;
  email?: string;
  password?: string;
  options?: Options
}
