import {
    AgeH4,
  CardContainer,
  CardInformation,
  HistoricContainer,
  HistoricHistorico,
  HistoricSeu,
  MainCards,
  NameAge,
  NameH4,
} from "./styled";

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
            <AgeH4>22
                 Anos</AgeH4>
          </NameAge>
        </CardInformation>
      </CardContainer>
    </MainCards>
  );
};
