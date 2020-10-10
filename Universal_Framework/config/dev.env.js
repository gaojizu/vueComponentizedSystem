'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  url_api: '"https://clearlove/dev:8080"' //测试环境的地址
})
