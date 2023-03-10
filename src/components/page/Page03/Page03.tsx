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
  interface MyObject {
    enteredInputAge: number;
    enteredInputWeight: number;
    enteredInputHeight: number;
    enteredInputGender: string ;
    enteredInputPhysicalActivity: string ;
  }

  const [myValue, setMyValue] = useState<MyObject>();
  useEffect(() => {
    const myFormValue = firebase.database().ref("/myForm");
    myFormValue.on("value", (snapshot) => {
      setMyValue(snapshot.val());
    });
  }, []);

  console.log(myValue?.enteredInputAge)
let Weight = myValue?.enteredInputWeight ?? 0;
let Height = myValue?.enteredInputHeight ?? 0;
let Age = myValue?.enteredInputAge ?? 0;

let HomensTMB = Math.round((Weight * 13.75) + (5 * Height) - (6.76 * Age) + 66.5);
console.log(HomensTMB)
  return (
    <Main>
      <Section>
        <H1>
          Aqui está o seu <br /> resultado
        </H1>
        <ArticleText>
          <Paragraph>
            Seu <b>metabolismo basal </b>é de: 
            <Results>

            {HomensTMB} Calorias.
            </Results>
          </Paragraph>
          <Paragraph>
            Para <b>manter o seu peso</b> você precisa consumir em média:
          </Paragraph>
          <Paragraph>
            Para <b>perder peso</b> você precisa consumir em média:
          </Paragraph>
          <Paragraph>
            Para <b>ganhar peso</b> você precisa consumir em média:
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
