
import { Main,DivAnimation } from "./styled";
import goCall from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const Navigate = useNavigate();
  setTimeout(() => {
    Navigate("/page01");
  }, 5000);

  return (
    <Main>
        <DivAnimation src={goCall} />
    </Main>
  );
};

export default Home;
