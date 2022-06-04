import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Buscar from "@core/presentation/views/Buscar";
import DetallesArtista from "@core/presentation/views/DetallesArtista";

const Stack = createStackNavigator();

const DescubreNavigation: React.FunctionComponent = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen 
                component={ Buscar }
                name = 'DescubreNavigation.Buscar'
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={ DetallesArtista }
                name = 'DescubreNavigation.DetallesArtista'
                options={{
                    title: '',
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    );
}

export default DescubreNavigation;