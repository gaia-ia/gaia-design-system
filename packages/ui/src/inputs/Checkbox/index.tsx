import { Check } from "lucide-react";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { CheckboxProps } from "./types";

/**
 * A styled checkbox component with a custom visual box and a label using the `Body` typography component.
 *
 * Renders a visually enhanced checkbox with a `Check` icon overlay, hidden behind the native HTML input for accessibility and form compatibility.
 *
 * @component
 * @param {CheckboxProps} props - Props to configure the checkbox input and label.
 * @param {string} props.label - Text label shown alongside the checkbox.
 * @param {string} props.id - Unique ID used to bind the label and input.
 * @param {string} props.value - Value of the checkbox input.
 * @param {boolean} [props.checked] - Whether the checkbox is currently checked.
 * @param {string} [props.className] - Optional additional class name applied to the outer label container.
 * @returns {JSX.Element} A styled and accessible checkbox element.
 *
 * @example
 * <Checkbox
 *   id="accept-terms"
 *   label="I agree to the terms"
 *   value="accepted"
 *   checked={isChecked}
 *   onChange={(e) => setChecked(e.target.checked)}
 * />
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  value,
  checked,
  ...props
}) => {
  return (
    <Body
      className={clsx(styles.container, props.className)}
      variant="label"
      as="label"
      htmlFor={id}
    >
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
