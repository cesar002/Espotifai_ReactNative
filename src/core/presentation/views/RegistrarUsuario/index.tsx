import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputText from '@core/presentation/components/InputText'
import Boton from '@core/presentation/components/boton'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'


import styles from './index.styles';
import AuthService from '@core/domain/useCases/AuthService';
import UserRepositoryImpl from '@core/data/repositoriesImpl/UserRepositoryImpl';
import User from '@core/data/models/User';

class RegistrarUsuarios extends Component <{}>{

    constructor(props){
        super(props);

        this.registrarUsuario = this.registrarUsuario.bind(this);
    }

    async registrarUsuario(values: any, helpers){
        try {
            const user: User = {
                nombre: values.nombre,
                apellido: values.apellido,
                email: values.email,
                password: values.password,
            }

            const authServide = new AuthService( new UserRepositoryImpl());
            await authServide.registerUser(user);
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <LinearGradientView style={ styles.container  }>
                <ScrollView style = { styles.scrollContainer }>
                <View style = { styles.headerContent }>
                    <Text style={styles.textTitle}>
                        Registrate
                    </Text>
                    <Text style = {styles.textSubTitle}>
                        Registrate y guarda tu musica favorita
                    </Text>
                </View>
                <Formik
                    validationSchema={ Yup.object().shape({
                        email: Yup.string().email('El campo debe ser un email').required('Campo requerido'),
                        nombre: Yup.string().required('El campo es requerido'),
                        apellido: Yup.string().required('El campo es obligatorio'),
                        password: Yup.string().required('El campo es requerido'),
                        password_confirmation: Yup.string()
                                                .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
                    })}
                    initialValues={ { 
                        email: '',
                        nombre: '',
                        apellido: '',
                        password: '',
                        password_confirmation: '',
                    } }
                    onSubmit={(values, helpers) => this.registrarUsuario(values, helpers)}
                >
                    {
                    ({
                        errors,
                        values,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    })=>(
                    <View style={styles.formContainer}>
                        <InputText 
                            label='Correo'
                            hasError={ errors.email && touched.email ? true: false }
                            error={errors.email}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('password')}
                        />
                        <InputText 
                            label='Nombre'
                            hasError={ errors.nombre && touched.nombre ? true: false }
                            error={errors.nombre}
                            value={values.nombre}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                        />
                        <InputText 
                            label='Apellido'
                            hasError={ errors.apellido && touched.apellido ? true: false }
                            error={errors.apellido}
                            value={values.apellido}
                            onChangeText={handleChange('apellido')}
                            onBlur={handleBlur('apellido')}
                        />
                        <InputText 
                            label='Contraseña'
                            hasError={ errors.password && touched.password ? true: false }
                            error={errors.password}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry
                        />
                        <InputText 
                            label='Confirmar Contraseña'
                            hasError={ errors.password_confirmation && touched.password_confirmation ? true: false }
                            error={errors.password_confirmation}
                            value={values.password_confirmation}
                            onChangeText={handleChange('password_confirmation')}
                            onBlur={handleBlur('password_confirmation')}
                            secureTextEntry
                        />
                        <View style={styles.inputSection}>
                            <Boton 
                                text='Registrarse'
                                handlePress={handleSubmit}
                                isLoading={isSubmitting}
                            />
                        </View>
                    </View>
                    )
                    }
                </Formik>
                </ScrollView>
            </LinearGradientView>
        )
    }
}

export default RegistrarUsuarios