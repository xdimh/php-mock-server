/**
 * 本地自测mock数据对象模板
 * @version 1.0
 * @author rainypin(rainyin@xiaoyouzi.com)
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