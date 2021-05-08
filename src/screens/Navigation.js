
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import React from 'react';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createStackNavigator();

const headerOption = {
    headerShown: false
};
export default function Navigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name=" " 
                component={SignInScreen} 
                options={headerOption}
            />
            <Stack.Screen 
                name="SignUpScreen" 
                component={SignUpScreen} 
                options={{title: "회원 가입",
            }}
            />
            <Stack.Screen 
                name="ForgetPasswordScreen" 
                component={ForgetPasswordScreen} 
                options={{title: "비밀번호 찾기",
            }}
            />
        </Stack.Navigator>
    );
}
