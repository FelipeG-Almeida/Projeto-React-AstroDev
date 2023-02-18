import { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext"
import { BASE_URL } from "../Constants/url"
import axios from "axios"

export default function GlobalState({ children }) {

    const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem('pokedex')) || [])
    const [pokemons, setPokemons] = useState([])
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        (async function getPokemons() {
            try {
                const pokemonsListResponse = await axios.get(`${BASE_URL}pokemon?limit=51`);
                setPokemonsList(pokemonsListResponse.data.results);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async function showPokemons() {
            const pokemonsInfo = [];
            try {
                await Promise.all(
                    pokemonsList.map(async pokemon => {
                        const pokemonInfoResponse = await axios.get(pokemon.url);
                        pokemonsInfo.push(pokemonInfoResponse.data);
                    })
                );
                setPokemons(pokemonsInfo);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [pokemonsList]);

    useEffect(() => {
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }, [pokedex])

    const states = {
        pokemons,
        pokedex
    };

    const setters = {
        setPokedex
    };

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {children}
        </GlobalContext.Provider>
    );
}
