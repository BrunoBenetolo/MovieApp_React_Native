import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


export default function CardAthor({ dados }) {
    return (
        <View style={styles.conteudo}>
            <View style={styles.wrpImageUsuario}>
                <ImageBackground style={styles.imageUsuario} resizeMode={'cover'} source={{ uri: `https://image.tmdb.org/t/p/w500${dados.profile_path}` }} borderRadius={100}/>
            </View>
            <Text style={styles.nameAthor}>{dados.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        height:130,
        backgroundColor: '#242A32',
        flexDirection: 'column',
    },
    wrpImageUsuario: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#fff',
        marginBottom:5

    },
    imageUsuario: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    nameAthor: {
        color: '#fff',
        fontSize:16,
        fontWeight: 'bold'
    }

});