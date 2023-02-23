import { InputForm } from "./styled";

const Inputs: React.FC<{
  type: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value:string;
  error:boolean
  
}> = (props) => {
  return (
    <InputForm
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      error={props.error}
    />
  );
};

export default Inputs;
