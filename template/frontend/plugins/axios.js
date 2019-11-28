import axios from 'axios'

axios.defaults.headers.common.tabid = (Math.random() * 1e8).toFixed(0)

export default axios.create({
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
  baseURL: process.env.BASE_URL,
  withCredentials: true
})
