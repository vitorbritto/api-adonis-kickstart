'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {
  connection: Env.get('DB_CONNECTION', 'pg'),
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', '127.0.0.1'),
      port: Env.get('DB_PORT', '5432'),
      user: Env.get('DB_USER', 'vitorbritto'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'tictac')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
