import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Alert } from 'react-native';
import ApiKey from '../../../../Services/ApiKey';
import Card from '../../../items/Card';
import { MovieContext } from '../../../contexts/MovieContext';


export default function Proximos({ navigation }) {
    const [MoviesUpcoming, setMoviesUpcoming] = useState([]);
    useEffect(()=>{
        //consumo da api
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey()}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(json => {
                setMoviesUpcoming(json);
            });
    },[]);

    const { getTMDBInfo } = useContext(MovieContext);
    const renderItem = ({ item }) => {
        return (
            <Card onPress={() => getTMDBInfo(item.id, true)} item={item} />
        );
    }
    return (
        <SafeAreaView style={styles.conteudo}>  
            <FlatList
                data={MoviesUpcoming.results}
                keyExtractor={(item) =>item.id}
                renderItem={renderItem}
                numColumns={3}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    conteudo:{
        flex: 1,
        width: '100%',
        backgroundColor: '#242A32',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop:10
    }
});


