import React, {useContext} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import { MovieContext } from '../../../contexts/MovieContext';

export default function About() {
    const {movie} = useContext(MovieContext);

    return (
        <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>
            <Text  style={styles.infoMovie}>
                {movie.review}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        flexGrow:1,
        backgroundColor: '#242A32',
    },
    infoMovie: {
        flex:1,
        color: '#fff',
        paddingHorizontal: 30,
        marginVertical: 25,
        fontSize: 16,
        fontWeight: '320',
        textAlign: 'justify'
    }
});