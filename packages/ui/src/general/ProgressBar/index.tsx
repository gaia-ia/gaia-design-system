import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { ProgressBarProps } from "./types";

/**
 * A linear progress bar component representing the current step out of a total number of steps.
 *
 * Useful for multi-step flows, onboarding, or quizzes. The bar fills proportionally based on the `currentStep` and `size`.
 *
 * @component
 * @param {ProgressBarProps} props - Props for the `ProgressBar` component.
 * @param {number} props.size - The total number of steps in the progress sequence.
 * @param {number} [props.currentStep=1] - The current active step (defaults to `1`). Used to calculate the fill percentage.
 * @param {string} [props.color='var(--color-primary-500)'] - The CSS color of the filled portion of the bar.
 * @param {string} [props.className] - Optional additional class name(s) for styling the outer container.
 * @returns {JSX.Element} A visual representation of progress using a horizontal bar.
 *
 * @example
 * <ProgressBar size={5} currentStep={3} />
 *
 * @example
 * <ProgressBar size={4} color="#2ecc71" className="my-custom-progress" />
 */
export const ProgressBar = ({
  size,
  currentStep = 1,
  color = "var(--color-primary-500)",
  className,
}: ProgressBarProps) => {
  const progressPercentage = (currentStep / size) * 100;

  return (
    <div className={clsx(styles.progressBarContainer, className)}>
      <div
        className={styles.progressBar}
        style={{ width: `${progressPercentage}%`, backgroundColor: color }}
      />
    </div>
  );
};

ProgressBar.displayName = "ProgressBar";
