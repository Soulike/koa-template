import {IRouteHandler} from '../../Interface';
import {ResponseBody, ServiceResponse} from '../../../Class';

export const login: IRouteHandler = () =>
{
    return async (ctx) =>
    {
        ctx.state.serviceResponse = new ServiceResponse(200, {}, new ResponseBody(true, '成功', {hello: 'world'}));
    };
};
