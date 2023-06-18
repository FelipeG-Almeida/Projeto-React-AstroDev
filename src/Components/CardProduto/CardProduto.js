import React, { useState } from 'react';
import {
	CardProduto,
	ImagemProduto,
	TextoProduto,
	TextoPreco,
	ButtonProduto,
} from './Style';

export default function Produto(props) {
	const [clicked, setClicked] = useState(false);

	const addCarrinho = () => {
		props.addItem(props.nome, props.preco);
		setClicked(true);
		setTimeout(() => {
			setClicked(false);
		}, 1000);
	};

	return (
		<CardProduto>
			<ImagemProduto src={props.imagem} />
			<TextoProduto>{props.nome}</TextoProduto>
			<TextoPreco>{'R$ ' + props.preco + ',00'}</TextoPreco>
			<ButtonProduto clicked={clicked} onClick={addCarrinho}>
				{clicked ? 'Produto Adicionado' : 'Adicionar ao Carrinho'}
			</ButtonProduto>
		</CardProduto>
	);
}
