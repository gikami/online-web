import axios from "axios";
import { resetAuthlocalStorage, setAuthlocalStorage, getAuthlocalStorage, setRefreshToken } from "./storageAuth";

export const URL_SITE = 'https://vonline.su';
export const URL = 'https://api.vonline.su';
export const URL_SOCKET = URL + '/socket/';
export const API_URL = URL + '/api/';

export async function getInstance(data = '') {

      const instance = axios.create({
            baseURL: API_URL,
            timeout: 10000,
            withCredentials: true,
            headers: {
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                  "User-Agent": "online",
                  "User-Fingerprint": '4214124',
            }
      });
      instance.interceptors.request.use(
            async config => {
                  if (data == 'user') {
                        let auth = await getAuthlocalStorage();
                        if (auth && auth.token) {
                              config.headers['Authorization'] = 'Bearer ' + auth.token;
                        }
                  }
                  return config;
            },
            error => {
                  Promise.reject(error.response)
            });

      instance.interceptors.response.use((config) => {
            return config
      }, async function (error) {
            if (data == 'user' && error.response) {
                  var originalRequest = error.config;
                  let auth = await getAuthlocalStorage();
                  if (auth.user && auth.token && error.response.data.code === 'TOKEN_EXPIRED' && !originalRequest._retry) {
                        originalRequest._retry = true;
                        const token = await instance.post('auth/refreshToken/' + auth.user.id)
                              .then(async (response) => {
                                    if (response.data.body) {
                                          return response.data.body;
                                    }
                              }).catch(async (error) => {
                                    await resetAuthlocalStorage();
                                    return Promise.reject(error);
                              });
                        if (token) {
                              await setRefreshToken(token);
                              axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                              return instance(originalRequest);
                        }
                  }
            }
            return Promise.reject(error);
      });
      return instance
}