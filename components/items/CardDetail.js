import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import InfoMovieonCard from '../items/InfoMovieonCard';


export default function CardDetail({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.componente} onPress={onPress}>
            <View style={styles.wrpImage}>
                <ImageBackground
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    style={styles.imagemFundo}
                    imageStyle={styles.imagemFundo}
                />
            </View>
            <View style={styles.wrpInfos}>
                <View style={styles.titleCard}>
                    <Text style={styles.textTitle}>{item.title}</Text>
                </View>
                <View style={styles.infosMovie}>
                    <InfoMovieonCard
                        info={item.vote_average}
                        iconName={'star-outline'}
                        size={16}
                        color={'#FF8700'}
                    />
                    <InfoMovieonCard
                        info={item.genres[0].name}
                        iconName={'ios-film-outline'}
                        size={16}
                        color={'#FFf'}
                    />
                    <InfoMovieonCard
                        info={item.release_date}
                        iconName={'calendar-sharp'}
                        size={16}
                        color={'#FFf'}
                    />
                    <InfoMovieonCard
                        info={ `${item.runtime} min`}
                        iconName={'time-outline'}
                        size={16}
                        color={'#FFf'}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    componente: {
        width: '100%',
        height: 180,
        backgroundColor: '#242A32',
        flexDirection: 'row'
    },
    wrpImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 15
    },
    imagemFundo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 10
    },
    wrpInfos: {
        flex: 1,
        marginVertical: 15,
        backgroundColor: '#242A32',
    },
    infosMovie: {
        marginVertical:10
    },
    textTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});