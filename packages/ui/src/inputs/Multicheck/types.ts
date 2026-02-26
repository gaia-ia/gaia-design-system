export type MulticheckProps = {
  id: string;
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
  maxShownItems?: number;
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
  searchPlaceholder?: string;
  selectPlaceholder?: string;
  showLessText?: string;
  moreText?: string;
  noOptionFoundText?: string;
  maxSelectedItems?: number;
};
