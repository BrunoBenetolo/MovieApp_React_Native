import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import IconButton from '../../items/IconButton';
import { MovieContext } from '../../contexts/MovieContext';
import { WatchedContext } from '../../contexts/WatchedContext';
import CardDetail from '../../items/CardDetail';
import ApiKey from '../../../Services/ApiKey';

export default function Assistidos({ navigation }) {
    const [focada, setFocada] = useState(0);
    const { retornaListaAssistidos } = useContext(WatchedContext);
    const { getTMDBInfo } = useContext(MovieContext);
    const [listaAssistidos, setListaAssistidos] = useState([]);
    const [listaCards, setListaCards] = useState([]);
    let vetorFilmes = [];

    function atualizaLista() {
        let vetor = retornaListaAssistidos();
        setListaAssistidos(vetor);
    }

    const fetchFilmes = async (id) => {
        if (id != null) {
            vetorFilmes = []
            const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey()}&language=pt-BR&page=1`)
                .then(res => res.json())
                .then(json => {
                    const { id, title, overview, release_date, runtime, poster_path, backdrop_path, genres, vote_average } = json;
                    const movieDados = {
                        id, title, overview, release_date, runtime, poster_path, backdrop_path, genres, vote_average
                    };
                    vetorFilmes.push(movieDados);
                })
        }
    }
    useEffect(() => {
        if(listaAssistidos.length>0){
            listaAssistidos.forEach(async filme => {
                await fetchFilmes(filme);
                setListaCards(vetorFilmes);
            })
        }else{
            setListaCards([]);

        }
        
    }, [focada]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            atualizaLista();
            setFocada(1);
        });
        return setFocada(0);
    }, [navigation, focada]);

    const renderItem = ({ item }) => {
        return (
            <CardDetail item={item} onPress={() => getTMDBInfo(item.id, true)} />
        );
    }
    return (
        <View style={styles.conteudo}>
            <View style={styles.vistaSuperior}>
                <View style={styles.wrpTextoSuperior}>
                    <IconButton
                        name='chevron-back-outline'
                        color='#fff'
                        onPressButton={() => {
                            navigation.goBack();
                        }}
                    />
                    <Text style={styles.textoSuperior}>Assistidos</Text>
                    <IconButton />

                </View>
            </View>
            <View style={styles.vistaInferior}>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={listaCards}
                        extraData={focada}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ alignItems: 'center' }}
                    />
                </View>
            </View>
        </View>

    );
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
        flex: .5,
        backgroundColor: '#242A32',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 25,
    },
    textoSuperior: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    wrpBarraPesquisa: {
        flex: 1,
        backgroundColor: '#242A32',
        alignItems: 'center',
        justifyContent: 'center',

    },
    vistaInferior: {
        width: '100%',
        flex: 4,
        backgroundColor: '#242A32'
    },
    icone: {
        color: '#67686D',
        fontSize: 32,
    }

});