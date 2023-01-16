import { FooterSection, Header, Logo, Title } from "./Style";
import logo from '../../Assets/Images/logo.png'

export default function Footer() {
    return (
        <FooterSection>
            <Header>
                <Logo src={logo}/>
                <Title>ASTRODEV SHOP</Title>
            </Header>
            <div>
                <h4>Projeto Front-End React</h4>
                <p>Feito com ♥️ na Labenu por Felipe</p>
            </div>
        </FooterSection>
    )
}
