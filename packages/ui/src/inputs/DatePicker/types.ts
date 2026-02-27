import { DateRange, Matcher } from "react-day-picker";

type PropsBase = {
  language: "en" | "es" | "pt" | string;
  disabled?: Matcher | boolean | Matcher[];
  label?: string;
  hint?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  id: string;
  className?: string;
};

interface PropsModeSingle extends PropsBase {
  mode: "single";
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

interface PropsModeRange extends PropsBase {
  mode: "range";
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export type DatePickerProps = PropsModeSingle | PropsModeRange;
