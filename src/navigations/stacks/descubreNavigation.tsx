import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Buscar from "@core/presentation/views/Buscar";
import DetallesArtista from "@core/presentation/views/DetallesArtista";
import DetalleAlbum from "@core/presentation/views/DetalleAlbum";
import DetallesTrack from "@core/presentation/views/DetalleTrack";

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
            <Stack.Screen 
                component={ DetalleAlbum }
                name = 'DescubreNavigation.DetalleAlbum'
                options={{
                    title: '',
                    headerTransparent: true
                }}
            />
            <Stack.Screen 
                component={ DetallesTrack }
                name = 'DescubreNavigation.DetallesTrack'
                options={{
                    title: '',
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    );
}

export default DescubreNavigation;