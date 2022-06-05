import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

import LinearGradientView from '@core/presentation/layouts/LinearGradientView';
import styles from './index.styles';
import { RootState } from '@redux/store';
import { connect } from 'react-redux';
import User from '@core/data/models/User';
import SearchListItem from '@core/presentation/components/SearchListItem';
import Favorito from '@core/data/models/Favorito';
import { StackNavigationProp } from '@react-navigation/stack';
import { fetchTrack } from '@redux/slices/trackSlice'

interface IFavoritosProps {
    user: User;
    navigation: StackNavigationProp<any, any>;
    fetchTrack(id: string): void
}

class Favoritos extends Component <IFavoritosProps>{

    constructor(props: IFavoritosProps) {
        super(props);

        this.goToDetalle = this.goToDetalle.bind(this)
    }

    goToDetalle(id: string){
        this.props.fetchTrack(id)
        this.props.navigation.navigate('DescubreNavigation.DetallesTrack');
    }

    render() {
        return (
            <LinearGradientView style={styles.container}>
                { this.props.user && 
                <>
                <Text style={styles.textTitulo}>
                    Favoritos
                </Text>
                <ScrollView>
                    { this.props.user.favoritos?.map((fav: Favorito)=>
                        <SearchListItem 
                            key={fav.id}
                            titulo={fav.nombre}
                            imageURL={fav.image}
                            handlePress={()=>{ this.goToDetalle(fav.id) }}
                        />
                    ) }
                </ScrollView>
                </>
                }
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState)=>({
    user: state.user.currentUser,
})

const mapDispatchToProps = {
    fetchTrack,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favoritos)