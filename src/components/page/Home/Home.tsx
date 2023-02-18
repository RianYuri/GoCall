
import { Main, Figure } from "./styled";
import goCall from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  setTimeout(() => {
    Navigate("/page01");
  }, 5000);

  return (
    <Main>
      <Figure>
        <img src={goCall} />
       
      </Figure>
    </Main>
  );
};

export default Home;
