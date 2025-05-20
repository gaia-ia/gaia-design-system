import styles from "./styles.module.css";
import type { ProgressBarProps } from "./types";

export const ProgressBar = ({ size, currentStep = 1 }: ProgressBarProps) => {
  const progressPercentage = (currentStep / size) * 100;

  return (
    <div>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

ProgressBar.displayName = "ProgressBar";
