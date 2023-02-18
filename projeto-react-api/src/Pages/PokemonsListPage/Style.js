import styled from "styled-components";

export const Body = styled.section`
    background-color: #5E5E5E;
    color: white;
    padding: 60px 30px;
`

export const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 55px;
`

export const PokemonsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px 20px;
`
