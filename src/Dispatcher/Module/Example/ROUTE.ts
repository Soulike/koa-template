import {prefix} from '../../Function';

function examplePrefix(url: string): string
{
    return prefix(`/example${url}`);
}

export const LOGIN = examplePrefix('/login');
