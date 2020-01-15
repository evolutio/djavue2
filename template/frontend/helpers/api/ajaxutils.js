import axios from '~/plugins/axios'

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

export async function get (url, params) {
  return (await axios.get(url, {params})).data
}

export async function post (url, params) {
  const fd = new FormData()
  params = params || {}
  Object.keys(params).map((k) => {
    fd.append(k, params[k])
  })
  return (await axios.post(url, fd)).data
}
