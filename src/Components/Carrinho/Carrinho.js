import { Modal, Header, CloseButton, Title, Lista, ItemCarrinho, ItemTexto, BotaoExcluir } from "./Style"
import closeIcon from "../../Assets/Images/close.png"

export default function Carrinho(props) {

    const removerCarrinho = (nome) => {
        props.removeItem(nome)
    }

    const total = props.itens.reduce((a, b) => {
        return a + (b.quantidade * +b.preco)
    }, 0)

    if (!props.carrinho) {
        return null
    } else {
        return (
            <Modal>
                <Header>
                    <CloseButton onClick={props.showCarrinho} src={closeIcon} alt="Fechar Carrinho" />
                    <Title>Carrinho</Title>
                </Header>
                <Lista>
                    {props.itens.map((produto) => {
                        return (
                            <li>
                                <ItemCarrinho key={produto.nome}>
                                    <ItemTexto>{produto.nome} ({produto.quantidade})</ItemTexto>
                                    <BotaoExcluir onClick={() => removerCarrinho(produto.nome)}>X</BotaoExcluir>
                                </ItemCarrinho>
                            </li>
                        )
                    })}
                </Lista>
                <Title>Total: R$ {total}</Title>
            </Modal>
        )
    }
}
