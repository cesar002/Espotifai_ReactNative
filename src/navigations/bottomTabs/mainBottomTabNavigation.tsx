import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimatedTabBarNavigator, DotSize } from "react-native-animated-nav-tab-bar";
import { BottomTabs, } from 'rn-animated-tabbar';
import FIcon from 'react-native-vector-icons/FontAwesome';

import Home from '@core/presentation/views/Home';
import Profile from '@core/presentation/views/Profile';
import Search from '@core/presentation/views/Search';


//const Tab = createBottomTabNavigator();
const Tab = AnimatedTabBarNavigator();

const MainBottomTabNavigation: React.FunctionComponent = () => {
    return (
        /*         <BottomTab.Navigator 
                    tabBar={() => {
                        <BottomTabs 
                            tabsData={}
                            tabBarBackground=''
                            textColor=''
                            activeTabBackground=''
                            navigationHandler={(screen: string)=>{
        
                            }}
                        />
                    }}
                > */
        <Tab.Navigator
            appearance={{
                floating: true,
                shadow: true,
                dotSize: DotSize.SMALL,
                dotCornerRadius:100,
                activeColors: 'white',
                activeTabBackgrounds: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
                tabBarBackground: 'black'
            }}
            tabBarOptions={{
                activeTintColor: "#FFFFF",
                inactiveTintColor: "red",
                showLabel: false,
            }}
        >
            <Tab.Screen
                component={Home}
                name='MainBottomTabNavigation.Home'
                options = {{
                    tabBarLabel: '',
					tabBarIcon: ({ color, size })=>(
                        <FIcon name='home' style = {{ width: (size + 10), height: (size + 10) }} />
                    )
				}}
            />
            <Tab.Screen
                component={Search}
                name='MainBottomTabNavigation.Search'
                options = {{
					tabBarLabel: 'Search',
				}}
            />
            <Tab.Screen
                component={Profile}
                name='MainBottomTabNavigation.Profile'
                options = {{
					tabBarLabel: 'Profile',
				}}
            />
        </Tab.Navigator>
    );
}

export default MainBottomTabNavigation;