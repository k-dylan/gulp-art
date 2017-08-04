/*
 * artTemplate plugin for gulp
 * @Author: kdylan
 * @Date: 2017-08-04 09:31:23
 * @Last Modified by: kdylan
 * @Last Modified time: 2017-08-04 10:36:52
 */
'use strict';

var template = require('art-template');
var through2 = require('through2');
var ext = require('gulp-util').replaceExtension;
var PluginError = require('gulp-util').PluginError;

module.exports = function (options) {
    options = options || {};

    return through2.obj(function (file, enc, cb) {
        if(file.isNull()) return cb(null, file);

        if(file.isStream()) return cb(new PluginError('gulp-art-template', 'Streaming not supported'));

        var data = options.data || {};
        if(typeof data === 'function') {
            data = data(file);
        }
        var tpl = template.render(file.contents.toString(), data);
        
        file.path = ext(file.path, '.html');
        file.contents = new Buffer(tpl);
        cb(null, file);
    })
}