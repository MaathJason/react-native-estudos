import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

export default function Home({navigation}){

    
    return(
        <View style={styles.container}>
            <Text>Bem vindo!</Text>
            <TouchableOpacity
             style={styles.button}
             onPress={() => navigation.navigate('Login')}
            >   
                <Text style={styles.buttonText}>Pular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    button:{
        color: '#fff',
        backgroundColor:'#EF8108',
        width: '90%',
        height: 47,
        borderRadius: 15,
        padding: 12,
        marginTop: 10,
        alignItems: 'center',
      },
      buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        padding:1,
      }
})