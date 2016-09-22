/**
 * 常用方法
 * @version 1.0
 * @author rainypin(rainyin@xiaoyouzi.com)
 * Created by rainypin on 16/9/22.
 */

var fs = require('fs'),
    path = require('path');
var Util = function() {

},
_pro = Util.prototype;

_pro.getFileContent = function(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
};

_pro.createFile = function(filePath,content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
    });
};

_pro.createDir = function(dirPath) {
    try {
        fs.mkdirSync(dirPath);
    } catch (e) {
        if (e.code != 'EEXIST') throw e;
    }
};

_pro.createFileTree = function(treeObj, basePath) {
    var self = this;
    (function fn(tree, basePath) {
        if (typeof tree === 'object') { // folder
            for (var dir in tree) {
                var v = tree[dir],
                    curPath = basePath + dir;
                if (typeof v === 'object') { // folder
                    self.createDir(curPath);
                    if (Object.keys(v).length > 0) { // not empty
                        fn(v, curPath + '/');
                    }
                } else { // file
                    self.createFile(curPath, v);
                }
            }
        } else { // file
            self.createFile(basePath + tree, v);
        }
        return;
    })(treeObj, basePath || './');
};


module.exports = new Util();