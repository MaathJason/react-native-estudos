import React from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Input from '../../components/TextInput/';
import Button from '../../components/Button/';
import { TextInputMask } from 'react-native-masked-text';

export default function RegisterScreen({navigation}){
    return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer} >
                    <Image
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                    />
                    <Image
                    source={require('../../assets/images/megaph.png')}
                    style={styles.imageLogin}
                    />
                    <Text style={styles.title}>Criar minha conta</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#A7A7A7" style={styles.icon} />
                        <Input
                        placeholder='Digite seu nome...'
                        keyboardType='default'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="#A7A7A7" style={styles.icon} />
                        <Input
                        placeholder='Digite seu email...'
                        keyboardType='email-address'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#A7A7A7" style={styles.icon} />
                        <Input
                        placeholder='Digite sua senha...'
                        keyboardType='default'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="document-text-outline" size={20} color="#A7A7A7" style={styles.icon} />
                        <Input
                        placeholder='Digite seu CPF...'
                        keyboardType='number-pad'
                        
                        />
                    </View>
                    <Button
                    Text="Criar minha conta"
                    />
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollContainer:{
        flexGrow:1,
        justifyContent: 'space',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: '#fff',
        width: '100%',
    },
    logo:{
        width: 125,
        height: 26,
        resizeMode: "contain",        
    },
    imageLogin:{
        width: 250,
        height: 200,
        resizeMode: "contain",
        marginBottom: 24,
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        color: "#1F284E",
        marginBottom: 24,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "90%",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 15,
      },
})