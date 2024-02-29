import { ButtonComponent } from "./styles";

import { ButtonProps } from "./types";

// Как типизировать props
function Button({
  isRed = false,
  disabled = true,
  name,
  type = "button",
  onClick = () => {},
}: ButtonProps) {
  return (
    <ButtonComponent
      isRed={isRed}
      disabled={disabled}
      className="button-component"
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
