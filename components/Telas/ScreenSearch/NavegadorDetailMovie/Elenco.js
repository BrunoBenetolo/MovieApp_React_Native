import React,{useContext} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardAthor from '../../../items/CardAthor';
import { MovieContext } from '../../../contexts/MovieContext';

export default function Elenco() {
    const {movie} = useContext(MovieContext);

    const dados = movie.casts;

    const renderItem = ({item}) => {
        return(
            <CardAthor dados={item}/>
        );
    }
    
    return (
        <View style={styles.conteudo}>
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        flexGrow:1,
        width:'100%',
        paddingTop: 30,
        backgroundColor: '#242A32',
    }
});