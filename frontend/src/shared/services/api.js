import axios from 'axios';
import { environment } from '../environmets';
import { requestInterceptor } from './interceptors/resquestInterceptor';

const api = axios.create({
  baseURL: environment.API_URL,
});

api.interceptors.request.use(request => requestInterceptor(request));

export { api };
