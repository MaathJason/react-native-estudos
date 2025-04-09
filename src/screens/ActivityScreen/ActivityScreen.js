import { StyleSheet, Text,View } from "react-native";

export default function ActivityScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Ola</Text>
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
    texto:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    }
})