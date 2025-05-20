import { Body } from "../../typography/Body";
import styles from "./styles.module.css";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  label,
  id,
  error,
  hint,
  required,
  ...props
}) => {
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
