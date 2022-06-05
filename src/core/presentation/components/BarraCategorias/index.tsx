import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'

import styles from './index.styles';

export interface ICategoriaItemProps {
    titulo: string;
    onPress(): void;
    isSelected: boolean;
}

export const CategoriaItem: React.FunctionComponent<ICategoriaItemProps> = (props: ICategoriaItemProps) => (
    <TouchableNativeFeedback
        onPress={props.onPress}
    >
        <View style = { props.isSelected ? styles.categoriaItemContainerSelected : styles.categoriaItemContainer }>
            <Text style = { props.isSelected ? styles.textSelected : styles.text }>
                { props.titulo }
            </Text>
        </View>
    </TouchableNativeFeedback>

)

export interface IBarraCategoriasProps {
    handlePress(id: any): void;
    indexSelected: number;
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
                    onPress={()=>pressCategoria(0)}
                    isSelected = { props.indexSelected == 0 }
                />
                <CategoriaItem 
                    titulo='Albunes'
                    onPress={()=>pressCategoria(1)}
                    isSelected = { props.indexSelected == 1 }
                />
                <CategoriaItem 
                    titulo='Canciones'
                    onPress={()=>pressCategoria(2)}
                    isSelected = { props.indexSelected == 2 }
                />
            </ScrollView>
        </View>
    )
}

export default BarraCategorias