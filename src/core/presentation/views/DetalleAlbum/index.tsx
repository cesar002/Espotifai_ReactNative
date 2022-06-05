import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import styles from './index.styles'
import { RootState } from '@redux/store'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'
import BannerTitulo from '@core/presentation/components/BannerTitulo';
import Loading from '@core/presentation/components/LoadingScreen';
import ListItem from '@core/presentation/components/SearchListItem';
import { IAlbumState, IFetchStatus } from '@redux/slices/albumSlice';
import TracksList from '@core/presentation/components/TracksList';
import Album from '@core/data/models/Album';
import Track from '@core/data/models/Track';
import withNavigation from '@core/presentation/hocs/withNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { fetchTrack } from '@redux/slices/trackSlice';

const Degradado = [
    '#2196F3',
    '#5C6BC0',
    '#3F51B5',
    '#283593',
    '#1A237E',
]

interface IDetalleAlbum {
    album: Album;
    tracks: Track[];
    status: IFetchStatus;
    imagenAlbum: string;
    artista: string;
    navigation: StackNavigationProp<any, any>;
    fetchTrack(id: string): void;
}

class DetalleAlbum extends Component <IDetalleAlbum>{

    constructor(props: IDetalleAlbum){
        super(props);

        this.goDetalleTrack = this.goDetalleTrack.bind(this);
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
                        <LinearGradientView style = { styles.container } colors = { Degradado }>
                            <TracksList 
                                tracks={this.props.tracks}
                                handlePress={this.goDetalleTrack}
                                image={this.props.imagenAlbum}
                            />
                        </LinearGradientView>
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

const mapDispatchToProps = {
    fetchTrack
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(DetalleAlbum))