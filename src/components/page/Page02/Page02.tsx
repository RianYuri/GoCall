import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Inputs from "../../Inputs/Inputs";
import useInput from "../../hooks/InputsValidation";

//Styled-Components
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
  const {
    value: enteredInputAge,
    isValid: setEnteredInputAge,
    hasError: nameInputHasErrorAge,
    valueChangedHandler: ageChangedHandler,
    inputBlurHandler: ageBlurHandler,
    resetInput: resetAgeInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredInputWeight,
    isValid: setEnteredInputWeight,
    hasError: weightInputHasError,
    valueChangedHandler: weightChangedHandler,
    inputBlurHandler: weightBlurHandler,
    resetInput: resetWeightInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredInputHeight,
    isValid: setEnteredInputHeight,
    hasError: heightInputHasError,
    valueChangedHandler: heightChangedHandler,
    inputBlurHandler: heightBlurHandler,
    resetInput: resetHeightInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredInputGender,
    isValid: setEnteredInputGender,
    hasError: genderInputHasError,
    valueChangedHandler: genderChangedHandler,
    inputBlurHandler: genderBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredInputPhysicalActivity,
    isValid: setEnteredInputPhysicalActivity,
    hasError: physicalActivityInputHasError,
    valueChangedHandler: physicalActivityChangedHandler,
    inputBlurHandler: physicalActivityBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const [myValue, setMyValue] = useState("Carregando...");
  const navigate = useNavigate();
  useEffect(() => {
    const myValueRef = firebase.database().ref("/myValue");
    myValueRef.on("value", (snapshot) => {
      setMyValue(snapshot.val());
    });
  }, []);
  const myFormValue = firebase.database().ref("myForm");

  const formGoCall = {
    enteredInputAge,
    enteredInputWeight,
    enteredInputHeight,
    enteredInputGender,
    enteredInputPhysicalActivity,
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    myFormValue.set(formGoCall);
    if (
      setEnteredInputGender &&
      setEnteredInputAge &&
      setEnteredInputWeight &&
      setEnteredInputHeight &&
      setEnteredInputPhysicalActivity
    ) {
      navigate("/page03");
    } else {
      resetAgeInput();
      resetWeightInput();
      resetHeightInput();
    }
  };

  
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
          <FormPage onSubmit={submitHandler}>
            <ParagraphEnergy>
              Vamos calcular o seu gasto energético basal!
            </ParagraphEnergy>

            <SelectForm
              name="Seusexo"
              onChange={genderChangedHandler}
              onBlur={genderBlurHandler}
              value={enteredInputGender}
              error={genderInputHasError}
            >
              <OptionForm value="" disabled selected>
                Seu sexo
              </OptionForm>
              <OptionForm value="masculino">Masculino</OptionForm>
              <OptionForm value="feminino">Feminino</OptionForm>
            </SelectForm>
            <Inputs
              type="number"
              placeholder="Sua Idade"
              onChange={ageChangedHandler}
              value={enteredInputAge}
              onBlur={ageBlurHandler}
              error={nameInputHasErrorAge}
            />
            <Inputs
              type="number"
              placeholder="Seu Peso"
              onChange={weightChangedHandler}
              value={enteredInputWeight}
              onBlur={weightBlurHandler}
              error={weightInputHasError}
            />
            <Inputs
              type="number"
              placeholder="Sua altura(cm)"
              onChange={heightChangedHandler}
              value={enteredInputHeight}
              onBlur={heightBlurHandler}
              error={heightInputHasError}
            />
            <SelectForm
              onChange={physicalActivityChangedHandler}
              onBlur={physicalActivityBlurHandler}
              value={enteredInputPhysicalActivity}
              error={physicalActivityInputHasError}
            >
              <OptionForm value="" disabled selected>
                Seu nível de atividade física
              </OptionForm>
              <OptionForm value="alta">Alta</OptionForm>
              <OptionForm value="media">Media</OptionForm>
              <OptionForm value="baixa">Baixa</OptionForm>
            </SelectForm>

            <ButtonCalc type="submit">Calcular</ButtonCalc>
            <ButtonBack onClick={() => navigate("/page01")}>Voltar</ButtonBack>
          </FormPage>
        </ArticlePage>
      </Section>
    </Main>
  );
};

export default Page02;
