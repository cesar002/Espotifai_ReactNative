import { Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecyclerListView, DataProvider,  LayoutProvider } from 'recyclerlistview';

import { RootState } from '@redux/store';

import styles from './index.syles'
import Artista from '@core/data/models/Artista';

const {height, width} = Dimensions.get('window');

interface IArtistasResultadoBusquedaProps {
    artistas: Artista[];
}

class ArtistasResultadoBusqueda extends Component <IArtistasResultadoBusquedaProps>{
    private layoutProvider: LayoutProvider;

    constructor(props: IArtistasResultadoBusquedaProps){
        super(props);

        this.layoutProvider = new LayoutProvider(
            (i)=>{ return this.props.artistas[i].id }, 
            (type, dim) => {
                dim.width = width;
                dim.height = 50
            }) 

        this.renderRow = this.renderRow.bind(this);
    }

    private renderRow(type: any, data: Artista) {
        return(
            <View>
                <Text>{ data.name }</Text>
            </View>
        )
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
                    />
                }
            </View>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    artistas: state.search.artists?.items,
})

export default connect(mapStateToProps, null)(ArtistasResultadoBusqueda)