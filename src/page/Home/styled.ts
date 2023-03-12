import {keyframes} from "styled-components";
import styled from "styled-components";

export const Main = styled.main`
  background-color: #37b874;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: hidden;
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

export const DivAnimation = styled.img`
 animation:${LogoAnimation} 5s ease-in-out  forwards alternate;
width: 200px;
height: 200px;
`;

