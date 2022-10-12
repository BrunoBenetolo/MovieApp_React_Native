import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ApiKey from '../../Services/ApiKey';
import Card from './Card';
import { MovieContext } from '../contexts/MovieContext';

export default function ListaTopViews() {
    const [MoviesTopViews, setMoviesTopViews] = useState([]);
    useEffect(() => {
        const loadList = async () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey()}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(json => {
                setMoviesTopViews(json);
            });
        loadList();
    }, []);

    const { getTMDBInfo } = useContext(MovieContext);
    const renderItem = ({ item }) => {

        return (
            <Card onPress={() => getTMDBInfo(item.id, true)} item={item} />
        );
    }

    return (
        <View style={styles.componente}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={MoviesTopViews.results}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    componente: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#242A32',
    }
});

