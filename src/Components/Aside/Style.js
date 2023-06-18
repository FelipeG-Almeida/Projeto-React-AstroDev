import styled from "styled-components";

export const Filtros = styled.aside`
    background-color: #171717;
    border: solid 2px #436ae5;
    border-radius: .4em;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    height: min-content;
    margin-left: 1em;
    min-width: 200px;
    padding: 1.5em;
    position: sticky;
    top: 144.875px;
    @media screen and (max-width: 1023px) {
        top: 32px;
    }
    @media screen and (max-width: 767px) {
        margin-left: 0;
        margin-bottom: 2em;
        position: static;
        width: calc(95% - 52px);
    }
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
    background-color: #232323;
    border: none;
    border-radius: .75em;
    color: #FFF;
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
    background-color: #232323;
    color: #FFF;
    font-family: 'Montserrat',sans-serif;
    font-size: 1rem;
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
        background-color: #436ae5;
        color: #FFF;
    }
`
