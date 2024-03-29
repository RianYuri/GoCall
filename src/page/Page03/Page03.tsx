import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router-dom";
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
  const keepMyInformation = firebase.database().ref("myInformationIsTrue");


  const [resultMetabolism, setResultMetabolism] = useState<number>();
  const [checkboxSelect, setCheckboxSelect] = useState(false);
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
const navigate = useNavigate()
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
  }, [myValue]);
const ResetButton = () =>{
  navigate("/page01")

  keepMyInformation.set(checkboxSelect)
}

const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setCheckboxSelect(event.target.checked);
}
console.log(checkboxSelect)


  return (
    <Main>
      <Section>
        <H1>
          Aqui está o seu <br /> resultado
        </H1>
        <ArticleText>
          <Paragraph>
            Seu <b>metabolismo basal </b>é de:
            <br />
            {resultMetabolism !== 0 ? (
              <Results>{resultMetabolism} Calorias.</Results>
            ) : (
              <PulseLoader color="#37b874" />
            )}
          </Paragraph>
          <Paragraph>
            Para <b>manter o seu peso</b> você precisa consumir em média:
            <br />
            {resultMetabolism !== 0 ? (
              <Results>{resultMetabolism} Calorias.</Results>
            ) : (
              <PulseLoader color="#37b874" />
            )}
          </Paragraph>
          <Paragraph>
            Para <b>perder peso</b> você precisa consumir em média:
            <br />
            {resultMetabolism !== 0 ? (
              <Results>
                {resultMetabolism ? resultMetabolism - 400 : ""} Calorias.
              </Results>
            ) : (
              <PulseLoader color="#37b874" />
            )}
          </Paragraph>
          <Paragraph>
            Para <b>ganhar peso</b> você precisa consumir em média:
            <br />
            {resultMetabolism !== 0 ? (
              <Results>
                {resultMetabolism ? resultMetabolism + 400 : ""} Calorias.
              </Results>
            ) : (
              <PulseLoader color="#37b874" />
            )}
          </Paragraph>
        </ArticleText>
      </Section>
      <FormReset>
        <ArticleCheckbox>
          <CheckBoxRemember type="checkbox" onChange={handleCheckboxChange} />
          <LabelRemember>Lembrar das minhas informações</LabelRemember>
        </ArticleCheckbox>

        <ButtonReset onClick={ResetButton}>Reiniciar</ButtonReset>
      </FormReset>
    </Main>
  );
};

export default Page03;
