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
  height: 100%;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 70px;
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
export const ParagraphEnergy = styled.p`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 19px;
  color: #2c2c2c;
  margin: 0%;
`;
export const ArticleText = styled.article`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
`;
export const ArticlePage = styled.article`
  width: 100%;
  height: 60%;
`;

export const FormPage = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
interface IInputs {
  error: boolean;
  borderError:boolean;
}

export const SelectForm = styled.select`
  border: 1px solid ${({ error }: IInputs) => (error ? "#FF6347" : "#FFFFFF")};
  background: #ffffff;
  border-radius: 5px;
  height: 56px;
  width: 99%;
  padding-left: 4.6%;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  color:  ${({ borderError }: IInputs) => (borderError ? "black" : "#969cb3")};
`;

export const OptionForm = styled.option`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  color: black;
  &[value=""][disabled] {
    color: #969cb3;
  }
`;
export const ButtonCalc = styled.button`
  background: #37b874;
  border-radius: 5px;
  height: 56px;
  width: 100%;
  border: none;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`;
export const ButtonBack = styled.button`
  background: #f3f3f3;
  border-radius: 5px;
  height: 56px;
  color: #37b874;
  width: 100%;
  border: none;
  font-family: "Poppins";
  font-weight: 400;
  padding-bottom: 25px;
`;
