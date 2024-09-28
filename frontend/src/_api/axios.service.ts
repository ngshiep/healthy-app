import axios, { AxiosError, AxiosRequestConfig, isAxiosError, type AxiosInstance } from 'axios'
import queryString from 'query-string'
import configs from 'src/config'
import { urls } from 'src/config/urls'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setRefreshTokenToLS
} from 'src/utils/utilsLocalStorage'

export class AxiosService {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<string> | null
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshTokenFromLS()
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: configs.app.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers':
          'Origin,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'
      },
      paramsSerializer: (params) => queryString.stringify(params)
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (config.headers && config.url !== configs.url.api.authentication.login) {
          config.headers.authorization = 'Bearer ' + (this.accessToken ?? getAccessTokenFromLS())
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(new Error(error))
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === configs.url.api.authentication.login) {
          const data = response.data.data
          this.accessToken = data.accessToken
          this.refreshToken = data.refreshToken
          setAccessTokenToLS(this.accessToken)
          setRefreshTokenToLS(this.refreshToken)
        } else if (url === configs.url.api.authentication.logout) {
          this.accessToken = ''
          this.refreshToken = ''
          clearLS()
        }
        return response
      },
      (error: AxiosError) => {
        if (isAxiosError(error) && error.response?.status === 401) {
          const config = (error.response?.config as AxiosRequestConfig) || {}
          const { url } = config

          if (url !== configs.url.api.authentication.refresh_token) {
            this.refreshTokenRequest = this.refreshTokenRequest
              ? this.refreshTokenRequest
              : this.handleRefreshToken().finally(() => {
                  setTimeout(() => {
                    this.refreshTokenRequest = null
                  }, 10000)
                })
            return this.refreshTokenRequest.then((access_token) => {
              return this.instance({ ...config, headers: { ...config.headers, authorization: access_token } })
            })
          }
        }
        return Promise.reject(error)
      }
    )
  }
  // Cấu hình lại phần này.
  private handleRefreshToken() {
    return this.instance
      .request({
        method: 'POST',
        url: urls.api.authentication.refresh_token,
        data: {
          token: this.refreshToken
        }
      })
      .then((res) => {
        const { accessToken, refreshToken } = res.data.data
        setAccessTokenToLS(accessToken)
        setRefreshTokenToLS(refreshToken)
        this.accessToken = accessToken
        this.refreshToken = refreshToken
        return accessToken
      })
      .catch((error) => {
        history.replaceState({}, '', urls.web.authentication.login)
        window.location.reload()
        clearLS()
        this.accessToken = ''
        this.refreshToken = ''
        throw error
      })
  }
}
const axiosService = new AxiosService().instance
export default axiosService
