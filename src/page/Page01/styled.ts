import styled from "styled-components";

export const Main = styled.main`
  background-color: #f3f3f3;
  width: 100%;
  height: 100vh;
  margin:0% ;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const H4Start = styled.h4`
  width: 260px;
  height: 46px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 18px;
  margin:0% ;
  color: #2c2c2c;
padding: 65px 50px 0px 0px;
  &::first-line{
   width: 10px;
  }
`;
export const ArticlePage = styled.article`
width: 100%;
display: flex;
align-content: center;
justify-content: center;
flex-direction: column;
padding-top: 20px;
flex-wrap: wrap;
gap: 10px;
`

export const InputName = styled.input`
border-radius: 8px;
width: 290px;
height: 43px;
border: none;
padding-left: 3%;
font-family: 'Poppins';
font-weight: 100;
font-size: 12px;
&::placeholder{
color: #969CB3;

}
`
export const ButtonNext = styled.button`
background: #37B874;
border-radius: 5px;
height: 39px;
border: none;
cursor: pointer;
color: white;
`