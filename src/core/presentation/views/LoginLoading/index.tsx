import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';

import {
    startLogin,
    ILoginStatus
} from '@redux/slices/loginSlice';
import {
    RootState
} from '@redux/store';

import styles from '@core/presentation/views/LoginLoading/index.styles';
import LinearGradientView from '@core/presentation/layouts/LinearGradientView';

export interface ILoginLoadingProps {
    loginStatus: ILoginStatus;
    startLogin(): void;
}


class LoginLoading extends Component <ILoginLoadingProps, {}>{

    constructor(props: ILoginLoadingProps){
        super(props);
    }

    componentDidMount(){
        this.props.startLogin();
    }

    render() {
        return (
            <LinearGradientView style={styles.container}>
                <Spinner 
                    type='9CubeGrid'
                    color='#FFFFFF'
                    size={60}
                />
                <Text style={styles.textIniciando}>
                    Iniciando
                </Text>
            </LinearGradientView>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    loginStatus: state.login.status
});

const mapDispatchToProps = {
    startLogin,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginLoading)