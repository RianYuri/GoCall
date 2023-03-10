import {useState, useEffect} from "react";
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
  Section,
} from "./styled";

const Page03 = () => {
  const [myValue, setMyValue] = useState("Carregando...");
  useEffect(() => {
      const myFormValue = firebase.database().ref("/myForm");
      myFormValue.on("value", (snapshot) => {
        setMyValue(snapshot.val());
      });
    }, []);
    console.log(myValue.enteredInputAge)

  return (
    <Main>
      <Section>
        <H1>
          Aqui está o seu <br /> resultado
        </H1>
        <ArticleText>
          <Paragraph>
            Seu <b>metabolismo basal </b>é de:
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
