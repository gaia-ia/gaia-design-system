import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { RadioInputProps } from "./types";

/**
 * A grouped radio input component that renders a labeled list of radio buttons.
 *
 * Each option is rendered with an individual `<input type="radio" />` and its label.
 * Supports showing an overall field label, optional hint, and error message.
 * Leverages the `Body` component for consistent typography.
 *
 * @component
 * @param {RadioInputProps} props - Props to configure the radio input group.
 * @param {string} props.name - Shared `name` attribute to group radio buttons.
 * @param {string} [props.label] - Optional label for the entire radio group.
 * @param {string} [props.error] - Optional error message displayed above the options.
 * @param {string} [props.hint] - Optional helper text displayed below the options.
 * @param {boolean} [props.required] - Whether the field is required; adds a visual asterisk.
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
  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Body as="label" className={styles.label} variant="label">
          {label}
          {required && <span className={styles.required}>*</span>}
        </Body>
      )}
      <div className={styles.input_container_wrapper}>
        {error && (
          <Body variant="caption" className={styles.error}>
            {error}
          </Body>
        )}
        <div className={styles.input_container}>
          {options?.map((option) => (
            <div key={option.label} className={styles.option}>
              <Body htmlFor={option.value} as="label">
                <input type="radio" {...option} id={option.value} name={name} />
                {option.label}
              </Body>
            </div>
          ))}
        </div>
        {hint && (
          <Body variant="caption" className={styles.hint}>
            {hint}
          </Body>
        )}
      </div>
    </div>
  );
};

RadioInput.displayName = "RadioInput";
