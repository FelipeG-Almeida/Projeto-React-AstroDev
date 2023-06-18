import styled from "styled-components";

export const CardProduto = styled.div`
    background-color: #FFF;
    border: 2px solid #171717;
    border-radius: .4em;
    display: flex;
    flex-direction: column;
    height: 20em;
    transition: 0.25s all;
    &:hover {
        border-color: #436ae5;
        transform: scale(1.05)
    }
`
export const ImagemProduto = styled.img`
    border-radius: .4em .4em 0 0;
    height: 50%;
    width: 100%;
`
export const TextoProduto = styled.p`
    color: #000;
    font-size: 9pt;
    height: 1.5em;
    text-align: left;
    margin: 1em 0 .5em 1.5em;
`

export const TextoPreco = styled.p`
    color: #000;
    font-size: 10pt;
    text-align: left;
    font-weight: 700;
    margin: 1em 1.5em;
`

export const ButtonProduto = styled.button`
    background-color: #000;
    border: none;
    border-radius: .25em;
    color: #FFF;
    font-family: 'Montserrat',sans-serif;
    height: 52px;
    margin-left: 1.5em;
    padding: .75em;
    transition: .25s all;
    width: 75%;
    &:hover {
        background-color: ${props => (props.clicked ? '#32CD32' : '#436ae5')};
        cursor: pointer;
    }
`
