/**
 * 文件路径等基本配置
 * @version 1.0
 * @author rainypin(rainyin@xiaoyouzi.com)
 * Created by rainypin on 16/9/22.
 */


var path = require('path');

config = {
    viewsPath : path.join(__dirname,'../views_dev'),
    componentPath : path.join(__dirname,'../components'),
    liveTplPath : path.join(__dirname,'../liveTpls'),
    mockDataDir : path.join(__dirname,'../mock_data'),
    mockServerDir : path.join(__dirname,'../mock_server')
};

module.exports = config;