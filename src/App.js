import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Carrinho from './Components/Carrinho/Carrinho';
import Aside from './Components/Aside/Aside';
import Produtos from './Components/Produtos/Produtos';
import Footer from './Components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }
    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    h2 {
        margin: 0;
    }
`

const Main = styled.main`
    background-color: #171717;
    box-sizing: border-box;
    display: grid;
    flex-grow: 2;
    grid-template-columns: 268px 1fr 0;
    padding-bottom: 1em;
    @media screen and (max-width: 767px) {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`

function App() {

    const [minimo, setMinimo] = useState(0)
    const [maximo, setMaximo] = useState(0)
    const [nomeProduto, setNomeProduto] = useState("")
    const [filtro, setFiltro] = useState(false)
    const [ordenacao, setOrdenacao] = useState(1)
    const [carrinho, setCarrinho] = useState(false)
    const [itensCarrinho] = useState(localStorage.getItem('carrinho'))
    const [itens, setItens] = useState(itensCarrinho ? JSON.parse(itensCarrinho) : [])

    const handleMinimo = (event) => {
        setMinimo(event.target.value)
    }

    const handleMaximo = (event) => {
        setMaximo(event.target.value)
    }

    const handleNomeProduto = (event) => {
        setNomeProduto(event.target.value.toLowerCase())
    }

    const handleOrdenacao = (event) => {
        setOrdenacao(event.target.value)
    }

    const showCarrinho = () => {
        setCarrinho(!carrinho)
    }

    const addItem = (nome, preco) => {

        const copiaCarrinho = [...itens]
        const item = copiaCarrinho.find((produto) => produto.nome === nome)

        if (!item) {
            copiaCarrinho.push({ nome: nome, preco: preco, quantidade: 1 })
        } else {
            item.quantidade++
        }

        setItens(copiaCarrinho)
    }

    const removeItem = (nome) => {

        const copiaCarrinho = [...itens]
        const item = copiaCarrinho.find((produto) => produto.nome === nome)

        if (item.quantidade > 1) {
            item.quantidade--
            setItens(copiaCarrinho)
        } else {
            const arrayFiltered = copiaCarrinho.filter((produto) => produto.nome !== nome)
            setItens(arrayFiltered)
        }
    }

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(itens));
    }, [itens]);

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Cabecalho
                showCarrinho={showCarrinho}></Cabecalho>
            <Main>
                <Aside
                    minimo={minimo} handleMinimo={handleMinimo}
                    maximo={maximo} handleMaximo={handleMaximo}
                    nomeProduto={nomeProduto} handleNomeProduto={handleNomeProduto}
                    setFiltro={setFiltro} handleOrdenacao={handleOrdenacao}>
                </Aside>
                <Produtos
                    maximo={maximo}
                    minimo={minimo}
                    filtro={filtro}
                    ordenacao={ordenacao}
                    nomeProduto={nomeProduto}
                    addItem={addItem}>
                </Produtos>
                <Carrinho
                    carrinho={carrinho}
                    showCarrinho={showCarrinho}
                    itens={itens}
                    removeItem={removeItem}>
                </Carrinho>
            </Main>
            <Footer></Footer>
        </>

    );
}

export default App;
