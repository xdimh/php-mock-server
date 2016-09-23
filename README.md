## php mock server
简单的php mock server

### 写在前面

1. 为什么要在开发本地mock server ?
> 对于一个前端开发来说，页面的展示内容依赖于后端提供的数据，也就说你是和服务端开发一起来完成一个项目，服务端开发同学是数据的生产者，前端是数据的消费者，理论上只有等服务端开发的同学生产好数据后，前端开发才能够进行他们页面的开发。但往往这种模式效率很低，前端有一段空窗期，所以前端开发同学在这空窗期没有数据的情况下先开发好页面的结构和一些简单的页面样式，等后端开发完成后在将后端提供的数据应用在页面上，而这往往会导致与后端联调出现的问题更多,时间过长，所以为了能够减少一些联调的时间，前端开发同学和后端开发同学会协商出来一套统一的数据格式，就是接口文档，这样前端开发过程中就可以对照着接口文档中的字段，将数据添加进结构页面中。但前端开发同学怎么测试自己的代码逻辑是正确的呢？怎么才能根据交互稿走一遍交互流程呢？毕竟这个时候服务端可能还没有开发完对应的逻辑，还没有准备好要提供给前端的数据，这个时候就需要前端开发同学在本地模拟一个服务端环境，提供按照接口文档定义的数据格式模拟的数据，进行自测。

2. 前端渲染和服务端渲染？
> 在前端开发这个岗位出来之前，服务端开发的同学不仅仅需要完成服务端的逻辑，生成数据，而且还需要编写界面的显示，消费数据，所以他们往往会将数据直接拼接进服务端模板中，像freemaker,smarty 等等服务端模板。但这种方式的界面展示代码往往变得比较混乱，显示结构，逻辑混杂在一起，非常不利于维护。如果后面的有同学维护这样的页面，头疼肯定难免的。服务端的同学也不能很好的把精力放在数据处理上，往往搞得精疲力尽。所以后面衍生出了专门处理界面的开发同学，作为一名前端开发同学，当然希望所有的数据都是通过异步接口获取的，这样我们只需要关系数据，写写自己擅长的html,css,js，而不用去关心服务端的模板,但事情都有两面性，这种模式有其优点也有缺点，优点很明显，结构清晰，前后端分离，我们写的爽，缺点也有，seo，经常需要转菊花，用户体验不是很好，所以我们有些场景下还是需要服务端将数据直接填在模板里，渲染好html返回给浏览器。那么这个模板谁写呢？服务端同学肯定不想写，但是前端开发同学也不想写后端模板，所以有些公司就有了前端写好html，后端拿去翻译成后端模板，但我觉得这种模式效率还是很低的，后端模板写好出现问题还是得找前端去调，还不如前端自己来写模板，后端只关心数据，毕竟后端模板和前端模板差不多，写起来也并不是很难，而且前端熟悉维护起来也更加方便。所以mock server也必须需要渲染服务端模板的能力，这样前端才能在服务端同学完全开发好之前就把前端部分完成，联调时说花费的时间也会变得更短。

### 在本地搭建简单的php mock server

1. 将mock_server,mock_data目录拷贝到你的项目中,mock_server用来解析渲染php模板,mock_data目录中定义了同步和异步的模拟数据。
在mock_data中一个页面对应一个模拟数据js。例如:views_dev目录中的test.html.php页面对应的模拟数据js为test_mock.js。
    ```javascript
/**
 * 本地自测mock数据对象模板
 * @version 1.0
 * Created by rainypin on 16/9/22.
 */

module.exports = {
    view : {
        title: "test页面",
        type: 'get',
        url: '/test',
        template: "test.html.php",
        data: {
            new: {
                test : 'hahha'
            }
        }
    },
    ajax : [
        {
            title: '提交留言',
            type: 'get',
            url: '/async_test/send_message',
            request: {

            },
            res: {
                ok: {

                },
                err: {

                }
            }
        }
    ]
};
```

2. views定义服务端同步渲染数据, ajax定义异步接口请求数据。
   将tasks目录,gulpfile文件,package.json文件拷贝项目相应位置。

   * 安装依赖``npm install``
   * 新建php页面``gulp new --page pageName``

     新建页面的过程中同时会创建对应页面的数据模拟js文件
     同时需要在fws.js文件中引入 如下:

     ```javascript
     viewMock.push(require('./test_mock.js').view);
     ajaxMock = ajaxMock.concat(require('./test_mock.js').ajax);
     ```
   * 启动本地mock服务``gulp mock``


3. 访问 http://127.0.0.1:3004

###自定义Smarty模板的分界符
```php
$_smarty -> setLeftDelimiter('{%');
$_smarty -> setRightDelimiter('%}');
```