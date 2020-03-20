import Router from '@koa/router';
import exampleDispatcher from './Module/Example';
import {IContext, IState} from './Interface';

const router = new Router<IState, IContext>();

// 在此注入 router 到各个 dispatcher
exampleDispatcher(router);

export default router;