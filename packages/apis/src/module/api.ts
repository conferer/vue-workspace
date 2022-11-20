import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import messages from './i18n'
import { ElMessage } from 'element-plus'
import { Notify } from 'vant'
import { isMobile } from '@conferer/util'

const i18n: string = localStorage.getItem('locale') || 'en'

export interface HttpResponse<T = unknown> {
  data: T
  code: string
  status: string
  message?: string
}

const api: AxiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

api.interceptors.request.use((req: AxiosRequestConfig) => {
  //TODO Authorization should be processed here
  return req
})

//translate msg with i18n
const notifyI18nMsg = (data: Record<string, any>): void => {
  const msg: string = messages[i18n][data.message] || data.code
  console.log('current runtime is h5: ', isMobile())
  if (isMobile()) {
    Notify({ type: 'danger', message: msg, position: 'top' })
  } else {
    ElMessage.error(msg)
  }
}
api.interceptors.response.use(
  (res: AxiosResponse<HttpResponse>) => {
    if (res.data?.status === 'success') {
      return res.data
    }

    notifyI18nMsg(res.data)
    return Promise.reject(res)
  },
  (err: any) => {
    notifyI18nMsg(err.response.data)
    return Promise.reject(err.response)
  }
)
export default api
