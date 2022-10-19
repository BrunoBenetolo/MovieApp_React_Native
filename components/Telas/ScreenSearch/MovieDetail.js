import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import InfoMovieonCard from '../../items/InfoMovieonCard';
import NavegadorDetailsMovie from './NavegadorDetailMovie/NavegadorDetailMovies'
import IconButton from '../../items/IconButton';
import Icon from "react-native-vector-icons/Ionicons";

import { MovieContext } from '../../contexts/MovieContext';
import { WatchedContext } from '../../contexts/WatchedContext';
import { useNavigation } from '@react-navigation/native';

export default function MovieDetail({ route }) {
    const id = route.params.id;
    const [assistido, setAssistido] = useState(null);
    const [movie, setMovie] = useState({});
    const movieInfos = useContext(MovieContext).movie;
    const navigation = useNavigation();
    const { verificaAssistido, addAssistido, removerAssistido } = useContext(WatchedContext);



    useEffect(() => {
        verificaAssistido(movieInfos.id) ? setAssistido(true) : setAssistido(false)
        setMovie(movieInfos);
    }, [movieInfos])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <View style={styles.conteudo}>
                <View style={styles.vistaSuperior}>
                    <View style={styles.wrpTextoSuperior}>
                        <IconButton name='chevron-back-outline' onPressButton={() => {
                            navigation.navigate('Pesquisar', { screen: 'ResultadoPesquisa' });
                            
                        }
                        } color='#fff' />
                        <Text style={styles.textoSuperior}>Detalhes</Text>
                        <IconButton name={assistido ? 'bookmark' : 'bookmark-outline'} onPressButton={() => {
                            if (verificaAssistido(id)) {
                                setAssistido(false)
                                removerAssistido(id);
                            } else {
                                setAssistido(true)
                                addAssistido(id)
                            }
                        }} color='#fff' />
                    </View>
                </View>

                <View style={styles.vistaInferior}>

                    <View style={styles.bannerSuperior}>
                        <ImageBackground style={styles.imagemBanner} resizeMode={'cover'} source={{ uri: movie.capa }} />
                        <View style={styles.wrpRating}>
                            <Icon color={'#FF8700'} size={16} name={'star-outline'} />
                            <Text style={styles.textRating}>{movie.rating}</Text>
                        </View>
                    </View>
                    <View style={styles.headerDescription}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.headerCard}>
                                <ImageBackground
                                    source={{ uri: movie.imagem }}
                                    style={styles.headerCardImage}
                                    imageStyle={styles.headerCardImage}
                                />

                            </View>
                            <Text style={styles.headerTitle}>{movie.title}</Text>
                        </View>
                        <View style={styles.infosMovie}>
                            <InfoMovieonCard color={'#67686D'} size={16} iconName='calendar-sharp' info={movie.ano} />
                            <Text style={{ color: '#67686D', fontWeight: 'bold', fontSize: 22, paddingHorizontal: 10 }}>|</Text>
                            <InfoMovieonCard color={'#67686D'} size={16} iconName='time-outline' info={movie.duracao + ' min'} />
                            <Text style={{ color: '#67686D', fontWeight: 'bold', fontSize: 22, paddingHorizontal: 10 }}>|</Text>
                            <InfoMovieonCard color={'#67686D'} size={16} iconName='ios-film-outline' info={movie.genero} />
                        </View>
                    </View>
                    <View style={styles.navegadorDetailsMovie}>
                        <NavegadorDetailsMovie id={id} />
                    </View>

                </View>
            </View >
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        width: '100%',
        backgroundColor: '#242A32',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vistaSuperior: {
        width: '100%',
        flex: 1,
        backgroundColor: '#242A32'
    },
    wrpTextoSuperior: {
        flex: 1,
        backgroundColor: '#242A32',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 25,
    },
    textoSuperior: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    vistaInferior: {
        width: '100%',
        flex: 8,
        backgroundColor: '#242A32'
    },
    bannerSuperior: {
        flex: 3,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    imagemBanner: {
        flex: 1,
        width: '100%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        backgroundColor: '#242A32',

    },
    headerDescription: {
        flex: 2,
        paddingTop: 10
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '40%'
    },
    headerCard: {
        position: 'absolute',
        top: -100,
        left: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        width: 100,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,
    },
    headerCardImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        width: 100,
        borderRadius: 15
    },
    infosMovie: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navegadorDetailsMovie: {
        flex: 5,
        backgroundColor: '#242A32',

    },
    wrpRating: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242A32',
        borderRadius: 25,
        width: 65,
        height: 25
    },
    textRating: {
        color: '#ff8700',
        marginLeft: 10
    }

});