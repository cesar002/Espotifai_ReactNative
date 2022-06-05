import React from 'react';
import { AnimatedTabBarNavigator, DotSize } from "react-native-animated-nav-tab-bar";
import FIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';

import Perfil from '@core/presentation/views/Perfil';
import Buscar from '@navigations/stacks/descubreNavigation';
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
                activeColors: '#154360',
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
                component={Biblioteca}
                name='MainBottomTabNavigation.Biblioteca'
                options = {{
					tabBarLabel: 'Biblioteca',
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