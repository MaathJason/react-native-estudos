import React from 'react';
import { StyleSheet,View,TextInput, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Input(props){
    return(

        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        maxLength={props.maxLength}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 45,
        color: 'black',
      },
})

