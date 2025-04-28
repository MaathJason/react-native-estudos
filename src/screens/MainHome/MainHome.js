import { useRoute } from "@react-navigation/native";
import { StatusBar, StyleSheet, Text,View } from "react-native";
import MapView, {Marker} from 'react-native-maps';

export default function MainHome(){

    const route = useRoute();
    const { cliente } = route.params;

    return(
        <View style={styles.container}>
            <StatusBar/>
            <MapView
            initialRegion={{
                latitude: -23.5505,
                longitude: -46.6333,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,}}
            showsUserLocation={true}
            style={{flex: 1}}
            showsMyLocationButton={true}
            >
                <Marker
                    coordinate={{latitude: -23.6315, longitude: -46.7856}}
                    image={require('../../assets/images/marker.png')}
                    
                />
             </MapView>
            <View style={styles.containerCard}>
                    <Text style={{fontSize:22,color:'#1F284E',fontWeight:600,marginTop:36}}>Para onde vamos ?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerCard:{
        backgroundColor: '#fff',
        width: '100%',
        height:'50%',
        alignItems: 'center',
    }
})