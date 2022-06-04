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




const SecondRoute = () => (
<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    first: ArtistasResultadoBusqueda,
    second: SecondRoute,
});
export interface ISearchProps {
    musica: any,
    search(text: string): void,
    emptySearch(): void
}

class Search extends Component<ISearchProps> {

    constructor(props: ISearchProps){
        super(props);

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
    }

    public selectCategoria(id: any){
        console.log(id)
    }

    render() {
        return (
            <LinearGradientView>
                <View style = { styles.busqueda }>
                    <SearchText 
                        cancelHandle={ this.cancelSearch }
                        searchHandle={ this.searchData }
                    />
                </View>
                <View style = { styles.listaResultados }>
                    {this.props.musica &&
                                        <BarraCategorias 
                                        handlePress={ this.selectCategoria }
                                    />
                    }

                <TabView
                    navigationState={{ index: 0, routes: [
                        { key: 'first', title: 'First' },
                        { key: 'second', title: 'Second' },
                    ] }}
                    renderScene={renderScene}
                    onIndexChange={index=>{}}
                    renderTabBar={() => null}
                    />
                </View>
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    musica: state.search.albums
});

const mapDispatchToProps = {
    search, emptySearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)