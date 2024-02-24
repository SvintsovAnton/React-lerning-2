export interface FeedbackProps {
  likes: number;
  onLike: () => void;
  dislikes: number;
  onDislike: () => void;
  resetResults: () => void;
}
