import styled from 'styled-components'
import backgroundHeaderDetalhes from '../../../img/headerdetalhes.png'

export const Header=styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-image: url(${backgroundHeaderDetalhes});
    background-color: #f6bd20;
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;
    opacity: 0.7;
    :hover{
        opacity: 1;
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
