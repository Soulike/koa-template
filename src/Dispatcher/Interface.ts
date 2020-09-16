import Router from '@koa/router';
import {Session} from 'koa-session';

export interface IState
{
    serviceResponse: Readonly<any>
}

export interface IContext
{
    session: Session & ISession;
}

export interface ISession
{

}

export interface IRouteHandler<T extends any[] = void[]>
{
    (...args: T): Router.Middleware<IState, IContext>
}