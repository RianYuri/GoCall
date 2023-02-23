import styled from "styled-components";

interface IInputs{
error:boolean
}


export const InputForm = styled.input`
background: ${({error}:IInputs)=> error? '#FF6347' : '#FFFFFF'};
border-radius: 5px;
height: 56px;
width: 94%;
border: 0;
font-family: 'Poppins';
font-weight: 400;
font-size: 14px;
color: black;
padding-left:5% ;
&::placeholder{
    color: #969CB3;
}
`
