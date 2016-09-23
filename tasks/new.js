/**
 * 根据模板创建页面
 * @version 1.0
 * Created by rainypin on 16/9/22.
 */


var gulp = require('gulp'),
    config =  require('./config.js'),
    util = require('./util.js'),
    yargs = require('yargs');
var argv = yargs.argv,
    type = argv._[0],
    pageName = argv.page;

if(type === 'new') {
    if(!pageName) {
        throw '"gulp new" should be used like this: gulp new --page pageName';
    }
    var fileTree = {},
    name = pageName,
    data = {
        name : pageName,
        url : pageName,
        template : pageName + '.html.php'
    };
    fileTree =  {
        'components': {

        },
        'views_dev': {
        },
        'mock_data' : {

        }
    };
    fileTree['components'][name] = {
        'css': {
            'index.css': util.getFileContent(config.liveTplPath + '/indexLiveTpl.css')
        },
        'js': {
            'index.js': util.getFileContent(config.liveTplPath + '/indexLiveTpl.js')
        },
        'img': {}
    };
    fileTree['views_dev'][name + '.html.php'] = util.getFileContent(config.liveTplPath + '/viewsLiveTpl.html').replace(/\$([^\$]*)\$/g,function(all,$1){
        return data[$1];
    });
    fileTree['mock_data'][name+'_mock.js'] = util.getFileContent(config.liveTplPath + '/mockDataLiveTpl.js').replace(/\$([^\$]*)\$/g,function(all,$1){
        return data[$1];
    });
}


gulp.task('new', function() {
    util.createFileTree(fileTree, './');
});
