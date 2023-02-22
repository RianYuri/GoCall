import { InputForm } from "./styled";

const Inputs: React.FC<{
  type: string;
  placeholder: string;
  // onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = (props) => {
  return (
    <InputForm
      type={props.type}
      placeholder={props.placeholder}
      // onChange={props.onChange}
    />
  );
};

export default Inputs;
