import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Inputs from "../../Inputs/Inputs";
import {
  ArticleText,
  Main,
  H1,
  Section,
  ArticlePage,
  ParagraphEnergy,
  ButtonCalc,
  FormPage,
  ButtonBack,
  SelectForm,
  OptionForm,
} from "./styled";

const Page02 = () => {
  const [myValue, setMyValue] = useState("Carregando...");
const navigate = useNavigate();
  useEffect(() => {
    const myValueRef = firebase.database().ref("/myValue");
    myValueRef.on("value", (snapshot) => {
      setMyValue(snapshot.val());
    });
  }, []);

  return (
    <Main>
      <Section>
        <ArticleText>
          <H1>
            Olá,
            <br /> {myValue}
          </H1>
        </ArticleText>
        <ArticlePage>
          <FormPage>
            <ParagraphEnergy>
              Vamos calcular o seu gasto energético basal!
            </ParagraphEnergy>
            <SelectForm name="Seusexo">
              <OptionForm value="" disabled selected>
                Seu sexo
              </OptionForm>
              <OptionForm value="masculino">Masculino</OptionForm>
              <OptionForm value="feminino">Feminino</OptionForm>
            </SelectForm>
            <Inputs type="text" placeholder="Sua Idade" />
            <Inputs type="text" placeholder="Seu Peso" />
            <Inputs type="text" placeholder="Sua altura(cm)" />
            <SelectForm>
            <OptionForm value="" disabled selected>
            Seu nível de atividade física
              </OptionForm>
              <OptionForm value="alta">Alta</OptionForm>
              <OptionForm value="media">Media</OptionForm>
              <OptionForm value="baixa">Baixa</OptionForm>
         
            </SelectForm>

            <ButtonCalc>Calcular</ButtonCalc>
            <ButtonBack onClick={()=>navigate('/page01')}>Voltar</ButtonBack>
          </FormPage>
        </ArticlePage>
      </Section>
    </Main>
  );
};

export default Page02;
