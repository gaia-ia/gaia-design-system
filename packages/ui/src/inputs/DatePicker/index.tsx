import {
  Body,
  Button,
  Calendar,
  clsx,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@gaia-dev/ui";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import * as React from "react";
import { enUS, es, pt } from "react-day-picker/locale";

import styles from "./styles.module.css";
import { DatePickerProps } from "./types";

/**
 * Date picker component supporting **single-date** and **date-range** selection modes.
 *
 * Renders a button trigger that opens a popover containing the shared {@link Calendar} component
 * (built on `react-day-picker`). The trigger displays either the formatted selection
 * (`dd/MM/yyyy`), a formatted range (`dd/MM/yyyy - dd/MM/yyyy`), or a placeholder when empty.
 *
 * The component is controlled: the selected value is provided via `date` and updated via `setDate`.
 *
 * @remarks
 * - Locale is chosen from `react-day-picker/locale` based on `language`:
 *   `pt` → Portuguese, `es` → Spanish, otherwise English (`enUS`).
 * - The trigger uses `data-empty` for styling when no date is selected.
 * - `disabled` is forwarded to the underlying calendar to block selection for matching days.
 *
 * @typeParam Props - Discriminated union via `mode` (`"single"` | `"range"`).
 *
 * @param props - Component props.
 * @param props.mode - Selection mode (`"single"` or `"range"`). Controls rendering and types.
 * @param props.language - Language/locale selector (`"en" | "es" | "pt" | string`).
 * @param props.disabled - Dates to disable in the calendar (boolean or `react-day-picker` matcher(s)).
 * @param props.date - Currently selected date (`Date | undefined`) or range (`DateRange | undefined`).
 * @param props.setDate - State setter for the selected date or range (controlled component).
 * @param props.label - Optional field label rendered above the trigger.
 * @param props.hint - Optional hint text rendered below the picker.
 * @param props.placeholder - Placeholder shown when no value is selected.
 * Defaults to `"Select date"` for single mode and `"Select range"` for range mode.
 * @param props.error - Optional error message rendered below the picker (typically styled in red).
 * @param props.required - Whether to render a required indicator (`*`) next to the label.
 * @param props.id - Id forwarded to the label `htmlFor` attribute.
 * @param props.className - Optional class name applied to the outer container.
 *
 * @returns A date picker field with a popover calendar.
 *
 * @example
 * // Single date picker (controlled)
 * import * as React from "react";
 * import { DatePicker } from "./DatePicker";
 *
 * export function BirthdayPicker() {
 *   const [date, setDate] = React.useState<Date | undefined>();
 *
 *   return (
 *     <DatePicker
 *       id="birthday"
 *       label="Birthday"
 *       required
 *       mode="single"
 *       language="en"
 *       date={date}
 *       setDate={setDate}
 *       hint="Choose a date"
 *     />
 *   );
 * }
 *
 * @example
 * // Range picker with disabled weekends
 * import * as React from "react";
 * import type { DateRange } from "react-day-picker";
 * import { DatePicker } from "./DatePicker";
 *
 * export function BookingRangePicker() {
 *   const [range, setRange] = React.useState<DateRange | undefined>();
 *
 *   return (
 *     <DatePicker
 *       id="booking"
 *       label="Booking dates"
 *       mode="range"
 *       language="pt"
 *       date={range}
 *       setDate={setRange}
 *       disabled={{ dayOfWeek: [0, 6] }} // Sunday (0) and Saturday (6)
 *       placeholder="Selecione um período"
 *     />
 *   );
 * }
 */
export const DatePicker: React.FC<DatePickerProps> = ({
  language,
  disabled = false,
  date,
  setDate,
  mode,
  label,
  hint,
  placeholder = mode === "single" ? "Select date" : "Select range",
  error,
  className,
  required,
  id,
}) => {
  const locale = language === "pt" ? pt : language === "es" ? es : enUS;

  const text =
    mode === "single"
      ? date
        ? format(date, "dd/MM/yyyy")
        : placeholder
      : date?.from && date?.to
        ? `${format(date.from, "dd/MM/yyyy")} - ${format(date.to, "dd/MM/yyyy")}`
        : placeholder;

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Body variant="label" className={styles.label} htmlFor={id} as="label">
          {label}
          {required && <span className={styles.required}>*</span>}
        </Body>
      )}
      <div className={styles.wrapper}>
        <Popover>
          <PopoverTrigger asChild>
            <Button className={styles.trigger} data-empty={!date}>
              <Body
                className={clsx(
                  mode === "single"
                    ? !date && styles.placeholder
                    : !date?.from && styles.placeholder,
                  styles.text,
                )}
              >
                {text}
              </Body>
              <CalendarDays
                className={styles.chevron}
                color="var(--color-text-600)"
              />
            </Button>
          </PopoverTrigger>

          <PopoverContent className={styles.popoverContent} align="start">
            {mode === "single" ? (
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                defaultMonth={date}
                locale={locale}
                disabled={disabled}
              />
            ) : (
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                locale={locale}
                disabled={disabled}
              />
            )}
          </PopoverContent>
        </Popover>

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
