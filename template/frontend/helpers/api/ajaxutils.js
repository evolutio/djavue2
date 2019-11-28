import axios from '~/plugins/axios'

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

export function get (url, params) {
  return axios.get(url, {params})
}

export function post (url, params) {
  const fd = new FormData()
  params = params || {}
  Object.keys(params).map((k) => {
    fd.append(k, params[k])
  })
  return axios.post(url, fd)
}
