import React, {useState, useEffect} from 'react';
import {Container, Title} from './styles';
import {FlatList} from 'react-native';

import api from '../../services/api';

import Pokedex from '../../components/Pokedex';


export default function Home(){
    const [pokemons, setPokemons] = useState([]);

    let numColumns = 3;

    useEffect(() => {
        async function loadPokemons(){
            const response = await api.get("pokemon")
            setPokemons(response.data.results);
            console.log(response.data.results)
        }
        loadPokemons();
    }, [])

    return(
        <Container>

            <FlatList 
                data={pokemons}
                renderItem={({item}) => <Pokedex data={item} />}
                numColumns={numColumns}
            />
        </Container>
    )
}