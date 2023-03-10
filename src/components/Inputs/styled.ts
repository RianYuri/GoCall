import styled from "styled-components";

interface IInputs{
error:boolean
}


export const InputForm = styled.input`
background:#FFFFFF;
border:1px solid ${({error}:IInputs)=> error? '#FF6347' : '#FFFFFF'} ;
border-radius: 5px;
height: 56px;
width: 94%;
outline: 0;

font-family: 'Poppins';
font-weight: 400;
font-size: 14px;
color: black;
padding-left:5% ;
&::placeholder{
    color: #969CB3;
}
&[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
`
