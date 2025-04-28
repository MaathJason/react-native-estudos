import { Image, ScrollView, StatusBar, StyleSheet, Text,View } from "react-native";
import {Ionicons} from '@expo/vector-icons';


export default function ProfileScreen({route}){

    const {cliente} = route.params; // Recebendo o cliente como parâmetro da rota

    return(
        <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#D9D9D9" />
            <View style={{backgroundColor:'#D9D9D9', width:'100%', height: 200,position:'absolute'}}>

            </View>
            <View style={{alignItems: 'center',marginVertical: 20,marginTop:'20%'}}>
                 <Image
                  source={{uri:'https://media.licdn.com/dms/image/v2/D4D03AQFB7YnIlhWIng/profile-displayphoto-shrink_800_800/B4DZXYvaS9HIAo-/0/1743098063756?e=1749686400&v=beta&t=pOHiu957EKkXpB3g1bGPYwJ5VG5bLVbQkzrTUsN0fCE'}}
                  style={{width:201,height:201,borderRadius:100,borderColor:'#FFFFFF',borderWidth:12}}
                 />
            </View>
            <View style={{alignItems: 'center',flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:24,color:'#1F284E',fontWeight:600}}>{cliente.nome}<Ionicons
                name="create-outline" size={21}
                /></Text>
                <View>
                    <Text>email</Text>
                </View>

                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    texto:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    }
})