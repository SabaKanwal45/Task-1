import { createAsyncAction, createActionEntity, createCustomReducer } from '../../lib';
import { IError } from 'apis/modules/auth';

export interface IAuth {
    access_token: string;
    user_id: string;
    is_logged_in: boolean
}

export interface AuthState {
    auth: IAuth | null;
    message: string;
}

const FETCH_ACCESS_TOKEN_FROM_CODE = createAsyncAction('auth/FETCH_ACCESS_TOKEN_FROM_CODE');
export const fetchAccessTokenByCode = createActionEntity<string, IAuth, IError>(FETCH_ACCESS_TOKEN_FROM_CODE);

const actions = { fetchAccessTokenByCode };
const state: AuthState = {
    auth: null,
    message: '',
};

const reducer = createCustomReducer(state, actions)
.handleAction(fetchAccessTokenByCode.success, (state, action) => {
    return { ...state, auth: action.payload };
})
.handleAction(fetchAccessTokenByCode.failure, (state, action) => {
    console.log("inside state changed due to error message")
    console.log(action.payload);
    return { ...state, message: action.payload.message };
});

export default reducer;
