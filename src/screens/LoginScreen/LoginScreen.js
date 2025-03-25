import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function LoginScreen({navigation}){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authLogin = () => {
        if (email === 'teste@logus.com' && password === 'Teste'){
            navigation.navigate('Home');
            alert('Login efetuado com sucesso');
        } else {
            alert('Email ou senha invalidos');
        }
    }

    return(
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../../assets/logoLogin.png')}
        />
        <Image
        source={require('../../assets/imageLogin.png')}
        style={styles.imageLogin}
        />
        <Text style={styles.title}>Acessar minha conta</Text>
        <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#A7A7A7" style={styles.icon} />
            <TextInput
            keyboardType='email-address'
            onChange={setEmail}
            placeholder='Digite seu email...'
            value={email}
            style={styles.input}
            ></TextInput>
        </View>
        <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#A7A7A7" style={styles.icon} />
            <TextInput
            onChange={setPassword}
            value={password}
            secureTextEntry={true}
            keyboardType='password'
            placeholder='Digite sua senha...'
            style={styles.input}
            ></TextInput>
        </View>
        <Text style={styles.registerText}>Não tem uma conta? 
            <Text style={styles.registerLink}> crie uma</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={authLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    logo:{
        width: 120,
        height: 40,
        resizeMode: "contain",
        marginBottom: 20,
    },
    imageLogin:{
        width: 250,
        height: 250,
        resizeMode: "contain",
        marginBottom: 20,
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        color: "#1F284E",
        marginBottom: 10,
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
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: 45,
      },
      registerText: {
        color: "#929292",
        marginTop: 10,
      },
      registerLink:{
        color: "#1F284E",
        fontWeight: "bold",
      },
      button:{
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