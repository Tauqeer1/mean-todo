/*
    babel configuration for using latest code syntax and then
    babel convert latest code to older vesion to run in environmet where latest
    syntax is not supported
*/
require('@babel/register')({
  presets: ['@babel/preset-env']
});
require('@babel/polyfill');

// Import the rest of our application.
module.exports = require('./server');
