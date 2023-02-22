import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { Main, H1,Section } from "./styled";

const Page02 = () => {
  const [myValue, setMyValue] = useState("Carregando...");

  useEffect(() => {
    const myValueRef = firebase.database().ref("/myValue");
    myValueRef.on("value", (snapshot: any) => {
      setMyValue(snapshot.val());
    });
  }, []);

  return (
    <Main>
        <Section>
      <H1>Olá,<br/> {myValue}</H1>
      </Section>
    </Main>
  );
};

export default Page02;
