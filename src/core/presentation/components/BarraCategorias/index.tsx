import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'

import styles from './index.styles';

export interface ICategoriaItemProps {
    titulo: string;
    onPress(): void;
}

export const CategoriaItem: React.FunctionComponent<ICategoriaItemProps> = (props: ICategoriaItemProps) => (
    <TouchableNativeFeedback
        onPress={props.onPress}
    >
        <View style = { styles.categoriaItemContainer }>
            <Text>
                { props.titulo }
            </Text>
        </View>
    </TouchableNativeFeedback>

)

export interface IBarraCategoriasProps {
    handlePress(id: any): void
}

const BarraCategorias: React.FunctionComponent <IBarraCategoriasProps> = (props: IBarraCategoriasProps) => {

    const pressCategoria = (id: number) => {
        props.handlePress(id);
    }

    return (
        <View style = { styles.container }>
            <ScrollView
                horizontal
                style = { styles.scrollView }
                contentContainerStyle = { styles.scrollViewContent }
            >
                <CategoriaItem 
                    titulo='Artistas'
                    onPress={()=>pressCategoria(1)}
                />
                <CategoriaItem 
                    titulo='Albunes'
                    onPress={()=>pressCategoria(2)}
                />
                <CategoriaItem 
                    titulo='Canciones'
                    onPress={()=>pressCategoria(3)}
                />
            </ScrollView>
        </View>
    )
}

export default BarraCategorias