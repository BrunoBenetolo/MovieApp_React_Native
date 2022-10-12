import React, { useState, createContext, useContext } from 'react';
import ApiKey from '../../Services/ApiKey'
import { useNavigation } from '@react-navigation/native';
import { WatchedContext } from './WatchedContext';
export const MovieContext = createContext({});

function MovieProvider({ children }) {
    const [movie, setMovie] = useState({});
    const navigation = useNavigation();

    function retornaMovie(){
        return movie;
    }


    async function fetchAll(urls) {
        try {
            const data = await Promise.all(urls.map(url => fetch(url)));
            const ext = await Promise.all(data.map(res => res.json()));
            const ary = [];
            for (let item of ext) {
                ary.push(item);
            }

            return ary;
        }
        catch {
            console.log('erro')
        }
    }


    
     function getTMDBInfo(id, navegar) {
        if (id != null) {
            const urls = [
                `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey()}&language=pt-BR&page=1`,
                `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${ApiKey()}&language=pt-BR&page=1`,
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey()}&language=en-EN&page=1`
            ]
            const movieCompleto = fetchAll(urls);
            movieCompleto.then((dados) => {
                const { id, title, overview, release_date, runtime, poster_path, backdrop_path, genres, vote_average } = dados[0];
                const {results} = dados[1];
                const {cast}= dados[2];

                const movieShow = {
                    id,
                    title,
                    review: overview,
                    ano: release_date,
                    duracao: runtime,
                    imagem: `https://image.tmdb.org/t/p/w500${poster_path}`,
                    capa: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
                    genero: genres[0].name,
                    rating: vote_average,
                    reviews: results,
                    casts: cast, 
                };
                setMovie(movieShow);

                if(navegar==true){
                    navigation.navigate('Pesquisar',
                        {
                            screen: 'MovieDetail',
                            params: { id: id }
                        })
                }
                
            });  
        }
    }

    return (
        <MovieContext.Provider value={{ getTMDBInfo, movie, retornaMovie }}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;