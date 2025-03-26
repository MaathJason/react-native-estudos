import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Input from '../../components/TextInput/';

export default function LoginScreen({navigation}){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authLogin = () => {
        if (email === 'teste@logus.com' && password === 'Teste'){
            alert('Login efetuado com sucesso');
        } else {
            alert('Email ou senha invalidos');
        }
    }

    return(
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
        />
        <Image
        source={require('../../assets/images/imageLogin.png')}
        style={styles.imageLogin}
        />
        <Text style={styles.title}>Acessar minha conta</Text>
        <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#A7A7A7" style={styles.icon} />
            <Input
            onChangeText={setEmail}
            value={email}
            placeholder='Digite seu email...'
            keyboardType='email-address'
            />
        </View>
        <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#A7A7A7" style={styles.icon} />
            <Input
            onChangeText={setPassword}
            value={password}
            placeholder='Digite sua senha...'
            secureTextEntry={false}
            />
        </View>
        <TouchableOpacity
         onPress={() => navigation.navigate('Register')}
        >
            <Text style={styles.registerText}>Não tem uma conta? 
                <Text style={styles.registerLink}> crie uma</Text>
            </Text>
        </TouchableOpacity>
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
    },
    logo:{
        width: 125,
        height: 26,
        resizeMode: "contain",
        marginBottom: 24,
    },
    imageLogin:{
        width: 356,
        height: 328,
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
        marginBottom: 15,
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