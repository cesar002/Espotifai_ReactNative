import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '@core/presentation/views/Login';
import Profile from '@core/presentation/views/Perfil';
import RegistrarUsuarios from '@core/presentation/views/RegistrarUsuario';

const Stack = createStackNavigator();

const PerfilNavigation: React.FunctionComponent = () => {
    return(
        <Stack.Navigator>
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
            <Stack.Screen 
                component={ Profile }
                name='PerfilNavigation.Perfil'
            />
        </Stack.Navigator>
    )
}

export default PerfilNavigation