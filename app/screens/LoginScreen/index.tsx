import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { INSTAGRAM_APP_ID, INSTAGRAM_AUTH_URL } from '../../constants/global'
import useAuth from '../../hooks/useAuth';

const LoginScreen = ({ navigation }) => {

  const { auth } = useAuth();
  // if already login
  if (auth && auth.auth && auth.auth.access_token) {
    navigation.push('Post');
  } else {
    // if other 
    if (global.window && global.window.document && global.window.document.title !== 'Auth' && global.window.document.title !== 'Login') {
      navigation.push("Login")
    }
  }

  const loginWithInstagram = () => {
    const scopes = ['user_profile', 'user_media'];
    if (global.window) {
      global.window.open(`https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_APP_ID}&redirect_uri=${INSTAGRAM_AUTH_URL}&response_type=code&scope=${scopes.join('+')}`, "_self");
      return;
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.btn}
        onPress={loginWithInstagram}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: 'orange',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LoginScreen;
