import { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  disabled?: boolean;
  placeholder: string;
  label: string;
  type?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: undefined | string;
}
