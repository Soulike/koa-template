import {router} from './Router';
import compose from 'koa-compose';
import {errorHandler} from './Middleware/errorHandler';
import {responseHandler} from './Middleware/responseHandler';

export const dispatcher = () =>
{
    return compose([
        responseHandler(),
        errorHandler(),
        router.routes(),
        router.allowedMethods(),
    ]);
};

export * from './Interface';