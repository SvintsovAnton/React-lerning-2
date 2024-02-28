import Button from "components/Button/Button";
import { ButtonConrol, InputConrol } from "./styles";
import Input from "components/Input/Input";

function Homework22() {
  return (
    <div>
      <ButtonConrol>
        <Button type="button" isRed={false} name="Button 1" disabled={false} />
      </ButtonConrol>
      <ButtonConrol>
        <Button type="button" isRed={true} name="Button 2" disabled={false} />
      </ButtonConrol>
      <ButtonConrol>
        <Button type="button" isRed={false} name="Button 3" disabled={true} />
      </ButtonConrol>

      <InputConrol>
        <Input
          name="Input 1"
          disabled={false}
          placeholder="Input 1"
          id="1"
          label=" "
        />
      </InputConrol>
      <InputConrol>
        <Input
          name="Input 2"
          disabled={true}
          placeholder="Input 2"
          id="1"
          label=" "
        />
      </InputConrol>
    </div>
  );
}

export default Homework22;
