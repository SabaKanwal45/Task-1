import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { LoginScreen, AuthScreen, PostScreen } from '../screens'
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef()
const Stack = createStackNavigator();
const AppNavigator = () => {
    const linking: any = {
        config: {
            screens: {
                Auth: "auth/:code?",
                Login: "login",
                Post: "post",
            }
        },
    };
    const { auth } = useAuth();
    let isSignedIn = false;
    let redirectToLogin = false;
    if (auth && auth.auth && auth.auth.access_token) {
        isSignedIn = true;
    } else {
        isSignedIn = false;
        if (global.window && global.window.location && global.window.location.pathname.indexOf('login') === -1 && global.window.location.pathname.indexOf('auth') === -1) {
            redirectToLogin = true;
        } else {
        }
    }
    return (<SafeAreaProvider>
        <NavigationContainer linking={linking}>{
        }
            <Stack.Navigator screenOptions={({ route, navigation }) => ({
            })}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Auth' component={AuthScreen} />
                <Stack.Screen name='Post' component={PostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    )
}

export default AppNavigator;
