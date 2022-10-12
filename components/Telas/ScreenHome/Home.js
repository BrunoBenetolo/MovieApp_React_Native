import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import SearchBar from '../../items/SearchBar';
import ListaTopViews from '../../items/ListaTopViews';
import NavegadorCategorias from '../ScreenHome/NavegadorAbas/NavegadorCategorias';

export default function HomeScreen({ navigation }) {
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <View style={styles.conteudo}>
                <View style={styles.vistaSuperior}>
                    <View style={styles.wrpTextoSuperior}>
                        <Text style={styles.textoSuperior}>O que você deseja assistir?</Text>
                    </View>

                    <View style={styles.wrpBarraPesquisa}>
                        <SearchBar
                            //Função chamada quando o texto da input muda.
                            onPressSearchIcon={()=>navigation.navigate('Pesquisar',{screen:'ResultadoPesquisa'})}
                            onClick={()=>navigation.navigate('Pesquisar',{screen:'ResultadoPesquisa'})}
                            editable={false}
                        />
                    </View>

                    <View style={styles.wrpListTopViews}>
                        <ListaTopViews navigation={navigation} />
                    </View>
                </View>

                <View style={styles.vistaInferior}>
                    <NavegadorCategorias  navigation={navigation}/>
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
        justifyContent: 'center',
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
    wrpListTopViews: {
        flex: 2,
        backgroundColor: '#242A32',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vistaInferior: {
        width: '100%',
        flex: 1,
        backgroundColor: '#242A32'
    },


});