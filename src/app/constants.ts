import { isDevMode } from '../environments/getEnviroment';

export const API_URL = isDevMode ? 'http://localhost:8080/api' : 'https://am-soft.herokuapp.com/api';
