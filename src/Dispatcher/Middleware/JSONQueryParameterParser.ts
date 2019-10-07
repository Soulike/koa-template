import Koa from 'koa';
import {Response} from '../../Class';
import 'koa-body';

/**
 * @description koa 中间件，可以将 GET 请求查询字符串中名为 json 的参数内容自动转换为对象放置在 ctx.request.body 中
 * */
export default (): Koa.Middleware =>
{
    return async (ctx, next) =>
    {
        const {json} = ctx.request.query;
        if (typeof json !== 'string')
        {
            ctx.response.status = 400;
            ctx.response.body = new Response(false, '请求参数错误');
            return;
        }

        try
        {
            ctx.request.body = JSON.parse(json);
            await next();
        }
        catch (e)
        {
            if (e instanceof SyntaxError)    // parse 方法报错
            {
                ctx.response.status = 400;
                ctx.response.body = new Response(false, '请求参数错误');
            }
            else
            {
                throw e;
            }
        }
    };
}