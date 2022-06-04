import { Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RecyclerListView, DataProvider,  LayoutProvider } from 'recyclerlistview';

import styles from './index.styles';

import { RootState } from '@redux/store';
import Track from '@core/data/models/Track';
import SearchListItem from '@core/presentation/components/SearchListItem';

const {width} = Dimensions.get('window');

interface ITrackResultadoBusquedaProps {
    tracks: Track[];
}

class TrackResultadoBusqueda extends Component <ITrackResultadoBusquedaProps>{
    private layoutProvider: LayoutProvider;

    constructor(props: ITrackResultadoBusquedaProps){
        super(props);

        this.layoutProvider = new LayoutProvider(
            (i)=>{ return this.props.tracks[i].id }, 
            (type, dim) => {
                dim.width = width;
                dim.height = 110
        }) 
    }

    private renderRow(type: any, data: Track) {
        return(
            <SearchListItem 
                imageURL={ data.album.images[0].url ?? data.artists[0].images[0].url ?? '' }
                titulo = { data.name }
                subtitulo = { data.artists[0].name }
                nota = { data.album.name }
            />
        )
    }
    
    render() {
        return (
        <View style = { styles.container }>
            { this.props.tracks && 
                <RecyclerListView 
                    dataProvider = {
                        new DataProvider((r1, r2) => {
                            return r1 !== r2
                        }).cloneWithRows(this.props.tracks)
                    }
                    rowRenderer = { this.renderRow }
                    layoutProvider = { this.layoutProvider }
                />
            }
        </View>
        )
    }
}

const mapStateToProps = (state: RootState)=>({
    tracks: state.search.tracks?.items,
})

export default connect(mapStateToProps, null)(TrackResultadoBusqueda)