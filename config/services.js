'use strict'

const Env = use('Env')

module.exports = {
  ally: {
    facebook: {
      clientId: Env.get('FB_CLIENT_ID'),
      clientSecret: Env.get('FB_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/authenticated/facebook`
    },
    google: {
      clientId: Env.get('GOOGLE_CLIENT_ID'),
      clientSecret: Env.get('GOOGLE_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/authenticated/google`
    }
  }
}
