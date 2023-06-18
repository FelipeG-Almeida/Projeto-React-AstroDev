import { Principal } from "./Style";
import Produto from "../CardProduto/CardProduto";
import ListaProdutos from "../../Produtos.json"

export default function Produtos (props) {

    const { maximo, minimo, filtro, ordenacao, nomeProduto } = props

    return (
        <Principal>
            {
                ListaProdutos.filter((produto) => {
                    if (maximo !== 0 && filtro) {
                        return produto.preco >= +minimo && produto.preco <= +maximo
                    }
                    else { return produto }
                })
                    .filter((produto) => {
                        if (nomeProduto !== "" & filtro) {
                            return produto.nome.toLowerCase().includes(nomeProduto)
                        }
                        else { return produto }
                    })
                    .sort((a, b) => {
                        // eslint-disable-next-line eqeqeq
                        if (ordenacao == 1) {
                            return +a.preco - +b.preco;
                        } else {
                            return +b.preco - +a.preco
                        }
                    })
                    .map((produto) => {
                        return (
                            <Produto
                                key={produto.nome}
                                nome={produto.nome}
                                preco={produto.preco}
                                imagem={produto.imagem}
                                addItem={props.addItem}>
                            </Produto>)
                    })
            }
        </Principal>
    )
}
