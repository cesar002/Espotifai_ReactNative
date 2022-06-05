import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import LinearGradientView from '@core/presentation/layouts/LinearGradientView'
import { Formik } from 'formik';

import styles from './index.styles'
import InputText from '@core/presentation/components/InputText'
import Boton from '@core/presentation/components/boton'
import { StackNavigationProp } from '@react-navigation/stack';

interface ILoginProps{
  navigation: StackNavigationProp<any, any>
}

class Login extends Component <ILoginProps> {

  constructor(props: ILoginProps){
    super(props);
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
            validate={(values)=>{
              const errors = {
                  email: '',
                  password: '',
              };

              if(!values.email){
                errors.email='Campo obligatorio';
              }

              if(!values.password){
                errors.password='Campo obligatorio'
              }

              return errors;
            }}
            initialValues={ { email: '', password: '' } }
            onSubmit={(values) => console.log(values)}
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
                  onBlur={handleBlur('password')}
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