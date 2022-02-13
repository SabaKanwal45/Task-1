import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import Auth from '../../store/modules/auth';

function useAuth() {
    const dispatch = useDispatch();
    const auth = useSelector((store: RootState) => store.auth);

    const fetchAccessTokenByCode = (code: string) => {
        dispatch(Auth.actions.fetchAccessTokenByCode.request(code));
    };

    return {
        auth,
        fetchAccessTokenByCode
    };
}

export default useAuth;
