import Router from '@koa/router';
import {IContext, IState} from '../../Interface';
import {JSONQuerystringParser} from '../../Middleware/JSONQuerystringParser';
import {bodyParser} from '../../Middleware/bodyParser';
import {LOGIN} from './ROUTE';
import {login} from './Middleware';

export const dispatcher = (router: Router<IState, IContext>) =>
{
    router
        .get(LOGIN, JSONQuerystringParser(), login())
        .post(LOGIN, bodyParser(), login());
};