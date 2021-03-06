import Koa from 'koa';
import {dispatcher} from './Dispatcher';
import {SERVER, SESSION} from './CONFIG';
import session from 'koa-session';

const app = new Koa();

app.on('error', (e: Error) =>
{
    SERVER.ERROR_LOGGER(`未捕获的错误:\n${e.stack}`);
});
app.use(session({...SESSION}, app));
app.use(dispatcher());
app.listen(SERVER.PORT, () =>
{
    SERVER.INFO_LOGGER(`服务器运行在端口 ${SERVER.PORT} (PID: ${process.pid})`);
});