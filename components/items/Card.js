import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';


export default function Card({ item, onPress }) {
    return (
        <View style={styles.componente}>
            <TouchableOpacity style={{ flex: 1 }} onPress={onPress} >
                <ImageBackground
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    style={styles.imagemFundo}
                    imageStyle={styles.imagemFundo}
                    resizeMode={'contain'}
                    borderRadius={15}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    componente: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 100,
        backgroundColor: '#242A32',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,

    },
    imagemFundo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 100,
    }
});