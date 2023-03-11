import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import {
  ArticleCheckbox,
  ArticleText,
  ButtonReset,
  CheckBoxRemember,
  FormReset,
  H1,
  LabelRemember,
  Main,
  Paragraph,
  Results,
  Section,
} from "./styled";

const Page03 = () => {
  const [resultMetabolism, setResultMetabolism] = useState<number>();
  interface MyObject {
    enteredInputAge: number;
    enteredInputWeight: number;
    enteredInputHeight: number;
    enteredInputGender: string;
    enteredInputPhysicalActivity: string;
  }

  const [myValue, setMyValue] = useState<MyObject>();
  useEffect(() => {
    const myFormValue = firebase.database().ref("/myForm");
    myFormValue.on("value", (snapshot) => {
      setMyValue(snapshot.val());
    });
  }, []);

  const {
    enteredInputWeight: Weight = 0,
    enteredInputHeight: Height = 0,
    enteredInputAge: Age = 0,
    enteredInputGender: Gender,
  } = myValue ?? {};
useEffect(() => {
  
  const genderCoefficient =
    Gender === "masculino" ? 5 : Gender === "feminino" ? -161 : 0;
  setResultMetabolism(() =>
    Math.round(10 * Weight + 6.25 * Height - 5 * Age + genderCoefficient)
  );
}, [myValue])





  return (
    <Main>
      <Section>
        <H1>
          Aqui está o seu <br /> resultado
        </H1>
        <ArticleText>
          <Paragraph>
            Seu <b>metabolismo basal </b>é de:<br/>
            <Results>{resultMetabolism} Calorias.</Results>
          </Paragraph>
          <Paragraph>
            Para <b>manter o seu peso</b> você precisa consumir em média:<br/>
            <Results>{resultMetabolism} Calorias.</Results>
          </Paragraph>
          <Paragraph>
            Para <b>perder peso</b> você precisa consumir em média:<br/>
            <Results>
              {resultMetabolism ? resultMetabolism - 400 : ""} Calorias.
            </Results>
          </Paragraph>
          <Paragraph>
            Para <b>ganhar peso</b> você precisa consumir em média:<br/>
            <Results>
              {resultMetabolism ? resultMetabolism + 400 : ""} Calorias.
            </Results>
          </Paragraph>
        </ArticleText>
      </Section>
      <FormReset>
        <ArticleCheckbox>
          <CheckBoxRemember type="checkbox" />
          <LabelRemember>Lembrar das minhas informações</LabelRemember>
        </ArticleCheckbox>

        <ButtonReset>Reiniciar</ButtonReset>
      </FormReset>
    </Main>
  );
};

export default Page03;
