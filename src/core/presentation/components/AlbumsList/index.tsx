import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment'
import Album from '@core/data/models/Album'
import ListItem from '@core/presentation/components/SearchListItem';
import styles from './index.styles';

interface IALbumListProps {
    albums: Album[];
    handlePress(id: any): void;
}

const AlbumList: React.FunctionComponent<IALbumListProps>  = (props: IALbumListProps) => {

    const renderRow = (album: Album) => {
        return (
            <ListItem 
                key={album.id}
                handlePress={()=>props.handlePress(album.id)}
                imageURL={album.images.length > 0 ? album.images[0].url : ''}
                titulo={album.name}
                subtitulo={`${moment(album.release_date).format('L')}`}
                nota={`Canciones: ${album.total_tracks.toString()}`}
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