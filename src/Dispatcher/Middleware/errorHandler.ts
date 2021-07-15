import {SERVER} from '../../CONFIG';
import {IRouteHandler} from '../Interface';
import {ServiceResponse} from '../../Class';

export const errorHandler: IRouteHandler = () =>
{
    return async (ctx, next) =>
    {
        try
        {
            await next();
        }
        catch (e)
        {
            if (e instanceof ServiceResponse)
            {
                ctx.state.serviceResponse = e;
            }
            else
            {
                ctx.response.status = 500;
                SERVER.ERROR_LOGGER(e);
            }
        }
    };
};