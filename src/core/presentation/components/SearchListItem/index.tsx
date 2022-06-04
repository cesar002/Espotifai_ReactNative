import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './index.styles'

export interface ISearchListItem {
    imageURL: string;
    titulo: string;
    subtitulo?: string;
    nota?: string;
}

export const SearchListItem: React.FunctionComponent<ISearchListItem> = (props: ISearchListItem) => {

    const cutString = (text: string): string => {
        if(text.length <= 33){
            return text;
        }

        const newText: string = text.substring(0, 33) + '...';
        return newText
    }

    return (
        <View style = { styles.container }>
            <View style = { styles.imageContainer }>
                <Image 
                    source={{ uri: props.imageURL? props.imageURL : 'https://thumbs.dreamstime.com/b/music-sound-wave-template-blue-purple-colors-illustration-your-album-cover-design-abstract-radial-digital-signal-form-160916779.jpg' }}
                    style = { styles.image }
                />
            </View>
            <View style = { styles.contentContainer }>
                <Text>{ cutString(props.titulo) }</Text>
                <Text>{ cutString(props.subtitulo ?? '') }</Text>
                <Text>{ cutString(props.nota ?? '') }</Text>
            </View>
        </View>
    )
}


export default React.memo(SearchListItem);