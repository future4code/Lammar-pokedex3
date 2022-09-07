import styled from "styled-components";
import backgroundHeaderDetalhes from "../../../img/headerdetalhes.png"

export const Header=styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 99vw;
    height: 10vh;
    background-color: #f6bd20;
    h1 {
        font-family: 'Pokemon Solid', sans-serif;
        color: #395A9F;
        font-size: 40px;
        font-weight: 100;
    }

`
export const ButtonIcones=styled.button`
    margin: 0 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
    size: 40px;
    :hover{
        color: #ed6005;
        transition: .5s ease-in-out;
    }
`
export const Button=styled.button`
    margin: 0 20px;
    height: 5vh;
    padding: 0 2vh;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    background-color: white;
    color: #db6805;
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    :hover{
        color: white;
        background-color: #f77a0f;
        transition: .5s ease-in-out;
    }
`

export const DivDetalhes=styled.div`
    display: flex;
    max-height: 90vh;
    width: 99vw;
    flex-direction: column;
    flex-wrap: wrap;
    background-image: url(${backgroundHeaderDetalhes});
    background-size: contain;
    background-position-x: 99%;
    background-repeat: no-repeat;
    background-color: #f6bd208f;

`
export const DivImagens=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 20%;
    img{
        width: 25vh;
        :hover{
            color: black;
            -webkit-transform: scale(1.3);
             transform: scale(1.3);
             transition: .6s ease;
        }
    }

    h1{
        font-family: 'Rajdhani', sans-serif;
        color: white;
    }
`

export const DivImagemFrontal=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
    width: 80%;
    border: 2px solid white;
    margin-bottom: 5vh;
    border-radius: 15px;
    background-color: #f6bd20;
`

export const DivImagemCostas=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
    width: 80%;
    border: 2px solid white;
    border-radius: 15px;
    background-color: #f6bd20;
`

export const DivDados=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    height: 75vh;
    width: 20%;
    border: 2px solid white;
    border-radius: 15px;
    background-color: #f6bd20;
    

    h1{
        font-family: 'Rajdhani', sans-serif;
        color: white;
        text-align: center;
    }

    p{
        font-family: 'Rajdhani', sans-serif;
        margin-left: 20px;
        font-size: 25px;
        color: #395A9F;
    }
    
`

export const DivTipos=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;
    width: 20%;
    border: 2px solid white;
    border-radius: 10px;
    background-color: #f6bd20;

    p{
        margin-left: 10px;
        font-family: 'Rajdhani', sans-serif;
        font-size: 25px;
        color: #395A9F;
        text-align: center;
    }
`

export const DivMovimentos=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    height: 55vh;
    width: 20%;
    border: 2px solid white;
    border-radius: 15px;
    background-color: #f6bd20;

    h1{
        font-family: 'Rajdhani', sans-serif;
        text-align: center;
        color: white;
    }
    p{
        font-family: 'Rajdhani', sans-serif;
        font-size: 25px;
        color: #395A9F;
        text-align: start;
        margin: 2px 30%;
    }
`
