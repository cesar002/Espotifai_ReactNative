import { View, Text } from 'react-native'
import React from 'react'

import styles from './index.styles';
import Track from '@core/data/models/Track';
import ListItem from '@core/presentation/components/SearchListItem';

interface ITrackListProps {
    tracks: Track[];
    image: string;
    handlePress(id: any): void;
}

const TracksList: React.FunctionComponent<ITrackListProps> = (props: ITrackListProps) => {

    const convertMSToMinutes = (ms: number): string => {
        const minutes = Math.floor(ms / 60000);
        const seconds = parseInt(((ms % 60000) / 1000).toFixed(0));
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const renderRow = (track: Track) => {
        return (
            <ListItem 
                key={track.id}
                handlePress={()=>props.handlePress(track.id)}
                imageURL={ props.image }
                titulo={track.name}
                subtitulo={convertMSToMinutes(track.duration_ms)}
                sizeImage={70}
                typeImage='SQUARE'
            />
        )
    }

    return (
        <View style = { styles.container }>
            <View style = {styles.titleContent}>
                <Text style={styles.title}>
                    Canciones
                </Text>
            </View>
            <View style={styles.listContent}>
                { props.tracks.map((track: Track)=>
                    renderRow(track)
                ) }
            </View>
        </View>
    )
}

export default TracksList