import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { Body, Title, PokemonsList } from "./Style";
import HeaderComponent from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

export default function PokemonsListPage() {

    const { states } = useContext(GlobalContext)

    return (
        <>
            <HeaderComponent
            visibility={"hidden"}
            color={"blue"}
            text={"Pokédex"}/>
            <Body>
                <Title>Todos os Pokémons</Title>
                <PokemonsList>
                    {states.pokemons.map((pokemon) => {
                        return (<PokemonCard key={pokemon.id} pokemon={pokemon} />)
                    })}
                </PokemonsList>
            </Body>
        </>
    )
}
