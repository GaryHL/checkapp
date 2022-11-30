import styled from "styled-components";

export const CardGlobal = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 80%;
    height: 100px;
    border-radius: 5px;
    display: flex;
    flex-wrap: nowrap;
    background-color: grey;
    border-radius: 10px;
    
    
`
export const Cajas = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: solid #5B6DCD 2px;
    vertical-align: middle;
    padding: 2px;
    font-size: 35%;
    font-weight: bold;
    border-radius: 5px;
    float: left;

`
export const CajasCategorias = styled.div`
    width: 100%;
    border: solid #5B6DCD 2px;
    vertical-align: middle;
    padding: 4px;
    font-size: 30%;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;
`
export const Cajasimagen = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
    border: solid red 2px;
`
export const Categorias = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: solid black 2px;
    vertical-align: middle;
    padding: 2px;
    font-size: 50%;
    font-weight: bold;
    display: flex;
    flex-wrap: nowrap;
`
export const Imagen = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
border-radius: 40%;
`
export const EstrellasA = styled.div`
display: flex;
color: yellow;
    .estrellasN{
        color: black;
    }
`
