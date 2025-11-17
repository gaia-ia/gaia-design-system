import { InputHTMLAttributes } from "react";

interface Option extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

export interface RadioInputProps {
  name: string;
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  options: Option[];
  className?: string;
}
