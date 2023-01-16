import styled from "styled-components";

export const Modal = styled.div`
    background-color: #F13A08;
    border-radius: .4em;
    height: 26em;
    transform: translateX(-310px);
    padding: 1.5em;
    position: sticky;
    top: 144.875px;
    width: 250px;
`

export const Header = styled.div`
    align-items: center;
    display: flex;
`

export const CloseButton = styled.img`
    height: 32px;
    margin-right: 2em;
`

export const Title = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
    text-transform: uppercase;
`

export const Lista = styled.ul`
    color: #FFF;
    height: 330px;
    list-style: none;
    overflow: auto;
    padding: 0;
    padding-right: 12px;
`

export const ItemCarrinho = styled.div`
    align-items: center;
    display: flex;
    border-bottom: 1px solid #FFF;
    height: 40px;
    margin: .5em 0;
    justify-content: space-between;
`

export const ItemTexto = styled.p`
    font-size: 0.75rem;
    margin: 0;
    width: 80%;
`

export const BotaoExcluir = styled.button`
    border: none;
    border-radius: 5px;
    font-weight: 600;
    height: 25px;
    transition: .25s all;
    width: 25px;
    &:hover {
        cursor: pointer;
        background-color: #000;
        color: #FFF;
    }
`
