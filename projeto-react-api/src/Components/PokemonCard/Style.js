import styled from "styled-components";
import Background from "../../assets/images/cardBackground.svg"

const typeColor = {
    grass: "#729F92",
    fire: "#EAAB7D",
    water: "#71C3FF",
    bug: "#76A866",
    normal: "#BF9762",
    poison: "#7A447B",
    electric: "#C1A62E",
    ground: "#A55B34",
    fairy: "#B970B4"
}

export const Card = styled.div`
    background-color: ${(props) => typeColor[props.type]};
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: right;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 75% 25%;
    height: 180px;
    padding: 25px 23px 13px 23px;
    transition: 0.2s all;
    width: 400px;
    &>div>p{
        font-size: 1rem;
        font-weight: 700;
        line-height: 0.5rem;
    }
    &:hover{
        transform: translateY(-5px) scale(1.005) translateZ(0);
        box-shadow: 0 24px 36px rgba(0,0,0,0.11),
        0 24px 46px ${(props) => typeColor[props.type]};
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
`

export const Name = styled.h4`
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
`

export const Types = styled.div`
    column-gap: 7px;
    display: flex;
`

export const Picture = styled.img`
    position: relative;
    height: 180px;
    left: 15px;
    bottom: 75px;
    width: 180px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    grid-column: 1 / 3;
    justify-content: space-between;
`
