import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});


export async function get<T>(url: string, params: any = null) {
  const res: Awaited<T> = await instance.get(url, { params })
  return res
}

export async function post(url: string, data?: any) {
  const res = (await instance.post(url, data)) as any
  return res as any
}

export default instance