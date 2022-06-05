import { View, Text } from 'react-native'
import React from 'react'
import Spinner from 'react-native-spinkit';

import styles from './index.styles';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Spinner 
                type='9CubeGrid'
                color='#FFFFFF'
                size={60}
            />
        </View>
    )
}

export default LoginScreen