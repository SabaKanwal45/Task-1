import React, {useEffect} from 'react';

import { Loader } from '../../components';
import useAuth from '../../hooks/useAuth';


const AuthScreen = ({ navigation, route}) => {
    const { code } = route.params
    const { auth, fetchAccessTokenByCode } = useAuth();

    useEffect(() => {
        fetchAccessTokenByCode(code);
    }, []);

    useEffect(() => {
        if(auth && auth.auth && auth.auth?.access_token){
            navigation.push('Post');
        }
        if(auth && auth.message){
            navigation.push('Login');
        }

    }, [auth]);
    return (<Loader size="large" color="#00ff00"></Loader>)
};


export default AuthScreen;
