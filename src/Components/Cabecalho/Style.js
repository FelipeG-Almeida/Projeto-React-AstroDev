import styled from 'styled-components';

export const Header = styled.header`
	align-items: center;
	background-color: #171717;
	display: flex;
	justify-content: center;
	padding: 0.75em 2em;
	@media screen and (max-width: 1023px) {
		flex-direction: column;
	}
`;

export const Figura = styled.figure`
	align-items: center;
	display: flex;
	margin: 0;
    @media screen and (max-width: 424px) {
        justify-content: space-evenly;
    }
`;

export const Logo = styled.img`
	margin-right: 2em;
    @media screen and (max-width: 424px) {
        margin: 0;
    }
`;

export const Titulo = styled.h1`
	color: #ffffff;
	font-size: 3rem;
	font-weight: 700;
	margin: 0;
	text-transform: uppercase;
	width: 50%;
    @media screen and (max-width: 424px) {
        font-size: 1.75em;
    }
`;

export const Menu = styled.ul`
	align-items: center;
	column-gap: 1em;
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
    @media screen and (max-width: 767px) {
        justify-content: center;
    }
`;

export const ItensMenu = styled.li`
	border-radius: 12px;
	color: #ffffff;
	display: inline-block;
	font-size: 1rem;
	padding: 12px;
	transition: 0.3s all;
	white-space: nowrap;
	&:hover {
		background-color: #436ae5;
		cursor: pointer;
	}
`;

export const Carrinho = styled.div`
	align-items: center;
	border-radius: 12px;
	color: #ffffff;
	display: flex;
	font-size: 1rem;
	padding: 10px;
	margin-left: 4em;
	transition: 0.3s all;
	&:hover {
		background-color: #436ae5;
		cursor: pointer;
	}
	
    @media screen and (max-width: 767px) {
        margin: 0;
    }
`;

export const CarrinhoImg = styled.img`
	margin-left: 16px;
	width: 30px;
`
