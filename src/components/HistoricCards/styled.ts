import styled from "styled-components";

export const MainCards = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 66px;
`

export const HistoricContainer = styled.article`
display: flex;
align-items: center;
justify-content: center ;
width: 100%;
align-items: flex-start;

`

export const HistoricSeu = styled.div`
width: 48px;
height: 33px;
background: #FFFFFF;
font-family: 'Poppins';
font-weight: 700;
font-size: 18px;
color: #2C2C2C;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right:4px ;

`
export const HistoricHistorico = styled.div`
padding-left:4px ;
display: flex;
justify-content: flex-start;
align-items: center;
width: 96px;
height: 33px;

background: #37B874;
font-family: 'Poppins';
font-weight: 700;
font-size: 18px;
color: #FFFFFF;
`

export const CardContainer = styled.article`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 8px;
width: 100%;
height: 100%;
padding-top:24px ;
flex-direction: column;

`
export const CardInformation = styled.div`
padding: 12px 8px;
width: 326px;
height: 60px;
background: #FFFFFF;
border-radius: 5px;
`
export const NameAge = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;

`
export const NameH4 = styled.h4`
width: 104px;
height: 23px;
font-family: 'Poppins';
font-weight: 600;
font-size: 19px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
color: #2C2C2C;
margin: 0%  ;
`
export const AgeH4 = styled.h4`
width: 80px;
height: 20px;
font-family: 'Poppins';
font-weight: 500;
font-size: 14px;
color: #5B5B5B;
margin: 0%;
&::first-line{
    font-size: 18px;
  }
`
export const WeightResults = styled.article`
display: flex;
width: 100%;
align-items: center;
height: 100%;
justify-content: space-between;
`

export const WeightHeight = styled.div`
display: flex;
align-items: center;
gap: 14px;
`
export const PWeiHei = styled.p`
font-family: 'Poppins';
font-weight: 500;
font-size: 12px;
color: #969CB2;
`
export const SeeResults = styled.p`
width: 108px;
font-family: 'Poppins';
font-size: 12px;
font-weight: 500;
text-align: right;

color: #37B874;
`
export const IconResults = styled.img`

`
export const ResultsContainer = styled.div`
display: flex;
margin: 0%;
gap: 4px;
`