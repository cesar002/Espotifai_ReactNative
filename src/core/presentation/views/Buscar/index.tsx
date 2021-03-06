import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TabView, SceneMap } from 'react-native-tab-view';


import styles from './index.styles';
import {
    search, emptySearch
} from '@redux/slices/searchSlice';
import { RootState } from '@redux/store';
import LinearGradientView from '@core/presentation/layouts/LinearGradientView';
import SearchText from '@core/presentation/components/SearchText';
import BarraCategorias from '@core/presentation/components/BarraCategorias';

import ArtistasResultadoBusqueda from '@core/presentation/views/ArtistasResultadoBusqueda';
import AlbunesResultadoBusqueda from '@core/presentation/views/AlbumesResultadoBusqueda';
import TracksResultadoBusqueda from '@core/presentation/views/TracksResultadoBusqueda';


const renderScene = SceneMap({
    artistas: ArtistasResultadoBusqueda,
    albumes: AlbunesResultadoBusqueda,
    tracks: TracksResultadoBusqueda,
});
interface ISearchProps {
    hasData: boolean,
    isLoading: boolean,
    search(text: string): void,
    emptySearch(): void
}

interface ISearchState {
    indexTab: number
}

class Search extends Component<ISearchProps, ISearchState> {

    constructor(props: ISearchProps){
        super(props);

        this.state = {
            indexTab: 0,
        }

        this.searchData = this.searchData.bind(this);
        this.selectCategoria = this.selectCategoria.bind(this);
        this.cancelSearch = this.cancelSearch.bind(this);
    }

    public searchData(text: string){
        if(!text){ this.props.emptySearch(); return; }
        this.props.search(text);
    }

    public cancelSearch(){
        this.props.emptySearch();
        this.setState({
            indexTab: 0,
        })
    }

    public selectCategoria(id: any){
        this.setState({ indexTab: id })
    }

    render() {
        return (
            <LinearGradientView>
                <View style = { styles.busqueda }>
                    <SearchText 
                        cancelHandle={ this.cancelSearch }
                        searchHandle={ this.searchData }
                        isLoading = { this.props.isLoading }
                    />
                </View>
                <View style = { styles.listaResultados }>
                    {this.props.hasData &&
                        <BarraCategorias 
                            handlePress={ this.selectCategoria }
                            indexSelected = { this.state.indexTab }
                        />
                    }

                <TabView
                    navigationState={{ index: this.state.indexTab, routes: [
                        { key: 'artistas', title: 'Artistas' },
                        { key: 'albumes', title: 'Albums' },
                        { key: 'tracks', title: 'Trackas' },
                    ] }}
                    renderScene={renderScene}
                    onIndexChange={this.selectCategoria}
                    renderTabBar={() => null}
                    />
                </View>
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    hasData: state.search.albums || state.search.artists || state.search.tracks,
    isLoading: state.search.isLoading,
});

const mapDispatchToProps = {
    search, emptySearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)