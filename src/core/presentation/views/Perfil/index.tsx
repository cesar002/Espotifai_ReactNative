import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';

import LinearGradientView from '@core/presentation/layouts/LinearGradientView';
import styles from './index.styles';
import { RootState } from '@redux/store';
import { clearCurrentUser } from '@redux/slices/usersSlice'
import User from '@core/data/models/User';
import Boton from '@core/presentation/components/boton';
import { Image } from 'react-native-animatable';

interface IProfileProps{
    user: User;
    clearCurrentUser(): void;
}
class Profile extends Component <IProfileProps>{

    constructor(props: IProfileProps){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.clearCurrentUser();
    }

    render() {
        return (
            <LinearGradientView style={styles.container}>
                {this.props.user &&
                <>
                <View style={styles.header}>
                    <Image 
                        style={styles.avatar}
                        source={{ uri: `https://ui-avatars.com/api/?name=${ this.props.user.nombre ?? 'user' }&background=random&size=500` }}
                    />
                    <Text style={styles.text}>
                        {this.props.user.nombre} {this.props.user.apellido}
                    </Text>
                </View>
                <View style={styles.body}>
                    <Boton 
                        text='Cerrar sesión'
                        handlePress={this.logout}
                        color='#154360'
                    />
                </View>
                </>
                }
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    user: state.user.currentUser,
})

const mapDispatchToProps = {
    clearCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)