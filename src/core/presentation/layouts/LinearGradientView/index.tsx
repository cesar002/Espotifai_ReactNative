import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

import COLORS from '@constants/colors';

export interface ILinearGradientViewProps {
    style?: ViewStyle
    colors?: string[],
}

const LinearGradientView: React.FunctionComponent <ILinearGradientViewProps> = props => {
    return (
        <LinearGradient colors={ props.colors? props.colors : [ COLORS.GREEN_LIGHT, COLORS.GREEN, COLORS.GREEN_DARK, COLORS.GREEN_DEEP_DARK ]} style={{flex: 1, ...props.style}}>
            { props.children }
        </LinearGradient>
    )
}

export default LinearGradientView