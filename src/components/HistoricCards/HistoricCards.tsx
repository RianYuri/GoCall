import {
    AgeH4,
  CardContainer,
  CardInformation,
  HistoricContainer,
  HistoricHistorico,
  HistoricSeu,
  IconResults,
  MainCards,
  NameAge,
  NameH4,
  PWeiHei,
  ResultsContainer,
  SeeResults,
  WeightHeight,
  WeightResults,
} from "./styled";
import icon from "../../assets/seeResults.svg"
export const HistoricCards = () => {
  return (
    <MainCards>
      <HistoricContainer>
        <HistoricSeu>Seu</HistoricSeu>
        <HistoricHistorico>histórico</HistoricHistorico>
      </HistoricContainer>

      <CardContainer>
        <CardInformation>
          <NameAge>
            <NameH4>Rian Yuri</NameH4>
            <AgeH4>18
                 Anos</AgeH4>
          </NameAge>
          <WeightResults>
            <WeightHeight>
              <PWeiHei>1,85m</PWeiHei>
              <PWeiHei>67kg</PWeiHei>
            </WeightHeight>
            <ResultsContainer>

            <SeeResults>Veja o resultado</SeeResults>
            <IconResults src={icon}/>
            </ResultsContainer>
          </WeightResults>
        </CardInformation>
        
      </CardContainer>
    </MainCards>
  );
};
