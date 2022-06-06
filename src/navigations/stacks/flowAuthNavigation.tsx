import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NetInfo from '@react-native-community/netinfo';

import { RootState } from '@redux/store';
import { setConnected, setDisconnected } from '@redux/slices/netStatusSlice'

import LoginLoading from '@core/presentation/views/LoginLoading';
import MainBottomTabNavigation from '@navigations/bottomTabs/mainBottomTabNavigation';
import ErrorRed from '@core/presentation/views/ErrorRed';

const Stack = createStackNavigator();

const FlowAuthNavigation = () => {
    const loginData = useSelector((state: RootState) => state.login.login_data);
    const loginStatus = useSelector((state: RootState) => state.login.status);
    const netInfo = useSelector((state: RootState)=> state.netStatus);
    const dispatch = useDispatch()

    useEffect(()=>{
        NetInfo.addEventListener((state)=>{
            if(state.isConnected){
                dispatch(setConnected())
            }else{
                dispatch(setDisconnected())
            }
        })
    }, []);

    return(
        <NavigationContainer>
            <Stack.Navigator>
                { netInfo.connected && 
                <>
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
                </>
                }
                <Stack.Screen 
                    component={ ErrorRed }
                    name = 'FlowAuthNavigation.Disconnected'
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default FlowAuthNavigation;