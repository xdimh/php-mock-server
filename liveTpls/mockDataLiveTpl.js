/**
 * 本地自测mock数据对象模板
 * @version 1.0
 * Created by rainypin on 16/9/22.
 */


module.exports = {
    view : {
        title: "$name$页面",
        type: 'get',
        url: '/$url$',
        template: "$template$",
        data: {
            data: {}
        }
    },
    ajax : [
        {
            title: '提交留言',
            type: 'get',
            url: '/async_$name$/send_message',
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