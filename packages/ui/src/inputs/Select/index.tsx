import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

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
const Select: React.FC<SelectProps> = ({
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
  const handleValueChange = (selectedValue: string) => {
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Body as="label" htmlFor={id} className={styles.label} variant="label">
          {label}
          {required && <span className={styles.required}>*</span>}
        </Body>
      )}
      <div className={styles.input_container_wrapper}>
        <div className={styles.input_container} data-input-container>
          <RadixSelect.Root
            value={value?.toString()}
            onValueChange={handleValueChange}
            disabled={disabled}
          >
            <RadixSelect.Trigger className={styles.select_trigger}>
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
                      value={option.value.toString()}
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
          <Body variant="caption" className={styles.hint}>
            {hint}
          </Body>
        )}
        {error && (
          <Body variant="caption" className={styles.error}>
            {error}
          </Body>
        )}
      </div>
    </div>
  );
};

export default Select;
