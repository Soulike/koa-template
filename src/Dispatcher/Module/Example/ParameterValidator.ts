import {IParameterValidator} from '../../Interface';

export const login: IParameterValidator = body =>
{
    const {} = body;
    return true;
};
