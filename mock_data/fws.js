/**
 * 所有的mock数据配置包括同步异步
 * @version 1.0
 * @author zhuzhenyu(zhuzhenyu@xiaoyouzi.com)
 * Created by zhuzhenyu on 16/9/19.
 */

var fms = require('fms'),
    viewMock = [],
    ajaxMock = [];
viewMock.push(require('./test_mock.js').view);
ajaxMock = ajaxMock.concat(require('./test_mock.js').ajax);


fms.run({
    port:3004,
    view: {
        templateDir:"views_dev/",
        server:"http://127.0.0.1:1240",
        filter: function (req, data) {
            data.PAGE_PATH = req.path
        }
    }
});

viewMock.forEach(function(view){
    fms.view(view);
});

ajaxMock.forEach(function(ajax){
    fms.ajax(ajax);
});
