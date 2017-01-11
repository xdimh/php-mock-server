<?php
/*
    PHP 接受 FMS 的 POST 请求使用 Smarty 渲染页面
*/
date_default_timezone_set("Asia/Shanghai");
// __object_array 将 POST请求转换为 PHP对象
function __object_array($e){
    $e=(array)$e;
    foreach($e as $k=>$v){
        if( gettype($v)=='resource' ) return;
        if( gettype($v)=='object' || gettype($v)=='array' )
            $e[$k]=(array)__object_array($v);
    }
    return $e;
}
$__settings = __object_array(json_decode($_POST['_fms'], true));

/*
    template            "news.php"
    templateDir         "/Users/nimojs/Documents/git/fms-demo/view/"
    templatePath        "/Users/nimojs/Documents/git/fms-demo/view/news.php"
    templatePluginDir   "/Users/nimojs/Documents/git/fms-demo/view/plugin/"
    data                "{"title":"论数据约定在前后端配合中的重要性"}"
*/

include '../../my/func/func.inc.php';

// smarty 初始化
require('libs/Smarty.class.php');
$_smarty = new Smarty();


// smarty bug 最高提示级别
error_reporting(E_ALL);
//error_reporting(0);
// 设置模板目录
$_smarty->setTemplateDir($__settings['templateDir']);

$_smarty -> setLeftDelimiter('{%');
$_smarty -> setRightDelimiter('%}');

// 渲染数据
//print_r($__settings['data']);die;
foreach ($__settings['data'] as $key => $value) {
$_smarty->assign($key, json_decode(json_encode($value)));
}
// 渲染页面
$_smarty->display($__settings['templatePath']);
