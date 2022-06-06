import { Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import SoundPlayer from 'react-native-sound-player'
import Icon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialIcons'

import DEFAULT_IMAGEN from '@constants/defaultImagen'

import styles from './index.syles'
import { RootState } from '@redux/store'
import { connect } from 'react-redux'
import Track from '@core/data/models/Track'
import { IFetchStatus } from '@redux/slices/albumSlice';
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'
import User from '@core/data/models/User'
import Favorito from '@core/data/models/Favorito'
import { addFavorito, IAddFavAction, IRemoveFavAction, removeFavorito } from '@redux/slices/usersSlice'

interface IDetallesTrackProps{
    track: Track,
    accessToken: string,
    status: IFetchStatus,
    imagen: string,
    user: User,
    addFavorito(data: IAddFavAction): void;
    removeFavorito(data: IRemoveFavAction): void;
}

interface IDetallesTrackState {
    isPlaySong: boolean
}

class DetallesTrack extends Component <IDetallesTrackProps, IDetallesTrackState>{


    constructor(props: IDetallesTrackProps){
        super(props);

        this.state = {
            isPlaySong: false,
        }

        this.playTrack = this.playTrack.bind(this);
        this.isFav = this.isFav.bind(this);
        this.addToFav = this.addToFav.bind(this);
        this.removeToFav = this.removeToFav.bind(this);
    }

    componentWillUnmount(){
        SoundPlayer.stop();
    }

    private playTrack(){
        if(this.props.track && this.props.track.preview_url ){
            try {
                const isPlay = this.state.isPlaySong;
                if(!isPlay){
                    SoundPlayer.playUrl(this.props.track.preview_url)
                }else{
                    SoundPlayer.pause();
                }
    
                this.setState({
                    isPlaySong: !isPlay
                })
            } catch (error) {
                console.error(error)
            }
        }
    }

    private isFav(id: string){
        const fav = this.props.user.favoritos?.find((fav: Favorito)=> fav.id == id);

        return fav ? true : false;
    }

    public addToFav(){
        try {
            const favorito: Favorito = {
                id: this.props.track.id,
                image: this.props.imagen,
                nombre: this.props.track.name,
                type: 'TRACK'
            };
    
            this.props.addFavorito({
                userId: this.props.user.email,
                favorito,
            })
        } catch (error) {
            
        }
    }

    public removeToFav(){
        try {
            this.props.removeFavorito({
                email: this.props.user.email,
                favId: this.props.track.id,
            })
        } catch (error) {
            
        }
    }

    render() {
        return (
            <LinearGradientView style={styles.container}>
                { this.props.status.finish && this.props.status.success && this.props.track &&
                <>
                <Text style={styles.textTitulo}>
                    {this.props.track?.name ?? ''}
                </Text>
                <View style={{
                    width: 280,
                    height: 280,
                    borderRadius: 300,
                    overflow: 'hidden',          
                }}>
                    <ImageBackground style={styles.imagenMusic}
                        source={{ uri: this.props.imagen ? this.props.imagen : DEFAULT_IMAGEN }}
                    >
                        { this.props.track.preview_url && 
                        <TouchableWithoutFeedback
                            onPress={this.playTrack}
                        >
                            <View style={styles.boton}>
                                <Icon 
                                    name={ !this.state.isPlaySong ? 'play' : 'pause'}
                                    size={50}
                                    color='rgba(191, 201, 202, 0.8)'
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        }

                    </ImageBackground>
                </View>
                <View style={styles.contentFav}>
                    { this.props.user && 
                    <>
                    { !this.isFav(this.props.track.id) &&
                    <TouchableWithoutFeedback
                        onPress={this.addToFav}
                    >
                        <View style={styles.favIcon}>
                            <MIcon name='favorite-border' size={50} color='#EBF5FB' />
                        </View>
                    </TouchableWithoutFeedback>
                    }
                    { this.isFav(this.props.track.id) &&
                    <TouchableWithoutFeedback onPress={this.removeToFav} >
                        <View style={styles.favIcon}>
                            <MIcon name='favorite' size={50} color='#F5B7B1' />
                        </View>
                    </TouchableWithoutFeedback>
                    }
                    </>
                    }
                </View>
                <View style={styles.content}>
                    <Text style={styles.textArtista}>
                        { this.props.track.artists[0].name }
                    </Text>
                    <Text style={styles.textAlbum}>
                        {this.props.track.album.name}
                    </Text>
                    <Text style={styles.textNoDisponible}>
                        Canción no disponible
                    </Text>
                </View>
                </>
                }
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState)=>({
    track: state.track.track,
    accessToken: state.login.login_data.access_token,
    status: state.track.status,
    imagen: state.track.track?.album.images.length ? state.track.track?.album.images[0].url : '',
    user: state.user.currentUser,
})

const mapDispatchToProps = {
    addFavorito, removeFavorito
}

export default connect(mapStateToProps, mapDispatchToProps)(DetallesTrack)