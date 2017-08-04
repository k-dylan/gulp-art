/*
 * 测试模块
 * @Author: kdylan
 * @Date: 2017-08-04 09:58:56
 * @Last Modified by: kdylan
 * @Last Modified time: 2017-08-04 10:27:17
 */

var gulp = require('gulp');
var should = require('should');
var through2 = require('through2');

var template = require('../index');

describe('test gulp-art', function () {
    it('compile', function () {
        console.log(__dirname)
        gulp.src(__dirname + '/index.art')
            .pipe(through2.obj(function (file, a, cb) {
                console.log(file.content.toString())
                '123'.should.be.equal('1')
                cb(null, file)
            }))
            .pipe(template({
                data: {
                    title: '首页',
                    name: 'gulp-art'
                }
            }))
            .pipe(through2.obj(function (file, a, cb) {
                console.log(file.content.toString())
                cb(null, file)
            }))
            .pipe(gulp.dest('dist'))
            
    })
})



