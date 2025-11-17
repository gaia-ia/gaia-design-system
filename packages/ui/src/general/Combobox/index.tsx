import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "../../buttons/Button";
import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../Command";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import styles from "./styles.module.css";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: {
    value: string;
    label: string;
  }[];
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  noOptionsMessage?: string;
  id: string;
};

/**
 * A controlled, accessible combobox component with searchable dropdown options.
 *
 * Renders a custom `Button` that opens a `Popover` containing a filterable list of selectable options.
 * Supports labels, helper text, error messaging, and keyboard navigation. Selection is controlled via external state.
 *
 * @component
 * @param {Object} props - Props for the `Combobox` component.
 * @param {string} props.value - The currently selected option's `value`.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setValue - State setter for updating the selected value.
 * @param {{ value: string; label: string }[]} props.options - Array of selectable options with display labels and string values.
 * @param {string} [props.label] - Optional label text rendered above the combobox trigger.
 * @param {string} [props.hint] - Optional helper text rendered below the combobox.
 * @param {string} [props.error] - Optional error message rendered below the combobox.
 * @param {boolean} [props.required] - If true, displays a visual asterisk for required fields.
 * @param {string} [props.placeholder] - Placeholder text inside the searchable input (defaults to `"Search options"`).
 * @param {string} [props.noOptionsMessage] - Message to display when no options match the search (defaults to a fallback).
 * @param {string} [props.className] - Optional class name applied to the outermost container.
 * @param {string} props.id - Unique identifier used for accessibility bindings and DOM targeting.
 * @returns {JSX.Element} A customizable, searchable combobox component.
 *
 * @example
 * const [selected, setSelected] = useState('');
 *
 * <Combobox
 *   id="country-select"
 *   label="Country"
 *   required
 *   value={selected}
 *   setValue={setSelected}
 *   options={[
 *     { value: "us", label: "United States" },
 *     { value: "ca", label: "Canada" },
 *     { value: "br", label: "Brazil" },
 *   ]}
 *   placeholder="Search countries..."
 *   hint="Select your country of residence"
 *   error={selected === "" ? "This field is required" : undefined}
 * />
 */
export const Combobox: React.FC<Props> = ({
  value,
  setValue,
  options,
  label,
  hint,
  error,
  required,
  placeholder,
  className,
  noOptionsMessage,
  id,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx(styles.container, className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className={styles.inputContainer}>
            {label && (
              <Body variant="label" htmlFor={id}>
                {label}
                {required && <span className={styles.required}>*</span>}
              </Body>
            )}

            <Button
              variant="secondary"
              role="combobox"
              aria-expanded={open}
              className={`${styles.button} ${value ? "" : styles.empty}`}
              icon={ChevronsUpDown}
              iconColor="var(--color-text-600)"
              iconPosition="right"
              id={id}
              type="button"
            >
              {value
                ? options.find((option) => option.value === value)?.label
                : "Select option..."}
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className={styles.popover}>
          <Command className={styles.command}>
            <CommandInput
              placeholder={placeholder || "Search options"}
              className={styles.input}
            />
            <CommandList>
              <CommandEmpty>
                {noOptionsMessage ||
                  "No options found. Try another search term."}
              </CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                    <Check
                      className={
                        value === option.value
                          ? styles.checkVisible
                          : styles.checkHidden
                      }
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className={styles.errorContainer}>
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
