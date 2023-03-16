import { useState } from "react";
import { Main, H4Start, InputName, ArticlePage, ButtonNext } from "./styled";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useNavigate } from "react-router-dom";
import { HistoricCards } from "../../components/HistoricCards/HistoricCards";
let cardlistHelper = [];
const Page01 = () => {


  const [enteredName, setEnteredName] = useState("");
  const [saveCard, setSaveCard] = useState()
 
  
const navigate = useNavigate()

  const myValueRef = firebase.database().ref("myValue");
  const handleNextClick = async () => {
    if (enteredName !== "") {
      myValueRef.set(enteredName);
      console.log(myValueRef)
      navigate('/page02')
    }
  };

  return (
    <Main>
      <H4Start>
        Para começar <aside />
        como podemos te chamar?
      </H4Start>
      <ArticlePage>
        <InputName
          placeholder="Digite o seu nome"
          onChange={(e) => setEnteredName(e.target.value)}
        />
        <ButtonNext onClick={handleNextClick}>Avançar</ButtonNext>
      </ArticlePage>
      <HistoricCards></HistoricCards>
    </Main>
  );
};

export default Page01;
