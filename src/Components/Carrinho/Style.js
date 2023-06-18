import styled from 'styled-components';

export const Modal = styled.div`
	background-color: #436ae5;
	border-radius: 0.4em;
	height: 26em;
	transform: translateX(-310px);
	padding: 1.5em;
	position: sticky;
	top: 144.875px;
	width: 250px;
	@media screen and (max-width: 1023px) {
        transform: translateX(0);
		position: fixed;
		top: 50%;
		left: 50%;
        margin-top: -13em;
        margin-left: -125px;
	}
	@media screen and (max-width: 424px) {
		border-radius: 0;
		top: 0;
		left: 0;
		margin: 0;
		height: 100%;
        width: calc(100% - 48px);
	}
`;

export const Header = styled.div`
	align-items: center;
	display: flex;
`;

export const CloseButton = styled.img`
	height: 32px;
	margin-right: 2em;
`;

export const Title = styled.h3`
	color: #fff;
	font-size: 1.5rem;
	margin: 0;
	text-transform: uppercase;
`;

export const Lista = styled.ul`
	color: #fff;
	height: 330px;
	list-style: none;
	overflow: auto;
	padding: 0;
	padding-right: 12px;
	@media screen and (max-width: 424px) {
        height: calc(80% - 48px);
	}
`;

export const ItemCarrinho = styled.div`
	align-items: center;
	display: flex;
	border-bottom: 1px solid #fff;
	height: 40px;
	margin: 0.5em 0;
	justify-content: space-between;
`;

export const ItemTexto = styled.p`
	font-size: 0.75rem;
	margin: 0;
	width: 80%;
`;

export const BotaoExcluir = styled.button`
	border: none;
	border-radius: 5px;
	font-weight: 600;
	height: 25px;
	transition: 0.25s all;
	width: 25px;
	&:hover {
		cursor: pointer;
		background-color: #000;
		color: #fff;
	}
`;
