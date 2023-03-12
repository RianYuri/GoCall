import { Form } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  background-color: #f3f3f3;
  width: 100%;
  height: 100vh;
  margin: 0%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Section = styled.section`
  width: 90%;
  height: 85%;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
export const H1 = styled.h1`
  &::first-line {
    color: #2c2c2c;
  }
  width: 100%;
  height: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #37b874;
  margin-left: 0%;
  line-height: 105%;
`;
export const Results = styled.b`
  font-family: 'Poppins';
font-weight: 700;
font-size: 18px;
color: #37B874;
margin: 0%;
`
export const ArticleText = styled.article`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Paragraph = styled.p`
  font-family: "Poppins";
  font-weight: 200;
  font-size: 19px;
  color: #2c2c2c;
  margin: 0%;
`;

export const FormReset = styled.form`
  width: 90%;
  height: 20%;
  padding: 0px 20px 0px 20px;
`;

export const CheckBoxRemember = styled.input`
  width: 18px;
  height: 17px;
  &[type="checkbox"] {
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    border: 1.5px solid #1D9F5A;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none; /* remove a borda ao clicar */
    cursor: pointer;
  }
  
  &[type="checkbox"]:checked::before {
    content: "";

    display: block;
    background-color:#37B874;
    width: 16px;
    height: 15px;
}
`;
export const LabelRemember = styled.label`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 14px;
  color: #040404;
`;

export const ButtonReset = styled.button`
  background: #37b874;
  border-radius: 5px;
  height: 56px;
  width: 100%;
  border: none;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  text-align: center;

  margin-top: 20px;

  color: #ffffff;
`;
export const ArticleCheckbox = styled.article`
  display: flex;
  padding-bottom: 5px;
`;
