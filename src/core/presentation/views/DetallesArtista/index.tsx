import { Text, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import styles from './index.styles'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'
import BannerTitulo from '@core/presentation/components/BannerTitulo';
import Loading from '@core/presentation/components/LoadingScreen';
import AlbumList from '@core/presentation/components/AlbumsList';
import { IArtistaState } from '@redux/slices/artistaSlice';
import { RootState } from '@redux/store';
import TopTracksList from '@core/presentation/components/TopTracksList';


interface DetallesArtistaProps {
    artista: IArtistaState;
    imagenArtista: string;
}

class DetallesArtista extends Component <DetallesArtistaProps>{

    constructor(props: DetallesArtistaProps){
        super(props);
    }

    render() {
        return (
        <LinearGradientView
            style={{
                paddingHorizontal: 0,
                paddingVertical: 0
            }}
        >
            { !this.props.artista.status.finish &&
                <Loading />
            }
            
            { this.props.artista.status.finish && this.props.artista.status.success &&
                <ParallaxScroll
                    isHeaderFixed={false}
                    parallaxHeight={350}
                    renderParallaxBackground={({ animatedValue }) => 
                        <BannerTitulo 
                            urlImage={ this.props.imagenArtista }
                            titulo={ this.props.artista.artista?.name }
                            subTitulo = { this.props.artista.artista?.genres.toString() ?? '' }
                        />
                    }
                    parallaxBackgroundScrollSpeed={2}
                    parallaxForegroundScrollSpeed={2.5}
                >
                    <View style = { styles.container }>
                        {this.props.artista.topTracks &&
                        <TopTracksList 
                            tracks={this.props.artista.topTracks ?? []}
                        />
                        }
                        <AlbumList 
                            albums={this.props.artista.albums?.items ?? []}
                        />
                    </View>
                </ParallaxScroll>
            }
        </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    artista: state.artista,
    imagenArtista: state.artista?.artista?.images.length ? state.artista.artista.images[0].url : ''
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DetallesArtista)