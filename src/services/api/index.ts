import axios from "axios"
import Cookies from 'universal-cookie';
import { validateStatus } from "../../ultils/api";
import i18n from "../../ultils/i18n";
import history from "../history";

const REFRESH_TOKEN_URL = '/v1/auth/token/refresh'
const HEADERS_MULTIPLE_PART = {
    'Content-Type': 'multipart/form-data; boundary=something',
}
const cookies = new Cookies()
const BASE_URL = process.env.REACT_APP_HOST + '/api'

export const createInstance = (baseURL: string) => {
    const instance = axios.create({
        baseURL,
        headers: {
            contentType: "application/json",
            accept: "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    })

    // Add a request interceptor
    instance.interceptors.request.use(
        function (config: any) {
            if (
                config.url !== REFRESH_TOKEN_URL &&
                (cookies.get('token') || localStorage.getItem('token'))
            ) {
                const token = localStorage.getItem('token') || cookies.get('token')
                config.headers['Authorization'] = `Bearer ${token}`
                config.headers['x-auth-token'] = `Bearer ${token}`
                config.headers['lang'] = i18n.language
            }
            return config
        },
        function (error) {
            // Các trường hợp lỗi 5xx, 4xx, network xử lý ở đây
            // Do something with request error
            return Promise.reject(error)
        },
    )

    // Add a response interceptor
    //   instance.interceptors.response.use(
    //     async function (response: Response) {
    //       // Any status code that lie within the range of 2xx cause this function to trigger
    //       // Do something with response

    //       if (validateStatus(response.status)) {
    //         return response.data
    //       } else if (response.status === 500) {
    //         addNotification(
    //           i18n.t('general:message.unknownError'),
    //           NOTIFICATION_TYPE.ERROR,
    //         )
    //       } else {
    //         addNotification('unauthorized', NOTIFICATION_TYPE.ERROR)
    //       }
    //     },
    //     function (error) {
    //       // Any status codes that falls outside the range of 2xx cause this function to trigger
    //       // Do something with response error
    //       const response = error.response

    //       if (
    //         response.status === 403 &&
    //         response.config &&
    //         !response.config._isRefreshBefore &&
    //         response.config.url !== REFRESH_TOKEN_URL &&
    //         localStorage.getItem('refreshToken')
    //       ) {
    //         return refreshAccessToken()
    //           .then((refresh) => {
    //             if (refresh.statusCode === 200) {
    //               axios.defaults.headers.common['Authorization'] =
    //                 refresh.data.accessToken.token
    //               //save to cookies
    //               cookies.set(
    //                 'token',
    //                 refresh.data.accessToken.token,
    //                 CONFIG_COOKIES,
    //               )
    //               cookies.set(
    //                 'refreshToken',
    //                 refresh.data.refreshToken.token,
    //                 CONFIG_COOKIES,
    //               )

    //               // save to localStorage
    //               localStorage.setItem('token', refresh.data.accessToken.token)
    //               localStorage.setItem(
    //                 'refreshToken',
    //                 refresh.data.refreshToken.token,
    //               )
    //               response.config._isRefreshBefore = true
    //               return instance(response.config)
    //             } else {
    //               startLogout()
    //             }
    //           })
    //           .catch(() => {
    //             startLogout()
    //           })
    //       } else if (response.status === 401) {
    //         startLogout()
    //       } else {
    //         return Promise.reject(error)
    //       }
    //     },
    //   )
    return instance;
}

export const createApi = (instance: any) => ({
    instance,

    post: (endpoint: string, params: string) => {
        return instance
            .post(endpoint, params, {
                validateStatus: (status: number) => validateStatus(status),
            })
            .then(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
            .catch(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
    },

    postMultiplePart: (endpoint: string, params: string) => {
        return instance
            .post(endpoint, params, {
                headers: HEADERS_MULTIPLE_PART,
                validateStatus: (status: number) => validateStatus(status),
            })
            .then(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
            .catch(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
    },

    get: (endpoint: string, params = {}) => {
        return instance
            .get(endpoint, {
                params: params,
                validateStatus: (status: number) => validateStatus(status),
            })
            .then(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
            .catch(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
    },

    put: (endpoint: string, params: string) => {
        return instance
            .put(endpoint, params, {
                validateStatus: (status: number) => validateStatus(status),
            })
            .then(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
            .catch(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
    },

    patch: (endpoint: string, params: string) => {
        return instance
            .patch(endpoint, params, {
                validateStatus: (status: number) => validateStatus(status),
            })
            .then(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
            .catch(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
    },

    delete: (endpoint: string, params: string) => {
        return instance
            .delete(endpoint, {
                data: params,
                validateStatus: (status: number) => validateStatus(status),
            })
            .then(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
            .catch(
                (response: Response) => {
                    return response
                },
                (err: any) => {
                    return err.response || err
                },
            )
    },
})

const instance = createInstance(BASE_URL)

const startLogout = () => {
    if (history.location.pathname !== '/login') {
        const callbackUrl = history.location.pathname
        //   store.dispatch(logout(callbackUrl))
    }
}

export const refreshAccessToken = () => {
    const refreshToken = localStorage.getItem('refreshToken')
    return instance.get(REFRESH_TOKEN_URL, {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
            'x-auth-token': `Bearer ${refreshToken}`,
        },
    })
}

const api = createApi(instance)

export { api }