import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Input from '../../components/TextInput/';
import Button from '../../components/Button/';
import {mask} from 'react-native-mask-text';
import { registerUser } from '../../services/authService.js';

export default function RegisterScreen({navigation}){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf,setCpf] = useState('');
    const [cel,setCel] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


    function removeMask(value) {
        return value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      }
      

    const handleCpfChange = (text) => {
        const masked = mask(text, '999.999.999-99');
        setCpf(masked);
    }
    const handleCelChange = (text) => {
        const masked = mask(text, '(99) 99999-9999');
        setCel(masked);
    }

    const handleSignIn = async ()=>{
        if (!nome || !email || !password || !cpf || !cel ){
            alert('PREENCHA TODOS OS CAMPOS');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('E-mail inválido!');
            return;
        }
    
        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres');
            return;
        }

        const unmaskedCpf = removeMask(cpf);  // Remove a máscara do CPF
        const unmaskedCel = removeMask(cel);  // Remove a máscara do celular

        try {
            const userData = {
                nome,
                email,
                cpf:unmaskedCpf,
                pw: password,
                telefone:unmaskedCel,
            };
            await registerUser(userData);
            alert('Cadastro realizado com sucesso!');
            navigation.navigate('Login');
        } catch (error) {
            console.error ('Erro ao cadastrar', error);
            alert(error || 'Erro ao cadastrar');
        }

    }


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
                        <Ionicons name="person-outline" size={20} color="#A7A7A7" style={styles.icon}
                        />
                        <Input
                        onChangeText={setNome}
                        value={nome}
                        maxLength={50}
                        placeholder='Digite seu nome...'
                        keyboardType='default'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="#A7A7A7" style={styles.icon} />
                        <Input
                        maxLength={70}
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
                        keyboardType='default'
                        maxLength={30}
                        secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                         activeOpacity={1}
                        >
                            <Ionicons name={isPasswordVisible? "eye-outline" : "eye-off-outline"} size={20} color="#A7A7A7" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="call-outline" size={20} color="#A7A7A7" style={styles.icon} />
                        <Input
                        placeholder='Digite seu número de celular...'   
                        keyboardType='number-pad'
                        onChangeText={handleCelChange}
                        value={cel}
                        maxLength={15}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="document-text-outline" size={20} color="#A7A7A7" style={styles.icon} />
                        <Input
                        placeholder='Digite seu CPF...'
                        keyboardType='number-pad'
                        maxLength={14} 
                        onChangeText={handleCpfChange}
                        value={cpf}
                        />
                    </View>
                    <Button
                    onPress={handleSignIn}
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
        width: "100%",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 15,
        maxWidth: 350,
      },
      icon: {
        marginRight: 10,
      },
})