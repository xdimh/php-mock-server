<?php /* Smarty version 3.1.26, created on 2016-09-21 02:41:47
         compiled from "/Users/shukushinu/Documents/projects/youzibuy/webroot/views_dev/_loading_new.php" */ ?>
<?php
/*%%SmartyHeaderCode:148397550957e1f36b806d26_37041188%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b5318c1754b3620f8468d704146a74c06e6a5ae7' => 
    array (
      0 => '/Users/shukushinu/Documents/projects/youzibuy/webroot/views_dev/_loading_new.php',
      1 => 1473313983,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '148397550957e1f36b806d26_37041188',
  'has_nocache_code' => false,
  'version' => '3.1.26',
  'unifunc' => 'content_57e1f36b80b8e5_26851340',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_57e1f36b80b8e5_26851340')) {
function content_57e1f36b80b8e5_26851340 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '148397550957e1f36b806d26_37041188';
?>
<style type="text/css">
.tae-loading {
  position: fixed;
  z-index: 1000;
  left:0;
  right: 0;
  top:0;
  bottom: 0;
  background: url('http://static.seeyouyima.com/h5.m.meiyou.com/public/img/loading_1.png') no-repeat #fff 50% 50%;
  background-size: 68px 108px;
}
.tae-loading1{

  background-image: url('http://static.seeyouyima.com/h5.m.meiyou.com/public/img/loading_0.png');
}

</style>
<div class="tae-loading" id="_prepage_toast" >
</div>
<?php echo '<script'; ?>
 type="text/javascript">
  (function() {
    var loading = document.getElementById('_prepage_toast'),type = 1;
    var polling = setInterval(function(){
      if(loading.style.display == "none" ){
        clearInterval(polling);
        return;
      }
      if(type == 1){
        type = 2;
        loading.className += " tae-loading1";
      }else{
        type = 1;
        loading.className = " tae-loading";
      }
    },350)
       
  })();
<?php echo '</script'; ?>
>
<?php }
}
?>