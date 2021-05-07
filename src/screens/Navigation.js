
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import React from 'react';
import ForgetPasswordScreen from './ForgetPasswordScreen';

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
                name="ForgetPasswordScreen" 
                component={ForgetPasswordScreen} 
                options={{title: "비밀번호 찾기",
            }}
            />
        </Stack.Navigator>
    );
}
