import React from 'react';
import { AnimatedTabBarNavigator, DotSize } from "react-native-animated-nav-tab-bar";
import FIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';

import Perfil from '@navigations/stacks/perfilNavigation';
import Buscar from '@navigations/stacks/descubreNavigation';
import Favoritos from '@core/presentation/views/Favoritos';

import COLORS from '@constants/colors';


//const Tab = createBottomTabNavigator();
const Tab = AnimatedTabBarNavigator();

const MainBottomTabNavigation: React.FunctionComponent = () => {
    return (
        <Tab.Navigator
            appearance={{
                floating: true,
                shadow: true,
                dotSize: DotSize.SMALL,
                dotCornerRadius:100,
                activeColors: '#F4F6F7',
                activeTabBackgrounds: ['#5DADE2', '#5DADE2', '#5DADE2', '#5DADE2'],
                tabBarBackground: 'white',
                horizontalPadding: 5,
            }}
            tabBarOptions={{
                activeTintColor: "#1C2833",
                inactiveTintColor: "gray",
                showLabel: false,
                tabStyle: {
                    marginBottom: 15
                }
            }}
        >
            <Tab.Screen
                component={Buscar}
                name='MainBottomTabNavigation.Descubre'
                options = {{
					tabBarLabel: 'Descubre',
                    tabBarIcon: ({ color, size, focused })=>(
                        <FIcon name='search' size={20} color={ color }   />
                    )
				}}
            />
            <Tab.Screen
                component={Favoritos}
                name='MainBottomTabNavigation.Favoritos'
                options = {{
					tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused })=>(
                        <EIcon name='folder-music' size={20} color={ color }   />
                    )
				}}
            />
            <Tab.Screen
                component={Perfil}
                name='MainBottomTabNavigation.Perfil'
                options = {{
					tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size, focused })=>(
                        <FIcon name='user' size={20} color={ color }   />
                    )
				}}
            />
        </Tab.Navigator>
    );
}

export default MainBottomTabNavigation;