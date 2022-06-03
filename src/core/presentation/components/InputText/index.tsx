import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

import styles from './index.styles';

const InputText: React.FunctionComponent = () => {
  return (
    <View style = { styles.container }>
      <View style={styles.iconoContainer}>
        <Icon name='search' size={15} />
      </View>
      <View style={styles.textContainer}>
        <TextInput 
          placeholder='Encuentra una canción increible...'
          style = { styles.textInput }
        />
      </View>
      <TouchableWithoutFeedback>
        <View style = { styles.cancelarContainer }>
            <Icon name="close" size={20}/>
        </View>
      </TouchableWithoutFeedback>
    </View>
/*     <TextInput
      placeholder='Busca una canción increible...'
      style = { styles.container }
    /> */
  )
}

export default InputText