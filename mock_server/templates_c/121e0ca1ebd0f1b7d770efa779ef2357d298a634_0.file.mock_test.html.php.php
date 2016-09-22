<?php /* Smarty version 3.1.26, created on 2016-09-21 02:41:47
         compiled from "/Users/shukushinu/Documents/projects/youzibuy/webroot/views_dev/mock_test.html.php" */ ?>
<?php
/*%%SmartyHeaderCode:35957844857e1f36b7b0357_82900107%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '121e0ca1ebd0f1b7d770efa779ef2357d298a634' => 
    array (
      0 => '/Users/shukushinu/Documents/projects/youzibuy/webroot/views_dev/mock_test.html.php',
      1 => 1474338206,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '35957844857e1f36b7b0357_82900107',
  'variables' => 
  array (
    'news' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.26',
  'unifunc' => 'content_57e1f36b7fdac3_88620961',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_57e1f36b7fdac3_88620961')) {
function content_57e1f36b7fdac3_88620961 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '35957844857e1f36b7b0357_82900107';
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no, email=no">
	<title>测试首页</title>
	<link href="http://img.seeyouyima.com/shenmiao/images/favicon.ico" rel="shortcut icon">
	<link rel="stylesheet" type="text/css" href="/asset/dev/base/vendor1.1.css">
	<link rel="stylesheet" type="text/css" href="/asset/dev/mock_test/index.css">
</head>
<body>
	<?php echo $_smarty_tpl->getSubTemplate ('_loading_new.php', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

	<div id="app"></div>
	<?php echo '<script'; ?>
 type="text/javascript" src="/asset/dev/base/vendor2.0.min.js" keeplive><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript">
		window.dataId = S.add(<?php echo json_encode($_smarty_tpl->tpl_vars['news']->value);?>
);
	<?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="/asset/dev/mock_test/index.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
>
		console.log(S.get(window.dataId));
		$(function(){
			$.ajax({
				url : '/async_mock_test/send_message',
				type :'get',
				dataType:'json',
				success : function(data) {
					console.log(data);
				}
			});
		})
	<?php echo '</script'; ?>
>
</body>
</html>
<?php }
}
?>