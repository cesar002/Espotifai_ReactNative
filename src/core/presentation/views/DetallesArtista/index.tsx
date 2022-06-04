import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from './index.styles'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'

class DetallesArtista extends Component {
    render() {
        return (
        <LinearGradientView>
            <ScrollView 
                style = { styles.container }
            >
                
            </ScrollView>
        </LinearGradientView>
        )
    }
}

export default DetallesArtista