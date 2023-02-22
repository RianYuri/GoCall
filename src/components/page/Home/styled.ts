import React from "react";
import {keyframes} from "styled-components";
import styled from "styled-components";

export const Main = styled.main`
  background-color: #37b874;
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const LogoAnimation = keyframes`
0%{
transform: translateX(500px);
}
50%{
  transform: translateX(0);

}
70%{
  transform: translateX(0);


}
100%{
  transform: translateY(-10000px);

}
`

export const Figure = styled.figure`
  height: 100%;
  margin: 0%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  animation:${LogoAnimation} 5s ease-in-out  forwards alternate;
`;
export const DivAnimation = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
 display: flex;
 align-items: flex-end;
 justify-content: center;
`;

