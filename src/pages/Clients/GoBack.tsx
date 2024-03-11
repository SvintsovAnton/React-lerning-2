import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { ButtonControl } from "./styles";
import Button from "components/Button/Button";

function GoBack() {
  const navigate = useNavigate();

  const goBackPage = () => {
    navigate("/clients");
  };

  return (
    <>
      <ButtonControl>
        <Button name="Go back" onClick={goBackPage} />
      </ButtonControl>
    </>
  );
}

export default GoBack;
