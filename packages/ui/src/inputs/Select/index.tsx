import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { SelectProps } from "./types";

/**
 * A custom select dropdown built on top of Radix UI's Select component.
 *
 * Supports label, placeholder, hint, error, disabled state, and validation.
 * Ideal for selecting from a list of options using native-style behavior and keyboard navigation.
 *
 * @component
 * @param {SelectProps} props - Props to configure the select behavior and presentation.
 * @returns {JSX.Element} A custom-styled select dropdown component.
 *
 * @example
 * <Select
 *   id="status"
 *   label="Status"
 *   value={status}
 *   onChange={setStatus}
 *   options={[
 *     { value: "active", label: "Active" },
 *     { value: "inactive", label: "Inactive" },
 *   ]}
 *   placeholder="Select a status"
 *   required
 * />
 */
export const Select: React.FC<SelectProps> = ({
  label,
  id,
  error,
  hint,
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  className,
}) => {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  // Radix only knows strings. `value === undefined` would make Radix fall back
  // to its own uncontrolled state and keep showing the last pick after a parent
  // reset, so the uncontrolled value lives here and is cleared ("" = placeholder)
  // whenever `value` goes back to undefined.
  const [uncontrolledValue, setUncontrolledValue] = useState("");
  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    if (value === undefined) setUncontrolledValue("");
  }
  const selectValue = value === undefined ? uncontrolledValue : String(value);

  const handleValueChange = (selectedValue: string) => {
    setUncontrolledValue(selectedValue);
    if (onChange) {
      // Hand back the option's original value (number stays number).
      const option = options.find(
        (item) => String(item.value) === selectedValue,
      );
      onChange(option ? option.value : selectedValue);
    }
  };

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Body as="label" htmlFor={id} className={styles.label} variant="label">
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </Body>
      )}
      <div className={styles.input_container_wrapper}>
        <div className={styles.input_container} data-input-container>
          <RadixSelect.Root
            value={selectValue}
            onValueChange={handleValueChange}
            disabled={disabled}
            required={required}
          >
            <RadixSelect.Trigger
              id={id}
              className={styles.select_trigger}
              aria-invalid={!!error || undefined}
              aria-describedby={describedBy}
            >
              <RadixSelect.Value
                placeholder={placeholder || "Selecione uma opção"}
              />

              <RadixSelect.Icon className={styles.arrow}>
                <ChevronDown size={16} />
              </RadixSelect.Icon>
            </RadixSelect.Trigger>
            <RadixSelect.Portal>
              <RadixSelect.Content className={styles.select_content}>
                <RadixSelect.Viewport>
                  {options.map((option) => (
                    <RadixSelect.Item
                      key={option.value}
                      value={String(option.value)}
                      disabled={option.disabled}
                      className={styles.select_item}
                    >
                      <RadixSelect.ItemText>
                        {option.label}
                      </RadixSelect.ItemText>
                    </RadixSelect.Item>
                  ))}
                </RadixSelect.Viewport>
              </RadixSelect.Content>
            </RadixSelect.Portal>
          </RadixSelect.Root>
        </div>
        {hint && (
          <Body variant="caption" className={styles.hint} id={hintId}>
            {hint}
          </Body>
        )}
        {error && (
          <Body variant="caption" className={styles.error} id={errorId}>
            {error}
          </Body>
        )}
      </div>
    </div>
  );
};
