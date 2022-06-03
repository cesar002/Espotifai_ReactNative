import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';

import styles from './index.styles';
import {
    search,
    setSearchResult,
} from '@redux/slices/searchSlice';
import { RootState } from '@redux/store';
import LinearGradientView from '@core/presentation/layouts/LinearGradientView';
import SearchText from '@core/presentation/components/SearchText';

export interface ISearchProps {
    search(text: string): void,
}

class Search extends Component<ISearchProps> {

    constructor(props: ISearchProps){
        super(props);

        this.searchData = this.searchData.bind(this);
    }

    public searchData(text: string){
        if(!text){ return; }


        this.props.search(text);
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