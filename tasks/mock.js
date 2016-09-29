/**
 * 本地mock server gulp 任务
 * @version 1.0
 * Created by rainypin on 16/9/22.
 */

var gulp = require('gulp'),
    path = require('path'),
    nodemon = require('gulp-nodemon'),
    config = require('./config.js'),
    util = require('./util.js'),
    gulpMultiProcess = require('gulp-multi-process');

// exec = require('child_process').exec;
require('shelljs/global');

var phpServerPort = 1240,
    fwsPort = 3005,
    templateDir = 'views_dev',
    isFmsStart = false;


gulp.task('fms.start',function(cb){
    var mockDataDir = config.mockDataDir,
        mockServerDir = config.mockServerDir,
        fwsContent;
    fwsContent = util.getFileContent(mockDataDir + '/fws.js').replace(/server[^,]*/,'server:"http:\/\/127.0.0.1:'+phpServerPort + '"')
        .replace(/port[^,]*/,'port:' + fwsPort)
        .replace(/templateDir[^,]*/,'templateDir:"' + path.relative(path.join(mockServerDir,'../'),templateDir) + '/"');
    util.createFile(mockDataDir + '/fws.js',fwsContent);
    nodemon({
        script : mockDataDir + '/fws.js',
        watch : [mockDataDir]
    }).on('start',function(){
        if(!isFmsStart) {
            cb();
            isFmsStart = true;
        }
    });
});

//为什么要分别在两个不同的进程启动fms 和 phpserver?
//phpserver会阻塞nodemon的后续文件变更实时重新启动fms。
gulp.task('multi',function(cb){
    return gulpMultiProcess(['fms.start', 'phpserver.start'], cb);
});
//启动本地php服务器
//使用stdbuf的原因 php -S 127.0.0.1:' + phpServerPort + ' -t ' + mockServerDir
//启动服务后会挂起,输出到stdout 管道符中的内容会被buffer并不能马上显示出来
//通过stdbuf -oL 使得命令的执行输出能够立马显示
gulp.task('phpserver.start', function(cb){
    var mockServerDir = config.mockServerDir;
    cb();
    exec('stdbuf -oL php -S 127.0.0.1:' + phpServerPort + ' -t ' + mockServerDir);
});

gulp.task('mock',['multi']);

