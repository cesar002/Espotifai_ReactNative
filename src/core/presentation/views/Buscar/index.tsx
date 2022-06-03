import { Text, View } from 'react-native'
import React, { Component } from 'react'

import styles from './index.styles';

import LinearGradientView from '@core/presentation/layouts/LinearGradientView';
import TextInput from '@core/presentation/components/InputText';

export class Search extends Component {
    render() {
        return (
            <LinearGradientView>
                <View style = { styles.busqueda }>
                    <TextInput />
                </View>
                <View style = { styles.listaResultados }>

                </View>
            </LinearGradientView>
        )
    }
}

export default Search