/**
 * Created by Administrator on 2017/4/20.
 */
'use strict'

var sha1 = require('sha1')
var path = require('path')
var Koa = require('koa')
var wechat = require('./wechat/g')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt')
var config = {
  wechat: {
    appId: 'wx28477001a841e073',
    appSecret: 'bc4ca8f26709bde54c82055b8109cfda',
    token: 'xutao66',
    getAccessToken: function () {
      return util.readFileAsync(wechat_file)
    },
    SaveAccessToken: function (data) {
      var data = JSON.stringify(data)

      return util.writeFileAsync(wechat_file, data)
    }
  }
}

var app = new Koa()

app.use(wechat(config.wechat))

app.listen(1234)
console.log('Listening: 1234')
