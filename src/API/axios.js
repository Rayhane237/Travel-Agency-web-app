import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_HOST,
  withCredentials: true, // sends the httpOnly cookie automatically
});

let accessToken = null;
export const setAccessToken = (token) => { accessToken = token; };
export const getAccessToken = () => accessToken;

api.interceptors.request.use((config) => {
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

let refreshPromise = null;

// Shared, de-duplicated session refresh 
export const trySessionRefresh = () => {
  refreshPromise ??= api.post("/refresh-token").finally(() => { refreshPromise = null; });
  return refreshPromise;
};

// A 401 from one of these endpoints IS the final answer 
const AUTH_ENDPOINTS = ["/refresh-token", "/login"];

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    const isAuthEndpoint = AUTH_ENDPOINTS.some((path) => original?.url?.includes(path));

    if (error.response?.status === 401 && !original._retry && !isAuthEndpoint) {
      original._retry = true;
      try {
        const { data } = await trySessionRefresh();
        setAccessToken(data.accessToken);
        original.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(original);
      } catch {
        setAccessToken(null);
        window.location.href = "/Login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;