import { InputProps } from "./types";
import {
  InputComponentContainer,
  InputComponentLabel,
  InputComponent,
} from "./styles";

function Input({
  id,
  name,
  placeholder,
  label,
  type = "text",
  disabled,
}: InputProps) {
  return (
    <InputComponentContainer>
      <InputComponentLabel htmlFor={id}>{label}</InputComponentLabel>
      <InputComponent
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
    </InputComponentContainer>
  );
}

export default Input;
