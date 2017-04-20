/**
 * Created by Administrator on 2017/4/20.
 */
'use strict'

var fs = require('fs')
var Promise = require('bluebird')

exports.readFileAsync = function (fpath, encodnig) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, encoding, function (err, content) {
      if (err) {
        reject(err)
      } else {
        resolve(content)
      }
    })
  })
}

exports.witeFileAsync = function (fpath, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFileAsync(fpath, encoding, function (err, content) {
      if (err) {
        reject(err)
      } else {
        resolve(content)
      }
    })
  })
}