import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

import styles from './index.styles'


interface IInputTextProps extends TextInputProps{
    label: string;
    hasError?: boolean;
    error?: string;
}

const InputText: React.FunctionComponent<IInputTextProps> = (props: IInputTextProps) => {
    return (
        <View style={styles.container}>
            <Text style = { styles.textLabel }>
                { props.label }
            </Text>
            <View style={styles.textContainer}>
                <TextInput {...props}
                    style = { styles.textInput }
                />
            </View>
            { props.hasError && 
            <Text style = {styles.errorText}>
                { props.error }
            </Text>
            }
        </View>
    )
}

export default InputText