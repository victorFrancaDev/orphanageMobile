import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE  } from 'react-native-maps';
import mapMarker from '../images/map-marker.png'
import { Feather } from '@expo/vector-icons'

export default function OrphanagesMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion = {{
          latitude:-22.7651958,
          longitude:-43.454839,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        <Marker
          calloutAnchor={{
            x:2.7,
            y:1.1
          }}
          icon={mapMarker}          
          coordinate={{
            latitude:-22.7651958,
            longitude:-43.454839
          }}
        >
          <Callout tooltip={true}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Orfanato</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}> 2 Orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}}>
          <Feather name="plus" size={20} color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    calloutContainer: {
        width: 160,
        height: 60,
        borderRadius: 16,
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center'
    },
    calloutText: {
        color: '#0089a5',
        fontSize: 14,
        fontFamily: "Nunito_700Bold"
    },
  
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
    
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    
        elevation: 3
    },
    footerText: {
        color: '#8fa7b3',
        fontFamily: "Nunito_700Bold"
    },
    createOrphanageButton:{
        width: 56,
        height: 56,
        backgroundColor: "#15c3d6",
        borderRadius:20,
        justifyContent: "center",
        alignItems:"center"
    }
  });