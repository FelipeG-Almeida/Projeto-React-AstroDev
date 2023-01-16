import styled from "styled-components";

export const Filtros = styled.aside`
    background-color: #F13A08;
    border-radius: .4em;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    height: 26em;
    margin-left: 1em;
    padding: 1.5em;
    position: sticky;
    top: 144.875px;
`

export const Titulo = styled.h2`
    color: #FFF;
    text-transform: uppercase;
`
export const Label = styled.label`
    font-size: 11pt;
    padding-top: 1em;
    padding-bottom: .5em;
    color: #FFF;
`

export const Select = styled.select`
    border: none;
    border-radius: .75em;
    color: #000;
    font-family: 'Montserrat',sans-serif;
    font-size: 11pt;
    padding: .5em 1em;
    &:focus {
        outline: none;
    }
`

export const Input = styled.input`
    border: none;
    border-radius: .75em;
    color: #000;
    font-family: 'Montserrat',sans-serif;
    font-size: 11pt;
    padding: .5em 1em;
    &:focus {
        outline: none;
    }
`
export const Botão = styled.button`
    border: none;
    border-radius: .75em;
    color: #000;
    font-family: 'Montserrat',sans-serif;
    font-size: 11pt;
    margin-top: 1em;
    padding: .5em 1em;
    transition: .25s all;
    &:hover {
        cursor: pointer;
        background-color: #000;
        color: #FFF;
    }
`
