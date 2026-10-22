import { useId } from "react";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { RadioInputProps } from "./types";

/**
 * A grouped radio input component that renders a labeled list of radio buttons.
 *
 * Each option is rendered with an individual `<input type="radio" />` and its label, inside a
 * `role="radiogroup"` named by `label` and described by `error`/`hint`. Option ids are generated
 * per instance (`useId`), so two groups with the same values never collide.
 * Supports showing an overall field label, optional hint, and error message.
 * Leverages the `Body` component for consistent typography.
 *
 * @component
 * @param {RadioInputProps} props - Props to configure the radio input group.
 * @param {string} props.name - Shared `name` attribute to group radio buttons.
 * @param {string} [props.label] - Optional label for the entire radio group.
 * @param {string} [props.error] - Optional error message displayed above the options.
 * @param {string} [props.hint] - Optional helper text displayed below the options.
 * @param {boolean} [props.required] - Whether the field is required; marks the group and radios as required and adds a visual asterisk.
 * @param {Option[]} props.options - An array of radio options (label/value and standard input attributes).
 * @param {string} [props.className] - Optional class name for the outer wrapper.
 * @returns {JSX.Element} A styled group of radio inputs.
 *
 * @example
 * <RadioInput
 *   name="status"
 *   label="Status"
 *   required
 *   options={[
 *     { value: "active", label: "Active" },
 *     { value: "inactive", label: "Inactive" },
 *   ]}
 *   error="Please select a status"
 * />
 */
export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  error,
  hint,
  required,
  name,
  options,
  className,
}) => {
  const baseId = useId();
  const labelId = label ? `${baseId}-label` : undefined;
  const errorId = error ? `${baseId}-error` : undefined;
  const hintId = hint ? `${baseId}-hint` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div
      className={clsx(styles.container, className)}
      role="radiogroup"
      aria-labelledby={labelId}
      aria-describedby={describedBy}
      aria-required={required || undefined}
      aria-invalid={error ? true : undefined}
    >
      {label && (
        <Body id={labelId} className={styles.label} variant="label">
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </Body>
      )}
      <div className={styles.input_container_wrapper}>
        {error && (
          <Body variant="caption" className={styles.error} id={errorId}>
            {error}
          </Body>
        )}
        <div className={styles.input_container}>
          {options?.map(({ label: optionLabel, ...inputProps }, index) => {
            const optionId = inputProps.id ?? `${baseId}-option-${index}`;

            return (
              <div key={inputProps.value} className={styles.option}>
                <Body htmlFor={optionId} as="label">
                  <input
                    type="radio"
                    required={required}
                    {...inputProps}
                    id={optionId}
                    name={name}
                  />
                  {optionLabel}
                </Body>
              </div>
            );
          })}
        </div>
        {hint && (
          <Body variant="caption" className={styles.hint} id={hintId}>
            {hint}
          </Body>
        )}
      </div>
    </div>
  );
};

RadioInput.displayName = "RadioInput";
