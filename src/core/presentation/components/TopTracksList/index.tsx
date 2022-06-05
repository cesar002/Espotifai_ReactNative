import { View, Text } from 'react-native';
import React from 'react';
import Track from '@core/data/models/Track';
import ListItem from '@core/presentation/components/SearchListItem';

import styles from './index.styles';

interface ITopTracksListProps {
    tracks: Track[];
    handlePress(id: string): void;
}

const TopTracksList: React.FunctionComponent<ITopTracksListProps> = (props: ITopTracksListProps) => {

    const renderRow = (track: Track) => {
        const images = track.album.images;
        return (
            <ListItem 
                key={track.id}
                handlePress={()=>props.handlePress(track.id)}
                imageURL={images.length > 0 ? images[0].url : ''}
                titulo={track.name}
                subtitulo={track.album.name}
                sizeImage={70}
                typeImage='SQUARE'
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style = {styles.titleContent}>
                <Text style={styles.title}>
                    Lo más popular
                </Text>
            </View>
            <View style={styles.listContent}>
                { props.tracks.map((album: Track)=>
                    renderRow(album)
                ) }
            </View>
        </View>
    )
}

export default TopTracksList