import router from './Router';
import Koa from 'koa';
import signale from 'signale';
import {Response} from '../Class';

export default (app: Koa): Koa.Middleware =>
{
    app
        .use(router.routes())
        .use(router.allowedMethods());

    return async (ctx, next) =>
    {
        try
        {
            await next();
        }
        catch (e)
        {
            ctx.response.body = new Response(false, '服务器错误');
            signale.error(e);
        }
    };
};