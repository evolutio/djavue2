import axios from '~/plugins/axios'

export default (ctx) => {
  if (process.server && !ctx.req.url.startsWith('/api/') && !ctx.req.url.startsWith('/erro')) {
    axios.defaults.headers.common = {}
    Object.keys(ctx.req.headers).map(key => {
      axios.defaults.headers.common[key] = ctx.req.headers[key]
    })
  }
}
