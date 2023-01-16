import React from "react";
import { CardProduto, ImagemProduto, TextoProduto, TextoPreco, ButtonProduto } from "./Style";

export default function Produto (props) {

    const addCarrinho = () => {
        props.addItem(props.nome, props.preco)
    }

    return (
    <CardProduto>
        <ImagemProduto src={props.imagem}/>
        <TextoProduto>{props.nome}</TextoProduto>
        <TextoPreco>{"R$ " + props.preco + ",00"}</TextoPreco>
        <ButtonProduto onClick={addCarrinho}>Adicionar ao Carrinho</ButtonProduto>
    </CardProduto>
    )
}
