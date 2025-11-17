import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "../../buttons/Button";
import { Body } from "../../typography/Body";
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
  id: string;
};

export const Combobox: React.FC<Props> = ({
  value,
  setValue,
  options,
  label,
  hint,
  error,
  required,
  id,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
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
              placeholder="Search option..."
              className={styles.input}
            />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
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
