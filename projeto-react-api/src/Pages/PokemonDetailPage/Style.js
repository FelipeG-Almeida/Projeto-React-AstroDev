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

export const Section = styled.section`
    background-color: #5E5E5E;
    background-image: url(${Background});
    background-position: 50% center;
    background-repeat: no-repeat;
    background-size: 1000px;
    color: white;
    padding: 60px 25px;
`
export const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 20px;
`
export const Details = styled.div`
    background-color: ${(props) => typeColor[props.type]};
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: 50% 60.3%;
    background-size: 1000px;
    border-radius: 38px;
    display: grid;
    grid-gap: 30px;
    grid-template: repeat(1fr , 2) / repeat(1fr , 4);
    justify-items: stretch;
    padding: 26px 44px;
`
export const DivImage = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 8px;
    color: black;
    display: flex;
    flex-direction: column;
    grid-row: ${(props) => props.gridRow};
    grid-column: 1;
    min-height: 200px;
    justify-content: center;
    padding: 18px;
    min-width: 200px;
`
export const DivText = styled.div`
    align-items: left;
    background-color: white;
    border-radius: 8px;
    color: black;
    display: flex;
    flex-direction: ${(props) => props.direction};
    flex-wrap: wrap;
    gap: 8px;
    grid-row: ${(props) => props.gridRow};
    grid-column: ${(props) => props.gridColumn};
    min-height: 200px;
    justify-content: flex-start;
    padding: 18px;
`
export const DivTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 10px;
    width: 100%;
`
export const TableText = styled.td`
    border-top: solid 1px #F0F0F0;
    border-bottom: solid 1px #F0F0F0;
    color: #7F7F7F;
    padding: 5px 10px;
    text-align: right;
    white-space: nowrap;
`
export const Move = styled.p`
    background-color: #ECECEC;
    border-radius: 15px;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    height: 45px;
    text-transform: capitalize;
    padding: 10px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: row;
`
export const CardText = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Name = styled.h3`
    font-size: 3rem;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 20px;
    text-transform: capitalize;
`
export const Types = styled.div`
    column-gap: 10px;
    display: flex;
    flex-direction: row;
`
export const Picture = styled.img`
    top: 200px;
    height: 250px;
    position: absolute;
    right: 30px;
    width: 250px;
`
