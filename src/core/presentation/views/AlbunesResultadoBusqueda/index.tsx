import { Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecyclerListView, DataProvider,  LayoutProvider } from 'recyclerlistview';

import styles from './index.styles'
import { RootState } from '@redux/store'
import Album from '@core/data/models/Album';
import SearchListItem from '@core/presentation/components/SearchListItem';

const {width} = Dimensions.get('window');


interface IAlbunesResultadoBusquedaProps {
    albumes: Album[]
}

class AlbunesResultadoBusqueda extends Component <IAlbunesResultadoBusquedaProps>{
    private layoutProvider: LayoutProvider;

    constructor(props: IAlbunesResultadoBusquedaProps){
        super(props);

        this.layoutProvider = new LayoutProvider(
            (i)=>{ return this.props.albumes[i].id }, 
            (type, dim) => {
                dim.width = width;
                dim.height = 110
        }) 
    }

    private renderRow(type: any, data: Album) {
        return(
            <SearchListItem 
                imageURL={ data?.images[0]?.url ?? '' }
                titulo = { data.name }
                subtitulo = { data.artists[0].name }
            />
        )
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
                />
            }
        </View>
        )
    }
}


const mapStateToProps = (state: RootState)=>({
    albumes: state.search.albums?.items,
})



export default connect(mapStateToProps, null)(AlbunesResultadoBusqueda)