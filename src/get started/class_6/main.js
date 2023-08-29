"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = require("./greetings");
var greetings_utilities_1 = require("./greetings-utilities");
var dotenv = require("dotenv");
greetings.returnGreeting('greetings');
(0, greetings_utilities_1.returnGreeting)('greetings-utilities');
var result = dotenv.config({
    path: '../../.env'
});
if (result.error) {
    throw result.error;
}
console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
