// import * as BSentry from '@sentry/browser'
import Vue from 'vue'
import VERSION from '~/version'
let ctx = null
let Sentry = null

if (process.server && process.env.ENABLE_SENTRY && process.env.SENTRY_DSN) {
  Sentry = require('@sentry/node')
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: VERSION,
    tags: {
      release: VERSION
    }
  })
}

export default {
  init (_ctx) {
    ctx = _ctx
    const {settings} = ctx.store.state.settings
    // debugger
    Sentry = ctx.app.$sentry
    // Sentry = BSentry
    if (!Sentry) {
      return
    }
    if (settings && settings.SENTRY_DSN_FRONT) {
      Sentry.init({
        dsn: settings.SENTRY_DSN_FRONT,
        integrations: [new Sentry.Integrations.Vue({
          Vue,
          attachProps: true
        })],
        ignoreErrors: [
          'Network Error',
          'timeout of 0ms exceeded'
        ],
        release: VERSION,
        tags: {
          release: VERSION
        }
      })
      this.setUser()
    } else {
      Sentry.init({dsn: ''})
    }
  },
  setUser () {
    Sentry.configureScope(scope => {
      let {currentUser} = ctx.store.state.auth
      if (currentUser) {
        const {id, username, name, email} = currentUser
        currentUser = {id, username, name, email}
      }
      scope.setUser(currentUser)
    })
  },
  captureException (e) {
    Sentry.captureException(e)
  },
  captureEvent ({msg, tags, extra}) {
    const event = {message: msg, level: 'error', tags, extra}
    Sentry.captureEvent(event)
  }
}
