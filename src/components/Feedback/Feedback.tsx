import Button from "../Button/Button";

import { FeedbackProps } from "./types";
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCountContainer,
  Count,
  Image,
  ImageControl,
} from "./styles";

function Feedback({
  likes,
  dislikes,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} disabled={false} />
          {/* <ImageControl onClick={onLike}>
            <Image src={Like} alt="Like img" />
          </ImageControl> */}
          <p className="count">{likes}</p>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" onClick={onDislike} disabled={false} />
          <Count>{dislikes}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} disabled={false} />
    </FeedbackWrapper>
  );
}

export default Feedback;
