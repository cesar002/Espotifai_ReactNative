import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import styles from './index.styles'

import DEFAULT_IMAGEN from '@constants/defaultImagen';

export interface ISearchListItem {
    imageURL: string;
    titulo: string;
    subtitulo?: string;
    nota?: string;
    sizeImage?: number;
    handlePress(): void;
    typeImage?: 'SQUARE' | 'CIRCLE',
}

export const SearchListItem: React.FunctionComponent<ISearchListItem> = (props: ISearchListItem) => {

    const cutString = (text: string): string => {
        if(text.length <= 33){
            return text;
        }

        const newText: string = text.substring(0, 33) + '...';
        return newText
    }

    const onPress = (): void => {
        props.handlePress();
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style = { styles.container }>
                <View style = { styles.imageContainer }>
                    <Image 
                        source={{ uri: props.imageURL? props.imageURL : DEFAULT_IMAGEN }}
                        style = { [styles.image, props.sizeImage ? 
                                    { width: props.sizeImage, height: props.sizeImage } :
                                    { width: 80, height: 80 } ,
                                    props.typeImage == 'SQUARE' ?
                                    { borderRadius: 15 } :
                                    { borderRadius: 100 }
                                ]}
                    />
                </View>
                <View style = { styles.contentContainer }>
                    <Text>{ cutString(props.titulo) }</Text>
                    <Text>{ cutString(props.subtitulo ?? '') }</Text>
                    <Text>{ cutString(props.nota ?? '') }</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

SearchListItem.defaultProps = {
    typeImage: 'CIRCLE',
}


export default React.memo(SearchListItem);