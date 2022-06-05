import React, { useState } from 'react'
import { View, ActivityIndicator, TextInput, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AIcon from 'react-native-vector-icons/AntDesign';

import styles from './index.styles';

export interface ISerchTextProps {
  isLoading: boolean;
  cancelHandle(): void;
  searchHandle(text: string): void;
}

const SearchText: React.FunctionComponent<ISerchTextProps> = (props: ISerchTextProps) => {

  const [text, setText] = useState<string>('');

  const onChangeText = (value: string) =>{
    setText(value);
    props.searchHandle(value);
  }

  const onCancel = () => {
    setText('');
    props.cancelHandle();
  }

  return (
    <View style = { styles.container }>
      <View style={styles.iconoContainer}>
        <Icon name='search' size={15} />
      </View>
      <View style={styles.textContainer}>
        <TextInput 
          placeholder='Encuentra una canción increible...'
          style = { styles.textInput }
          value = { text }
          onChangeText = { onChangeText }
        />
      </View>
      { props.isLoading && 
      <View style = { styles.cancelarContainer }>
        <ActivityIndicator 
          size={20}
        />
    </View>
      }
      { !props.isLoading &&
      <TouchableWithoutFeedback
        onPress={ onCancel }
      >
        <View style = { styles.cancelarContainer }>
            <AIcon name="close" size={20}/>
        </View>
      </TouchableWithoutFeedback>
      }
    </View>
  )
}

export default SearchText