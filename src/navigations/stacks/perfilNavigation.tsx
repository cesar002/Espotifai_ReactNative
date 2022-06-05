import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '@core/presentation/views/Login';
import Profile from '@core/presentation/views/Perfil';

const Stack = createStackNavigator();

const PerfilNavigation: React.FunctionComponent = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                component={ Login }
                name='PerfilNavigation.Login'
            />
            <Stack.Screen 
                component={ Profile }
                name='PerfilNavigation.Perfil'
            />
        </Stack.Navigator>
    )
}

export default PerfilNavigation