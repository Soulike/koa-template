import {IRouteHandler} from '../../Interface';

export const login: IRouteHandler = () =>
{
    return async (_ctx, next) =>
    {
        await next();
    };
};
