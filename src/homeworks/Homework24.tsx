import { useState, useEffect } from "react";
import {
  CardForJoke,
  Homework23Wrapper,
  ButtonConrol,
  CardConrol,
} from "./styles";
import Button from "components/Button/Button";

function Homework24() {
  const [joke, setJoke] = useState<string>(" ");
  const [usedGetNewJoke, setUsedGetNewJoke] = useState(false);

  const falseMessage: string = "Ошибка при получении данных";
  const trueMessage: string = "Вы получили новую шутку";

  useEffect(() => {
    getJoke();
  }, []);

  const getNewJoke = () => {
    getJoke();
    setUsedGetNewJoke(true);
  };

  useEffect(() => {
    if (usedGetNewJoke) {
      if (joke === falseMessage) {
        alert(falseMessage);
      } else {
        alert(trueMessage);
      }
    }
    setUsedGetNewJoke(false);
  }, [getNewJoke]);

  const getJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error("API error"), { response: result });
      } else {
        setJoke(result.setup + " " + result.punchline);
      }
    } catch (error) {
      setJoke(falseMessage);
    }
  };

  return (
    <>
      <Homework23Wrapper>
        <ButtonConrol>
          <Button name="Get New Joke" onClick={getNewJoke}></Button>
        </ButtonConrol>
        <CardConrol>
          <CardForJoke>{joke}</CardForJoke>
        </CardConrol>
      </Homework23Wrapper>
    </>
  );
}

export default Homework24;
