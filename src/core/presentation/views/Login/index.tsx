import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './index.styles'
import InputText from '@core/presentation/components/InputText'
import Boton from '@core/presentation/components/boton'
import AuthService from '@core/domain/useCases/AuthService';
import UserRepositoryImpl from '@core/data/repositoriesImpl/UserRepositoryImpl';
import User from '@core/data/models/User';
import { StackNavigationProp } from '@react-navigation/stack';

interface ILoginProps{
  navigation: StackNavigationProp<any, any>
}

class Login extends Component <ILoginProps> {

  constructor(props: ILoginProps){
    super(props);

    this.login = this.login.bind(this);
  }


  async login(values: any, helpers: any){
    try {
      const user: User = {
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        password: values.password,
      }

      const authServide = new AuthService( new UserRepositoryImpl());
      await authServide.loginUser(user)
    } catch (error) {
      console.error(error)
    }finally{
      helpers.setSubmitting(false);
    }
  }

  render() {
    return (
      <LinearGradientView style={ styles.container  }>
        <ScrollView style = { styles.scrollContainer }>
          <View style = { styles.headerContent }>
            <Text style={styles.textTitle}>
                Bienvenido
            </Text>
            <Text style = {styles.textSubTitle}>
                Inicia sesión para ver tus favoritos
            </Text>
          </View>
          <Formik
            validationSchema={ Yup.object().shape({
                email: Yup.string().email('El campo debe ser un email').required('Campo requerido'),
                password: Yup.string().required('El campo es requerido'),
            })}
            initialValues={ { email: '', password: '' } }
            onSubmit={(values, helpers) => this.login(values, helpers)}
          >
            {
              ({
                errors,
                values,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                isSubmitting,
              })=>(
              <View style={styles.formContainer}>
                <InputText 
                  label='Correo'
                  hasError={ errors.email ? true: false }
                  error={errors.email}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <InputText 
                  label='Contraseña'
                  hasError={ errors.password ? true: false }
                  error={errors.password}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />
                <View style={styles.inputSection}>
                  <Boton 
                    text='Iniciar sesión'
                    handlePress={handleSubmit}
                  />
                  <Boton 
                    text='Registrarse'
                    handlePress={()=>{
                      this.props.navigation.navigate('PerfilNavigation.Registrar')
                    }}
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

export default Login