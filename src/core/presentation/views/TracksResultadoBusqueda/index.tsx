import { Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RecyclerListView, DataProvider,  LayoutProvider } from 'recyclerlistview';

import styles from './index.styles';

import { RootState, AppDispatch } from '@redux/store';
import Track from '@core/data/models/Track';
import SearchListItem from '@core/presentation/components/SearchListItem';
import { loadMoreTracks } from '@redux/slices/searchSlice';
import { fetchTrack } from '@redux/slices/trackSlice';
import withNavigation from '@core/presentation/hocs/withNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

const {width} = Dimensions.get('window');

interface ITrackResultadoBusquedaProps {
    tracks: Track[];
    next: boolean;
    offset: number;
    navigation: StackNavigationProp<any, any>;
    fetchTrack(id: string): void;
    loadMoreTracks(offset: number): void;
}

class TrackResultadoBusqueda extends Component <ITrackResultadoBusquedaProps>{
    private layoutProvider: LayoutProvider;
    private _recyclerListView: any;

    constructor(props: ITrackResultadoBusquedaProps){
        super(props);

        this.layoutProvider = new LayoutProvider(
            (i)=>{ return this.props.tracks[i].id }, 
            (type, dim) => {
                dim.width = width;
                dim.height = 110
        }) 

        this.layoutProvider.shouldRefreshWithAnchoring = false;

        this.loadMoreTracks = this.loadMoreTracks.bind(this);
        this.goDetalleTrack = this.goDetalleTrack.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentDidUpdate(prevProps: ITrackResultadoBusquedaProps){
        this.preserveScrollPosition(prevProps);
    }

    private preserveScrollPosition(prevProps: ITrackResultadoBusquedaProps){
        if(prevProps.offset != this.props.offset && this.props.tracks && this._recyclerListView){
            try {
                const topRowIndex = this._recyclerListView.findApproxFirstVisibleIndex();
                const topRow = this.props.tracks[topRowIndex];
                const topRowNewIndex = _.findIndex(this.props.tracks, topRow) - 5;
                if(topRowNewIndex <= 0){ return; }
                this._recyclerListView.scrollToIndex(topRowNewIndex);
            } catch (error) {
                
            } 
        }
    }

    private loadMoreTracks(){
        if(!this.props.next){ return; }
        this.props.loadMoreTracks(this.props.offset + 20);
    }

    private renderRow(type: any, track: Track) {
        return(
            <SearchListItem 
                imageURL={ track.album.images[0].url ?? track.artists[0].images[0].url ?? '' }
                titulo = { track.name }
                subtitulo = { track.artists[0].name }
                nota = { track.album.name }
                handlePress = {()=>this.goDetalleTrack(track.id)}
            />
        )
    }

    private goDetalleTrack(id: any){
        this.props.fetchTrack(id);
        this.props.navigation.navigate('DescubreNavigation.DetallesTrack');
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
                    onEndReachedThreshold={500}
                    onEndReached={ this.loadMoreTracks }
                    ref = { ref  => this._recyclerListView = ref}
                />
            }
        </View>
        )
    }
}

const mapStateToProps = (state: RootState)=>({
    tracks: state.search.tracks?.items,
    offset: state.search.tracks?.offset,
    next: state.search.tracks?.next ? true : false,
})

const mapDispatchToProps = {
    loadMoreTracks, fetchTrack
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(TrackResultadoBusqueda))