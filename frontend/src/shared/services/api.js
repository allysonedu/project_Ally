import axios from 'axios';
import { environment } from '../environmets';

export const api = axios.create({
  baseURL: environment.API_URL,
});
