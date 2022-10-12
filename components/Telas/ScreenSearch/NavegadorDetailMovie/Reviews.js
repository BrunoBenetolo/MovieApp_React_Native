import React,{useContext} from 'react';
import { StyleSheet,Text, View, FlatList } from 'react-native';
import CardReviewMovie from '../../../items/CardReviewMovie';
import { MovieContext } from '../../../contexts/MovieContext';


export default function Review() {
    const { movie } = useContext(MovieContext);

    let dados =[];
    dados =  movie.reviews;

    const renderItem = ({ item }) => {
        return (
            <CardReviewMovie dados={item} />
        );
    }
    return (
        <View style={styles.conteudo}>
            {dados[0]==null?<Text style={styles.coment}>Nenhum review adicionado ainda</Text> :
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={1}
                showsVerticalScrollIndicator={false}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        flexGrow:1,
        backgroundColor: '#242A32',
    },
    coment:{
        flexGrow:1,
        marginVertical:60,
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});