import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TabView, SceneMap } from 'react-native-tab-view';

import styles from './index.styles';
import {
    search,
} from '@redux/slices/searchSlice';
import { RootState } from '@redux/store';
import LinearGradientView from '@core/presentation/layouts/LinearGradientView';
import SearchText from '@core/presentation/components/SearchText';
import BarraCategorias from '@core/presentation/components/BarraCategorias';


const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
export interface ISearchProps {
    search(text: string): void,
}

class Search extends Component<ISearchProps> {

    constructor(props: ISearchProps){
        super(props);

        this.searchData = this.searchData.bind(this);
        this.selectCategoria = this.selectCategoria.bind(this);
    }

    public searchData(text: string){
        if(!text){ return; }

        this.props.search(text);
    }

    public selectCategoria(id: any){
        console.log(id)
    }

    render() {
        return (
            <LinearGradientView>
                <View style = { styles.busqueda }>
                    <SearchText 
                        cancelHandle={()=>{}}
                        searchHandle={ this.searchData }
                    />
                </View>
                <View style = { styles.listaResultados }>
                    <BarraCategorias 
                        handlePress={ this.selectCategoria }
                    />
                <TabView
                    navigationState={{ index: 0, routes: [
                        { key: 'first', title: 'First' },
                        { key: 'second', title: 'Second' },
                    ] }}
                    renderScene={renderScene}
                    onIndexChange={index=>{}}
                    initialLayout={{ width: 500 }}
                    renderTabBar={() => null}
                    />
                </View>
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState) => ({

});

const mapDispatchToProps = {
    search
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)