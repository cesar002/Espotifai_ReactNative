import React from 'react';
import { useNavigation } from '@react-navigation/native';

const withNavigation = (Component: any) => {
    return (props: any) => {
        const navigation = useNavigation();

        return <Component navigation={navigation} {...props} />;
    };
};

export default withNavigation;