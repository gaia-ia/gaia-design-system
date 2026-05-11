export interface ComboboxOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface ComboboxOptionGroup {
  group: string;
  options: ComboboxOption[];
}

export interface ComboboxProps {
  label?: string;
  id: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  options: ComboboxOption[] | ComboboxOptionGroup[];
  value?: string | number;
  onChange?: (value: string | number | null) => void;
  disabled?: boolean;
  required?: boolean;
  clearable?: boolean;
  className?: string;
}

export interface ComboboxMultiProps
  extends Omit<ComboboxProps, "value" | "onChange" | "clearable"> {
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
}
