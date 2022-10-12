import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Keyboard, Alert } from 'react-native';
import IconButton from './IconButton';


export default function SearchBar({ onChangeText, onPressSearchIcon, onClick, editable }) {
    const [textoBuscado, setTextoBuscado] = useState('');
    const limpar = () => setTextoBuscado('');
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.componente}>
                <View style={styles.conteudo}>
                    <TextInput
                        style={styles.input}
                        placeholder='Pesquisar filmes e séries'
                        placeholderTextColor='#67686D'
                        onChangeText={text => {
                            setTextoBuscado(text);
                            onChangeText(text);
                        }}
                        value={textoBuscado}
                        editable={editable}
                    />
                    <IconButton name='search' onPressButton={onPressSearchIcon} color='#67686D' style={{ position: 'absolute', right: 15 }} />
                </View>
            </View>
        </TouchableOpacity>





    );
}

const styles = StyleSheet.create({
    componente: {
        width: '100%',
        height: 40,
        backgroundColor: '#242A32',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0
    },
    conteudo: {
        width: '90%',
        height: '100%',
        paddingHorizontal: 30,
        backgroundColor: '#3A3F47',
        borderRadius: 12,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '100%',
        color: '#67686D',
        paddingVertical: 7,
        paddingHorizontal: 15,
        fontSize: 16
    },
    botao: {
        position: 'absolute',
        right: 15,
        flex: 1,
        backgroundColor: '#3A3F47',
    },
    icone: {
        color: '#67686D',
        fontSize: 32,
    }
});