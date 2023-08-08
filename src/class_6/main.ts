import * as greetings from './greetings'
import { returnGreeting } from './greetings-utilities'
import * as dotenv from 'dotenv'

greetings.returnGreeting('greetings')
returnGreeting('greetings-utilities')
const result = dotenv.config({
  path: '../../.env'
})
if (result.error) {
  throw result.error
}

console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);