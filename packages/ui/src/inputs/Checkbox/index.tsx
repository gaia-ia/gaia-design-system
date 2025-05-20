import { Check } from "lucide-react";

import { Body } from "../../typography/Body";
import styles from "./styles.module.css";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  value,
  checked,
  ...props
}) => {
  return (
    <Body className={styles.container} variant="label" as="label" htmlFor={id}>
      <div className={styles.checkbox_box}>
        <Check color="var(--color-fixed-white)" size={12} />
      </div>

      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        {...props}
      />
      {label}
    </Body>
  );
};

Checkbox.displayName = "Checkbox";
