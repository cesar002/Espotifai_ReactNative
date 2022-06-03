import { Text, View } from 'react-native'
import React, { Component } from 'react'

import styles from './index.styles';

import LinearGradientView from '@core/presentation/layouts/LinearGradientView';
import SearchText from '@core/presentation/components/SearchText';

export class Search extends Component {
    render() {
        return (
            <LinearGradientView>
                <View style = { styles.busqueda }>
                    <SearchText 
                        cancelHandle={()=>{}}
                        searchHandle={text=>{}}
                    />
                </View>
                <View style = { styles.listaResultados }>
                    
                </View>
            </LinearGradientView>
        )
    }
}

export default Search