import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

import styles from './index.styles';

import COLORS from '@constants/colors';

export interface ILinearGradientViewProps {
    style?: ViewStyle
    colors?: string[],
}

const Degradado = [
    '#90CAF9',
    '#42A5F5',
    '#2196F3',
    '#5C6BC0',
    '#3F51B5',
    '#283593',
    '#1A237E',
]

const LinearGradientView: React.FunctionComponent <ILinearGradientViewProps> = props => {
    return (
        <LinearGradient colors={ props.colors? props.colors : Degradado} 
            style={[styles.container, { ...props.style }]}
        >
            { props.children }
        </LinearGradient>
    )
}

export default LinearGradientView
