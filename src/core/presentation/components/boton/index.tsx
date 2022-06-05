import { View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import React from 'react'

import styles from './index.styles'

interface IBotonProps {
    text: string;
    isLoading?: boolean;
    handlePress(): void;
    color?: string;
}

const Boton: React.FunctionComponent<IBotonProps> = (props: IBotonProps) => {
    return (
        <TouchableWithoutFeedback
            onPress={props.handlePress}
            disabled={props.isLoading}
        >
            <View style={[styles.container, props.color ? {backgroundColor: props.color} : {}]}>
                { props.isLoading && 
                <ActivityIndicator 
                    color='white'
                    size={30}
                />
                }
                { !props.isLoading &&
                <Text style = { styles.text }>
                    {props.text}
                </Text>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default React.memo(Boton)