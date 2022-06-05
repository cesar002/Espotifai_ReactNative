import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import Login from '@core/presentation/views/Login';
import Profile from '@core/presentation/views/Perfil';
import RegistrarUsuarios from '@core/presentation/views/RegistrarUsuario';
import { RootState } from '@redux/store';

const Stack = createStackNavigator();

const PerfilNavigation: React.FunctionComponent = () => {

    const currentUser = useSelector((state: RootState) => state.user.currentUser);

    return(
        <Stack.Navigator>
            {
            !currentUser &&
            <>
            <Stack.Screen 
                component={ Login }
                name='PerfilNavigation.Login'
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={ RegistrarUsuarios }
                name='PerfilNavigation.Registrar'
                options={{
                    headerShown: false,
                }}
            />
            </>
            }
            {
            currentUser &&
            <Stack.Screen 
                component={ Profile }
                name='PerfilNavigation.Perfil'
                options={{
                    headerShown: false,
                }}
            />
            }

        </Stack.Navigator>
    )
}

export default PerfilNavigation