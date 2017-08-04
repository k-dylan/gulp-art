/*
 * 测试模块
 * @Author: kdylan
 * @Date: 2017-08-04 09:58:56
 * @Last Modified by: kdylan
 * @Last Modified time: 2017-08-04 10:29:29
 */

var gulp = require('gulp');
var should = require('should');
var through2 = require('through2');

var template = require('./');


gulp.task('default', function () {
    gulp.src('test/index.art')        
        .pipe(template({
            data: {
                title: '首页',
                name: 'gulp-art'
            }
        }))
        .pipe(through2.obj(function (file, a, cb) {
            console.log(file.contents.toString())
            cb(null, file)
        }))
        .pipe(gulp.dest('dist'))
})
        
            


