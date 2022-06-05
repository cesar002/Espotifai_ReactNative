import { Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import SoundPlayer from 'react-native-sound-player'

import DEFAULT_IMAGEN from '@constants/defaultImagen'

import styles from './index.syles'
import { RootState } from '@redux/store'
import { connect } from 'react-redux'
import Track from '@core/data/models/Track'
import { IFetchStatus } from '@redux/slices/albumSlice';
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'

interface IDetallesTrackProps{
    track: Track,
    accessToken: string,
    status: IFetchStatus
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
    }

    componentWillUnmount(){
        SoundPlayer.stop();
    }

    private playTrack(){
        try {
            const isPlay = this.state.isPlaySong;
            SoundPlayer.getInfo().then(data => {
                console.log(data);
            });
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

    render() {
        return (
            <LinearGradientView style={styles.container}>
                { this.props.status.finish && this.props.status.success && this.props.track &&
                <>
                <Text>{this.props.track?.name ?? ''}</Text>
                <View style={{
                    width: 350,
                    height: 350,
                    borderRadius: 300,
                    overflow: 'hidden',          
                }}>
                    <ImageBackground style={styles.imagenMusic}
                        source={{ uri: this.props.track.album.images[0].url }}
                    >
                        <TouchableWithoutFeedback
                            onPress={this.playTrack}
                        >
                            <View style={{
                                width: 100,
                                height: 100,
                                backgroundColor: 'red',
                                borderRadius: 100
                            }} />
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </View>
                <View style={{ 
                    width: '100%', height: 120, backgroundColor: 'pink', 
                    marginVertical: 10, paddingHorizontal: 20, paddingVertical: 10,
                    justifyContent: 'space-around', alignItems: 'center'
                }}>
                    <Text>asdasd</Text>
                    <Text>asdasd</Text>
                </View>
                {/* <ImageBackground style={styles.imagenMusic}
                    source={{ uri: DEFAULT_IMAGEN }}
                >

                </ImageBackground> */}
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
})

export default connect(mapStateToProps, null)(DetallesTrack)