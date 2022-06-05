import { View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecyclerListView, DataProvider,  LayoutProvider } from 'recyclerlistview';
import _ from 'lodash';

import { RootState } from '@redux/store';
import { loadMoreArtistas } from '@redux/slices/searchSlice'
import { fetchArtista } from '@redux/slices/artistaSlice';
import styles from './index.syles'
import Artista from '@core/data/models/Artista';
import SearchListItem from '@core/presentation/components/SearchListItem';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import withNavigation from '@core/presentation/hocs/withNavigation';

const {width} = Dimensions.get('window');

interface IArtistasResultadoBusquedaProps {
    artistas: Artista[];
    next: boolean;
    offset: number;
    navigation: StackNavigationProp<any, any>;
    loadMoreArtistas(offset: number): void;
    fetchArtista(id: string): void;
}

class ArtistasResultadoBusqueda extends Component <IArtistasResultadoBusquedaProps>{
    private layoutProvider: LayoutProvider;
    private _recyclerListView: any;

    constructor(props: IArtistasResultadoBusquedaProps){
        super(props);

        this.layoutProvider = new LayoutProvider(
            (i)=>{ return this.props.artistas[i].id }, 
            (type, dim) => {
                dim.width = width;
                dim.height = 110
            }) 
        this.layoutProvider.shouldRefreshWithAnchoring = false;

        this.renderRow = this.renderRow.bind(this);
        this.loadMoreArtistas = this.loadMoreArtistas.bind(this);
        this.goDetalle = this.goDetalle.bind(this);
    }

    componentDidUpdate(prevProps: IArtistasResultadoBusquedaProps){
        this.preserveScrollPosition(prevProps);
    }

    private preserveScrollPosition(prevProps: IArtistasResultadoBusquedaProps){
        if(prevProps.offset != this.props.offset && this.props.artistas && this._recyclerListView){
            try {
                const topRowIndex = this._recyclerListView.findApproxFirstVisibleIndex();
                const topRow = this.props.artistas[topRowIndex];
                const topRowNewIndex = _.findIndex(this.props.artistas, topRow) - 5;
                if(topRowNewIndex <= 0){ return; }
                this._recyclerListView.scrollToIndex(topRowNewIndex);
            } catch (error) {
                
            } 
        }
    }

    private renderRow(type: any, data: Artista) {
        return(
            <SearchListItem 
                imageURL={ data?.images[0]?.url ?? '' }
                titulo = { data.name }
                handlePress = {()=>this.goDetalle(data.id)}
            />
        )
    }

    private loadMoreArtistas(){
        if(!this.props.next){ return; }
        this.props.loadMoreArtistas(this.props.offset + 20);
    }

    private goDetalle(id: any){
        this.props.fetchArtista(id);
        this.props.navigation.navigate('DescubreNavigation.DetallesArtista');
    }

    render() {
        return (
            <View style = { styles.container }>
                { this.props.artistas && 
                    <RecyclerListView 
                        dataProvider = {
                            new DataProvider((r1, r2) => {
                                return r1 !== r2
                            }).cloneWithRows(this.props.artistas)
                        }
                        rowRenderer = { this.renderRow }
                        layoutProvider = { this.layoutProvider }
                        onEndReachedThreshold={500}
                        onEndReached={ this.loadMoreArtistas }
                        ref = { ref  => this._recyclerListView = ref}
                    />
                }
            </View>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    artistas: state.search.artists?.items,
    offset: state.search.artists?.offset,
    next: state.search.artists?.next ? true : false,
})

const mapDispatchToProps = {
    loadMoreArtistas, fetchArtista
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ArtistasResultadoBusqueda))