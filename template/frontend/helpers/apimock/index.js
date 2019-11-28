import { zuck } from './db_people'
import { todos } from './db_todos'
import { mockasync } from './mockutils'

const keepLoggedIn = true

export default {
  login (username, password) {
    return mockasync(zuck).then(response => response.data)
  },
  logout () {
    return mockasync({}).then(response => response.data)
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam).then(response => response.data)
  },
  list_todos () {
    return mockasync(todos).then(response => response.data)
  },
  add_todo (newtask) {
    return mockasync({description: newtask, done: false}).then(response => response.data)
  }
}
