import { useState } from "react";
import { Main, H4Start, InputName, ArticlePage, ButtonNext } from "./styled";

const Page01 = () => {
  const [enteredName, setEnteredName] = useState("");
  console.log(enteredName);
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
        <ButtonNext>Avançar</ButtonNext>
      </ArticlePage>
    </Main>
  );
};

export default Page01;
