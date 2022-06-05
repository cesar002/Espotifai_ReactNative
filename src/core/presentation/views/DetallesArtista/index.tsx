import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import LinearGradient from 'react-native-linear-gradient';

import styles from './index.styles'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'
import BannerTitulo from '@core/presentation/components/BannerTitulo';
import Loading from '@core/presentation/components/LoadingScreen';
import AlbumList from '@core/presentation/components/AlbumsList';
import { IArtistaState } from '@redux/slices/artistaSlice';
import { RootState } from '@redux/store';
import TopTracksList from '@core/presentation/components/TopTracksList';
import { StackNavigationProp } from '@react-navigation/stack';
import { fetchAlbum } from '@redux/slices/albumSlice';
import { fetchTrack } from '@redux/slices/trackSlice';

const Degradado = [
    '#2196F3',
    '#5C6BC0',
    '#3F51B5',
    '#283593',
    '#1A237E',
]

interface DetallesArtistaProps {
    artista: IArtistaState;
    imagenArtista: string;
    navigation: StackNavigationProp<any, any>;
    fetchAlbum(id: string): void;
    fetchTrack(id: string): void;
}

class DetallesArtista extends Component <DetallesArtistaProps>{

    constructor(props: DetallesArtistaProps){
        super(props);

        this.goDetalleAlbum = this.goDetalleAlbum.bind(this);
        this.goDetalleTrack = this.goDetalleTrack.bind(this);
    }

    private goDetalleAlbum(id: any){
        this.props.fetchAlbum(id);
        this.props.navigation.navigate('DescubreNavigation.DetalleAlbum');
    }

    private goDetalleTrack(id: any){
        this.props.fetchTrack(id);
        this.props.navigation.navigate('DescubreNavigation.DetallesTrack');
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
                    <LinearGradientView style = { styles.container } colors={Degradado}>
                        {this.props.artista.topTracks &&
                        <TopTracksList 
                            tracks={this.props.artista.topTracks ?? []}
                            handlePress={this.goDetalleTrack}
                        />
                        }
                        <AlbumList 
                            albums={this.props.artista.albums?.items ?? []}
                            handlePress={this.goDetalleAlbum}
                        />
                    </LinearGradientView>
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
    fetchAlbum, fetchTrack,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetallesArtista)