import axios, { AxiosInstance } from 'axios'
import messages from './i18n'

const i18n: string = localStorage.getItem('locale') || 'en'
console.log(messages[i18n].select.loading)

const api: AxiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

//TODO translate msg with i18n
const translateMsg = (msg: string) => {
  messages[i18n][msg]
}
api.interceptors.response.use(
  (res) => {
    // TODO if res.data.code != 200, reject error
    // return Promise.reject(res)
    return res
  },
  (err) => {
    translateMsg(err.response.data)
    console.log('err', err.response)
    return Promise.reject(err.response)
  }
)
export default api
