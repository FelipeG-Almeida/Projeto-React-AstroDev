import styled from 'styled-components'
import background from '../../Assets/Images/background.png'

export const Header = styled.header`
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: flex-start;
    padding: .75em 2em;
    position: sticky;
    top: 0;
    z-index: 2;
`

export const Figura = styled.figure`
    align-items: center;
    display: flex;
    margin: 0;
`

export const Logo = styled.img`
    margin-right: 1em;
    height: 80px;
`

export const Titulo = styled.h1`
    color: #FFFFFF;
    font-weight: 700;
    text-transform: uppercase;
    width: 50%;
`

export const Menu = styled.ul`
    align-items: center;
    column-gap: 1em;
    display: flex;
    list-style-type: none;
    padding: 0;
`

export const ItensMenu = styled.li`
    border-radius: 1em;
    color: #FFFFFF;
    display: inline-block;
    font-size: 1em;
    padding: 1em;
    transition: .3s all;
    &:hover {
        color: #000;
        background-color: #FFF;
        cursor: pointer;
    }
`

export const Carrinho = styled.img`
    border: 1px solid #FFF;
    border-radius: 100%;
    padding: .5em;
    margin-left: 4em;
    width: 25px;
    &:hover {
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(41%) sepia(81%) saturate(2108%) hue-rotate(353deg) brightness(100%) contrast(107%);
    }
`
