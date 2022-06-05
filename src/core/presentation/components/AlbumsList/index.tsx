import { View, Text } from 'react-native'
import React from 'react'
import Album from '@core/data/models/Album'
import ListItem from '@core/presentation/components/SearchListItem';
import styles from './index.styles';

interface IALbumListProps {
    albums: Album[];
}

const AlbumList: React.FunctionComponent<IALbumListProps>  = (props: IALbumListProps) => {

    const renderRow = (album: Album) => {
        return (
            <ListItem 
                key={album.id}
                handlePress={()=>{}}
                imageURL={album.images.length > 0 ? album.images[0].url : ''}
                titulo={album.name}
                sizeImage={70}
                typeImage='SQUARE'
            />
        )
    }

    return (
        <View style = { styles.container }>
            <View style = {styles.titleContent}>
                <Text style={styles.title}>
                    Albumes
                </Text>
            </View>
            <View style={styles.listContent}>
                { props.albums.map((album: Album)=>
                    renderRow(album)
                ) }
            </View>
        </View>
    )
}

export default AlbumList