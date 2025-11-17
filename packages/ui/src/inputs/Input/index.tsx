import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { InputProps } from "./types";

/**
 * A styled text input component with support for label, hint, and error messaging.
 *
 * Wraps a native `<input>` element and displays associated label text, optional hint below the field,
 * and error messages when present. Uses the `Body` component for consistent typography and styling.
 *
 * @component
 * @param {InputProps} props - Props for configuring the input field.
 * @param {string} props.id - A unique identifier used for the `id` and `htmlFor` attributes to link input and label.
 * @param {string} [props.label] - Optional label displayed above the input field.
 * @param {string} [props.error] - Optional error message displayed below the input field.
 * @param {string} [props.hint] - Optional hint text displayed below the input and above the error (if any).
 * @param {boolean} [props.required] - If true, appends a visual asterisk to the label.
 * @param {string} [props.className] - Optional class name for styling the outermost container.
 * @returns {JSX.Element} A complete, styled, accessible input field.
 *
 * @example
 * <Input
 *   id="email"
 *   label="Email address"
 *   type="email"
 *   placeholder="you@example.com"
 *   required
 *   hint="We’ll never share your email."
 *   error={formErrors.email}
 * />
 */
export const Input: React.FC<InputProps> = ({
  label,
  id,
  error,
  hint,
  required,
  className,
  ...props
}) => {
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
          <input id={id} {...props} />
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

Input.displayName = "Input";
