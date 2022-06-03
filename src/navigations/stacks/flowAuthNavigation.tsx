import React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootState } from '@redux/store';

import LoginLoading from '@core/presentation/views/LoginLoading';
import MainBottomTabNavigation from '@navigations/bottomTabs/mainBottomTabNavigation';

const Stack = createStackNavigator();

const FlowAuthNavigation = () => {
    const loginData = useSelector((state: RootState) => state.login.login_data);
    const loginStatus = useSelector((state: RootState) => state.login.status);

    return(
        <NavigationContainer>
            <Stack.Navigator>
                { !loginStatus.finish &&
                    <Stack.Screen 
                        component={ LoginLoading }
                        name = 'FlowAuthNavigation.LoginLoading'
                        options={{
                            headerShown: false,
                        }}
                    />
                }
                { loginStatus.finish && loginStatus.success && loginData.access_token != null &&
                <>
                <Stack.Screen 
                    component = {MainBottomTabNavigation}
                    name = 'FlowAuthNavigation.MainApp'
                    options={{
                        headerShown: false,
                    }}
                />
                </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default FlowAuthNavigation;