import axios, { AxiosInstance } from 'axios'
import messages from './i18n'
import { ElMessage } from 'element-plus'
import { Notify } from 'vant'
import { isMobile } from '@conferer/utils'

const i18n: string = localStorage.getItem('locale') || 'en'
console.log(messages[i18n]['404'])

const api: AxiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

//TODO translate msg with i18n
const translateMsg = (data: Record<string, any>) => {
  const msg = messages[i18n][data.code] || data.message
  console.log('current runtime is h5: ', isMobile())
  if (isMobile()) {
    Notify({ type: 'danger', message: msg, position: 'top' })
  } else {
    ElMessage.error(msg)
  }
  return msg
}
api.interceptors.response.use(
  (res) => {
    console.log(19, res.data)

    if (res.data?.status === 'success') {
      return res.data
    }

    translateMsg(res.data)
    return Promise.reject(res)
  },
  (err) => {
    console.log('err', err.response)

    translateMsg(err.response.data)
    return Promise.reject(err.response)
  }
)
export default api
