import React from 'react';
import { AnimatedTabBarNavigator, DotSize } from "react-native-animated-nav-tab-bar";
import FIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';

import Home from '@core/presentation/views/Home';
import Perfil from '@core/presentation/views/Perfil';
import Buscar from '@core/presentation/views/Buscar';
import Biblioteca from '@core/presentation/views/Biblioteca';

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
                activeColors: COLORS.GREEN_DEEP_DARK,
                activeTabBackgrounds: ['#87EAC6', '#87EAC6', '#87EAC6', '#87EAC6'],
                tabBarBackground: '#FFFFFF',
                horizontalPadding: 5,
            }}
            tabBarOptions={{
                activeTintColor: "#FFFFF",
                inactiveTintColor: "gray",
                showLabel: false,
                keyboardHidesTabBar: false,
                style: {
                    position: 'absolute',
                },
            }}
        >
            <Tab.Screen
                component={Home}
                name='MainBottomTabNavigation.Home'
                options = {{
                    tabBarLabel: 'Descubre',
					tabBarIcon: ({ color, size, focused })=>(
                        <FIcon name='square' size={20} color={color}   />
                    )
				}}
            />
            <Tab.Screen
                component={Buscar}
                name='MainBottomTabNavigation.Buscar'
                options = {{
					tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color, size, focused })=>(
                        <FIcon name='search' size={20} color={color}   />
                    )
				}}
            />
            <Tab.Screen
                component={Biblioteca}
                name='MainBottomTabNavigation.Biblioteca'
                options = {{
					tabBarLabel: 'Biblioteca',
                    tabBarIcon: ({ color, size, focused })=>(
                        <EIcon name='folder-music' size={20} color={color}   />
                    )
				}}
            />
            <Tab.Screen
                component={Perfil}
                name='MainBottomTabNavigation.Perfil'
                options = {{
					tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size, focused })=>(
                        <FIcon name='user' size={20} color={color}   />
                    )
				}}
            />
        </Tab.Navigator>
    );
}

export default MainBottomTabNavigation;