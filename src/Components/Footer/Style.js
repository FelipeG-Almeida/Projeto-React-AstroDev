import styled from "styled-components";

export const FooterSection = styled.footer`
    background-image: radial-gradient(circle, #111112, #0f0e0f, #0d0b0b, #090807, #050504);
    color: #FFF;
    display: flex;
    justify-content: space-around;
    padding: 3em;
    width: calc(100% - 6em);
    @media screen and (max-width: 1023px) {
		flex-direction: column;
	}
`

export const Header = styled.div`
    align-items: center;
    color: #FFF;
    display: flex;
    flex-direction: column;
`

export const Logo = styled.img`
    width: 74px;
`

export const Title = styled.h3`
    font-size: 2rem;
    margin: 0;
`
