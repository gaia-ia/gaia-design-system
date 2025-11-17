import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import { TextareaProps } from "./types";

/**
 * A custom styled `<textarea>` component with label, hint, and error support.
 *
 * @component
 * @param {TextareaProps} props - The props to configure the textarea field.
 * @returns {JSX.Element} A styled textarea input component with accessibility features.
 *
 * @example
 * <Textarea
 *   id="bio"
 *   label="Biography"
 *   placeholder="Tell us about yourself..."
 *   hint="You can write up to 500 characters."
 *   required
 *   value={bio}
 *   onChange={(e) => setBio(e.target.value)}
 * />
 */
export const Textarea: React.FC<TextareaProps> = ({
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
          <textarea id={id} {...props} />
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

Textarea.displayName = "Textarea";
