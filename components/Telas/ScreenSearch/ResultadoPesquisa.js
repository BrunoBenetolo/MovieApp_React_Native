import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { MovieContext } from '../../contexts/MovieContext'
import SearchBar from '../../items/SearchBar';
import CardDetail from '../../items/CardDetail'
import IconButton from '../../items/IconButton';
import ApiKey from '../../../Services/ApiKey';

export default function Pesquisar({ navigation }) {
    //Estado do texto da caixa de pesquisa.
    const [textoPesquisa, setTextoPesquisa] = useState(null);
    const [executarPesquisa, setExecutarPesquisa] = useState(null);
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const { getTMDBInfo } = useContext(MovieContext);
    const useEffectCustom = (funcao, inputs) => {
        const didMount = useRef(false);
        useEffect(() => {
            didMount.current ? funcao() : didMount.current = true;
        }, [executarPesquisa]);
    }
    useEffectCustom(() => {
        const pesquisar =  () => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey()}&language=pt-BR&query=${encodeURIComponent(textoPesquisa)}&page=1&include_adult=false`)
                .then(res => res.json())
                .then(json => {
                    setResultadoPesquisa(json.results);
                })
        }
        pesquisar();
    }, [executarPesquisa])

    const renderItem = ({ item }) => {
        return (
            <CardDetail item={item} onPress={() => getTMDBInfo(item.id)} />
        );
    }
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <View style={styles.conteudo}>
                <View style={styles.vistaSuperior}>
                    <View style={styles.wrpTextoSuperior}>
                        <IconButton
                            name='chevron-back-outline'
                            color='#fff'
                            onPressButton={() => {
                                setResultadoPesquisa(null);
                                navigation.goBack();
                            }}
                        />
                        <Text style={styles.textoSuperior}>Pesquisar</Text>
                        <IconButton name='filter' onPressButton={() => Alert.alert('infos')} color='#fff' />
                    </View>
                    <View style={styles.wrpBarraPesquisa}>
                        <SearchBar
                            //Função chamada quando o texto da input muda.
                            onChangeText={(texto) => setTextoPesquisa(texto)}
                            //Função executada quando o botão de pesquisar for clicado.
                            onPressSearchIcon={() => {
                                if (textoPesquisa != null) {
                                    setExecutarPesquisa(textoPesquisa);
                                    //executar a pesquisa
                                } else {

                                }
                            }}
                        />
                    </View>

                </View>

                <View style={styles.vistaInferior}>
                    <View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={resultadoPesquisa}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                    </View>


                </View>
            </View >

        </KeyboardAvoidingView>
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