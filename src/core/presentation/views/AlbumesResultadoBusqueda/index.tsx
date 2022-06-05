import { Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecyclerListView, DataProvider,  LayoutProvider } from 'recyclerlistview';
import _ from 'lodash';

import styles from './index.styles'
import { RootState, AppDispatch } from '@redux/store'
import { loadMoreAlbums } from '@redux/slices/searchSlice'
import Album from '@core/data/models/Album';
import SearchListItem from '@core/presentation/components/SearchListItem';
import withNavigation from '@core/presentation/hocs/withNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

const {width} = Dimensions.get('window');


interface IAlbumesResultadoBusquedaProps {
    albumes: Album[];
    next: boolean;
    offset: number;
    navigation: StackNavigationProp<any, any>;
    loadMoreAlbums(offset: number): void;
}

class AlbumesResultadoBusqueda extends Component <IAlbumesResultadoBusquedaProps>{
    private layoutProvider: LayoutProvider;
    private _recyclerListView: any;

    constructor(props: IAlbumesResultadoBusquedaProps){
        super(props);

        this.layoutProvider = new LayoutProvider(
            (i)=>{ return this.props.albumes[i].id }, 
            (type, dim) => {
                dim.width = width;
                dim.height = 110
        }) 
        this.layoutProvider.shouldRefreshWithAnchoring = false;

        this.loadMoreAlbumes = this.loadMoreAlbumes.bind(this);
        this.goDetalle = this.goDetalle.bind(this);
    }

    componentDidUpdate(prevProps: IAlbumesResultadoBusquedaProps){
        this.preserveScrollPosition(prevProps);
    }

    private preserveScrollPosition(prevProps: IAlbumesResultadoBusquedaProps){
        if(prevProps.offset != this.props.offset && this.props.albumes && this._recyclerListView){
            try {
                const topRowIndex = this._recyclerListView.findApproxFirstVisibleIndex();
                const topRow = this.props.albumes[topRowIndex];
                const topRowNewIndex = _.findIndex(this.props.albumes, topRow) - 5;
                if(topRowNewIndex <= 0){ return; }
                this._recyclerListView.scrollToIndex(topRowNewIndex);
            } catch (error) {
                
            } 
        }
    }

    private loadMoreAlbumes(){
        if(!this.props.next){ return; }
        this.props.loadMoreAlbums(this.props.offset + 20);
    }

    private renderRow(type: any, data: Album) {
        return(
            <SearchListItem 
                imageURL={ data?.images[0]?.url ?? '' }
                titulo = { data.name }
                subtitulo = { data.artists[0].name }
                handlePress = {()=>this.goDetalle(data.id)}
            />
        )
    }

    private goDetalle(id: any){
        //this.props.fetchArtista(id);
        this.props.navigation.navigate('DescubreNavigation.DetalleAlbum');
    }

    render() {
        return (
        <View style = { styles.container }>
            { this.props.albumes && 
                <RecyclerListView 
                    dataProvider = {
                        new DataProvider((r1, r2) => {
                            return r1 !== r2
                        }).cloneWithRows(this.props.albumes)
                    }
                    rowRenderer = { this.renderRow }
                    layoutProvider = { this.layoutProvider }
                    onEndReachedThreshold={500}
                    onEndReached={ this.loadMoreAlbumes }
                    ref = { ref  => this._recyclerListView = ref}
                />
            }
        </View>
        )
    }
}


const mapStateToProps = (state: RootState)=>({
    albumes: state.search.albums?.items,
    offset: state.search.albums?.offset,
    next: state.search.albums?.next ? true : false,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    loadMoreAlbums(offset: number){
        dispatch(loadMoreAlbums(offset))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(AlbumesResultadoBusqueda))