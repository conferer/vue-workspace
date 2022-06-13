import axios from "axios";
import messages from "./i18n";
console.log(messages, messages["en"].button.go);

const api = axios.create({});

const translateMsg = (msg) => {
  messages[en];
};
api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log("err", err.response);
  }
);
export default api;
