import styled from "styled-components";

export const TagHeader=styled.header`
    display: flex;
    justify-content: ${(props)=>{
      if(props.elementos.length === 3){
        return "space-between"
      } else {
        return "start"
      }
    }};
    align-items: center;
    max-width: 100vw;
    min-height: 11vh;

    h1 {
        font-family: 'Pokemon Solid', sans-serif;
        font-size: 40px;
        font-weight: 100;
        font-size: 35px;
        margin-left: ${(props)=>{
          if(props.elementos.length === 2){
            return "35%"
          } else {
            return "0"
          }
    }};


        color: ${(props)=>{
        if(props.type === "electric"){
            return "#FFF700"
        }
        else if (props.type === "water"){
            return "#005570"
        }
        else if (props.type === "fire"){
            return "#ff5e20"
        }
        else if (props.type === "grass"){
            return "#104810"
        }
        else if (props.type === "fairy"){
            return "#e75e7c"
        }
        else if (props.type === "flying"){
            return "#7758d5"
        }
        else if (props.type === "fighting"){
            return "#600904"
        }
        else if (props.type === "poison"){
            return "#620562"
        }
        else if (props.type === "psychic"){
            return "#c1265f"
        }
        else if (props.type === "ice"){
            return "#0aa1a1"
        }
        else if (props.type === "dark"){
            return "#48250d"
        }
        else if (props.type === "dragon"){
            return "#3e1f89"
        }
        else if (props.type === "steel"){
            return "#7d7d93"
        }
        else if (props.type === "ghost"){
            return "#462d70"
        }
        else if (props.type === "ground"){
            return "#b59335"
        }
        else if (props.type === "bug"){
            return "#958d00"
        }
        else if (props.type === "rock"){
            return "#816902"
        }
        else if  (props.type === "normal") {
            return "#6456278a" 
        }
        else{
            return "white"
        }
    }}

    }

    background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#EE99AC"
        }
        else if (props.type === "flying"){
            return "#A890F0"
        }
        else if (props.type === "fighting"){
            return "#b31d15"
        }
        else if (props.type === "poison"){
            return "#A040A0"
        }
        else if (props.type === "psychic"){
            return "#F85888"
        }
        else if (props.type === "ice"){
            return "#7ED9D9"
        }
        else if (props.type === "dark"){
            return "#62412a"
        }
        else if (props.type === "dragon"){
            return "#7445e5"
        }
        else if (props.type === "steel"){
            return "#B8B8D0"
        }
        else if (props.type === "ghost"){
            return "#705898"
        }
        else if (props.type === "ground"){
            return "#E0C068"
        }
        else if (props.type === "bug"){
            return "#c7c154"
        }
        else if (props.type === "rock"){
            return "#B8A038"
        }
        else if  (props.type === "normal") {
            return "#9f8f5bd1" 
        }
        else{
            return "#68A090"
        }
    }}

`
export const Botao=styled.button`
    margin: 0 20px;
    height: 5vh;
    padding: 0 2vh;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    background-color: white;
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#e75e7c"
        }
        else if (props.type === "flying"){
            return "#7758d5"
        }
        else if (props.type === "fighting"){
            return "red"
        }
        else if (props.type === "poison"){
            return "#620562"
        }
        else if (props.type === "psychic"){
            return "#c1265f"
        }
        else if (props.type === "ice"){
            return "#0aa1a1"
        }
        else if (props.type === "dark"){
            return "#48250d"
        }
        else if (props.type === "dragon"){
            return "#3e1f89"
        }
        else if (props.type === "steel"){
            return "#7d7d93"
        }
        else if (props.type === "ghost"){
            return "#462d70"
        }
        else if (props.type === "ground"){
            return "#b59335"
        }
        else if (props.type === "bug"){
            return "#958d00"
        }
        else if (props.type === "rock"){
            return "#816902"
        }
        else if  (props.type === "normal") {
            return "#6456278a" 
        }
        else{
            return "#white"
        }
    }};

    :hover{
        color: white;
        transition: .5s ease-in-out;
        background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#e1702e"
        }
        else if (props.type === "water"){
            return "#005570"
        }
        else if (props.type === "fire"){
            return "#ff5e20"
        }
        else if (props.type === "grass"){
            return "#104810"
        }
        else if (props.type === "fairy"){
            return "#e75e7c"
        }
        else if (props.type === "flying"){
            return "#7758d5"
        }
        else if (props.type === "fighting"){
            return "#600904"
        }
        else if (props.type === "poison"){
            return "#620562"
        }
        else if (props.type === "psychic"){
            return "#c1265f"
        }
        else if (props.type === "ice"){
            return "#0aa1a1"
        }
        else if (props.type === "dark"){
            return "#48250d"
        }
        else if (props.type === "dragon"){
            return "#3e1f89"
        }
        else if (props.type === "steel"){
            return "#7d7d93"
        }
        else if (props.type === "ghost"){
            return "#462d70"
        }
        else if (props.type === "ground"){
            return "#b59335"
        }
        else if (props.type === "bug"){
            return "#958d00"
        }
        else if (props.type === "rock"){
            return "#816902"
        }
        else if  (props.type === "normal") {
            return "#6456278a" 
        }
        else{
            return "#white"
        }
    }};
    }
`
export const ButtonIcones=styled.button`
    margin: 0 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;

    :hover {
        transition: .5s ease-in-out;
        color: ${(props)=>{
        if(props.type === "electric"){
            return "#FFF700"
        }
        else if (props.type === "water"){
            return "#005570"
        }
        else if (props.type === "fire"){
            return "#ff5e20"
        }
        else if (props.type === "grass"){
            return "#104810"
        }
        else if (props.type === "fairy"){
            return "#e75e7c"
        }
        else if (props.type === "flying"){
            return "#7758d5"
        }
        else if (props.type === "fighting"){
            return "#600904"
        }
        else if (props.type === "poison"){
            return "#620562"
        }
        else if (props.type === "psychic"){
            return "#c1265f"
        }
        else if (props.type === "ice"){
            return "#0aa1a1"
        }
        else if (props.type === "dark"){
            return "#48250d"
        }
        else if (props.type === "dragon"){
            return "#3e1f89"
        }
        else if (props.type === "steel"){
            return "#7d7d93"
        }
        else if (props.type === "ghost"){
            return "#462d70"
        }
        else if (props.type === "ground"){
            return "#b59335"
        }
        else if (props.type === "bug"){
            return "#958d00"
        }
        else if (props.type === "rock"){
            return "#816902"
        }
        else if  (props.type === "normal") {
            return "#6456278a" 
        }
        else{
            return "#white"
        }
    }};

    }
`