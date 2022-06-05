import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

import styles from './index.styles';

import DEFAULT_IMAGEN from '@constants/defaultImagen'

interface IBannerTituloProps{
    urlImage: string;
    titulo: string;
    subTitulo: string;
}

const BannerTitulo: React.FunctionComponent<IBannerTituloProps> = (props: IBannerTituloProps) => {
    return (
        <View style={ styles.containter }>
            <Image
                source={{ uri: props.urlImage ? props.urlImage : DEFAULT_IMAGEN }}
                resizeMode='cover'
                style={StyleSheet.absoluteFillObject}
            >

            </Image>
            <Text style={ styles.titulo }>
                {props.titulo}
            </Text>
            <Text style={styles.subTitulo}>
                { props.subTitulo }
            </Text>
            <View style={ styles.overlay } />
        </View>
    )
}

export default BannerTitulo