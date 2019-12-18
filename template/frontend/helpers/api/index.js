import {get, post} from './ajaxutils'

export default {
  login (username, password) {
    return post('/api/login', {username, password}).then(response => response.data)
  },
  logout () {
    return post('/api/logout').then(response => response.data)
  },
  whoami () {
    return get('/api/whoami').then(response => response.data)
  },
  settings () {
    return get('/api/settings').then(response => response.data)
  },
  list_todos () {
    return get('/api/list_todos').then(response => response.data)
  },
  add_todo (newtask) {
    return post('/api/add_todo', {new_task: newtask}).then(response => response.data)
  }
}
