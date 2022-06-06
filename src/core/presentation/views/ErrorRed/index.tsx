import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'

class ErrorRed extends Component {
    render() {
        return (
            <LinearGradientView style={styles.container}>
                <Icon 
                    name='network-strength-off'
                    size={100}
                    color='#F0F3F4'
                />
                <Text style = { styles.text }>
                    Lo sentimos pero hay problemas de red, verifique su conexión a internet
                </Text>
            </LinearGradientView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    text: {
        color:'#F0F3F4',
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 15,
    }
});

export default ErrorRed