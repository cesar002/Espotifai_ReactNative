import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import styles from './index.styles'
import { RootState } from '@redux/store'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'
import BannerTitulo from '@core/presentation/components/BannerTitulo';
import Loading from '@core/presentation/components/LoadingScreen';
import { IAlbumState, IFetchStatus } from '@redux/slices/albumSlice';
import TracksList from '@core/presentation/components/TracksList';
import Album from '@core/data/models/Album';
import Track from '@core/data/models/Track';

interface IDetalleAlbum {
    album: Album;
    tracks: Track[];
    status: IFetchStatus;
    imagenAlbum: string;
    artista: string;
}

class DetalleAlbum extends Component <IDetalleAlbum>{

    constructor(props: IDetalleAlbum){
        super(props);

        this.goDetalleTrack = this.goDetalleTrack.bind(this);
    }

    private goDetalleTrack(id: any){
        //this.props.fetchAlbum(id);
        //this.props.navigation.navigate('DescubreNavigation.DetalleAlbum');
    }

    render() {
        return (
            <LinearGradientView
                style={{
                    paddingHorizontal: 0,
                    paddingVertical: 0
                }}
            >
                { !this.props.status.finish &&
                    <Loading />
                }
                { this.props.status.finish && this.props.status.success &&
                    <ParallaxScroll
                        isHeaderFixed={false}
                        parallaxHeight={350}
                        renderParallaxBackground={({ animatedValue }) => 
                            <BannerTitulo 
                                urlImage={ this.props.imagenAlbum }
                                titulo={ this.props.album?.name ?? '' }
                                subTitulo = { this.props.artista }
                            />
                        }
                        parallaxBackgroundScrollSpeed={2}
                        parallaxForegroundScrollSpeed={2.5}
                    >
                        <View style = { styles.container }>
                            <TracksList 
                                tracks={this.props.tracks}
                                handlePress={this.goDetalleTrack}
                                image={this.props.imagenAlbum}
                            />
                        </View>
                    </ParallaxScroll>
                }
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    album: state.album.album,
    status: state.album.status,
    tracks: state.album.album?.tracks.items ? state.album.album?.tracks.items : [],
    imagenAlbum: state.album.album?.images.length ? state.album.album?.images[0].url : '',
    artista: state.album.album?.artists.length ? state.album.album.artists[0].name : '',
});

export default connect(mapStateToProps, null)(DetalleAlbum)