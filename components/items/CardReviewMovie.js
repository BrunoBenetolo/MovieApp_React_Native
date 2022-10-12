import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';


export default function CardReviewMovie({dados}) {
    return (
        <View style={styles.conteudo}>
            <View style={styles.perfilUsuario}>
                <View style={styles.wrpImageUsuario}>
                    <ImageBackground style={styles.imageUsuario} source={{ uri: `https://image.tmdb.org/t/p/w500${dados.author_details.avatar_path}` }} borderRadius={100} />
                </View>
                <Text style={styles.rating}>{dados.author_details.rating}</Text>
            </View>
            <View style={styles.wrpInfos}>
                <Text style={styles.nomeUsuario}>{dados.author_details.name?dados.author_details.name:dados.author_details.username }</Text>
                <ScrollView>

                <Text style={styles.reviewUsuario}>{dados.content}</Text>
                </ScrollView>
                
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    conteudo: {
        width: '100%',
        height: 250,
        backgroundColor: '#242A32',
        flexDirection: 'row',
        paddingVertical:10
    },
    perfilUsuario:{
        width:'20%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrpImageUsuario: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 15
    },
    imageUsuario: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 100
    },
    rating:{
        color: '#0296E5',
        fontSize: 16,
        fontWeight: 'bold'
    },
    wrpInfos:{
        width: '80%',
        backgroundColor: '#242A32',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal:20,
        paddingVertical:15
    },
    nomeUsuario:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:5
    },
    reviewUsuario:{
        color: '#fff',
        fontSize: 14,
        fontWeight: '400',
        marginBottom:5
    }
});