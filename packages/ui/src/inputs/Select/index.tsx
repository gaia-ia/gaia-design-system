import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

import { Body } from "../../typography/Body";
import styles from "./styles.module.css";
import { SelectProps } from "./types";

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
}) => {
  const handleValueChange = (selectedValue: string) => {
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className={styles.container}>
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
