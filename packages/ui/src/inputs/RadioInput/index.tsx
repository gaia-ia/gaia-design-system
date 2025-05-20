import { Body } from "../../typography/Body";
import styles from "./styles.module.css";
import { RadioInputProps } from "./types";

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  error,
  hint,
  required,
  name,
  options,
}) => {
  return (
    <div className={styles.container}>
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
