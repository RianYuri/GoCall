import { useState, useEffect } from "react";
import { Main, H4Start, InputName, ArticlePage, ButtonNext } from "./styled";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useNavigate } from "react-router-dom";
import { HistoricCards } from "../../components/HistoricCards/HistoricCards";

const Page01 = () => {


  const [enteredName, setEnteredName] = useState("");
 
 const [myInformationIsTrue, setMyInformationIsTrue] = useState()
  
const navigate = useNavigate()

  const myValueRef = firebase.database().ref("myValue");
  const handleNextClick = async () => {
    if (enteredName !== "") {
      myValueRef.set(enteredName);
      navigate('/page02')
    }
  };
  useEffect(() => {
    const myFormValue = firebase.database().ref("/myInformationIsTrue");
    myFormValue.on("value", (snapshot) => {
      setMyInformationIsTrue(snapshot.val());
    });
  
  }, []);
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
      {myInformationIsTrue ?
      <HistoricCards></HistoricCards> :
      null
      }
    </Main>
  );
};

export default Page01;
