import axios from 'axios'
import messages from './i18n'

const i18n: string = localStorage.getItem('locale') || 'en'
console.log(messages[i18n].select.loading)

const api = axios.create({})

const translateMsg = (msg: string) => {
  messages[i18n][msg]
}
api.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    console.log('err', err.response)
  }
)
export default api
