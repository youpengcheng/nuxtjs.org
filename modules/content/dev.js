/*
** This script is used in developement mode to test the API only
** Run with: nodemon -r esm dev.js
*/
import { join } from 'path'
import Server from './server'

const server = new Server({
  port: 4000,
  dir: join(__dirname, '../../content'),
  watch: true
})

server.listen()
