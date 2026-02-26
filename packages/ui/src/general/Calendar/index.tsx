import { clsx } from '@gaia-dev/ui';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import * as React from 'react';
import {
  type DayButton,
  DayPicker,
  type Locale,
  getDefaultClassNames,
} from 'react-day-picker';

import styles from './styles.module.css';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  const captionLabelClass =
    captionLayout === 'label'
      ? clsx(styles.captionLabel, styles.captionLabelText)
      : clsx(styles.captionLabel, styles.captionLabelDropdown);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={clsx(styles.calendar, className)}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: date =>
          date.toLocaleString(locale?.code, { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: clsx(styles.root, defaultClassNames.root, classNames?.root),
        months: clsx(
          styles.months,
          defaultClassNames.months,
          classNames?.months
        ),
        month: clsx(styles.month, defaultClassNames.month, classNames?.month),

        nav: clsx(styles.nav, defaultClassNames.nav, classNames?.nav),

        /* We render the actual buttons via components.PreviousMonthButton/NextMonthButton */
        button_previous: clsx(
          defaultClassNames.button_previous,
          classNames?.button_previous
        ),
        button_next: clsx(
          defaultClassNames.button_next,
          classNames?.button_next
        ),

        month_caption: clsx(
          styles.monthCaption,
          defaultClassNames.month_caption,
          classNames?.month_caption
        ),

        dropdowns: clsx(
          styles.dropdowns,
          defaultClassNames.dropdowns,
          classNames?.dropdowns
        ),
        dropdown_root: clsx(
          styles.dropdownRoot,
          defaultClassNames.dropdown_root,
          classNames?.dropdown_root
        ),
        dropdown: clsx(
          styles.dropdown,
          defaultClassNames.dropdown,
          classNames?.dropdown
        ),

        caption_label: clsx(
          captionLabelClass,
          defaultClassNames.caption_label,
          classNames?.caption_label
        ),

        table: clsx(styles.table, classNames?.table),
        weekdays: clsx(
          styles.weekdays,
          defaultClassNames.weekdays,
          classNames?.weekdays
        ),
        weekday: clsx(
          styles.weekday,
          defaultClassNames.weekday,
          classNames?.weekday
        ),

        week: clsx(styles.week, defaultClassNames.week, classNames?.week),

        week_number_header: clsx(
          styles.weekNumberHeader,
          defaultClassNames.week_number_header,
          classNames?.week_number_header
        ),
        week_number: clsx(
          styles.weekNumber,
          defaultClassNames.week_number,
          classNames?.week_number
        ),

        day: clsx(styles.day, defaultClassNames.day, classNames?.day),

        range_start: clsx(
          styles.rangeStart,
          defaultClassNames.range_start,
          classNames?.range_start
        ),
        range_middle: clsx(
          styles.rangeMiddle,
          defaultClassNames.range_middle,
          classNames?.range_middle
        ),
        range_end: clsx(
          styles.rangeEnd,
          defaultClassNames.range_end,
          classNames?.range_end
        ),

        today: clsx(styles.today, defaultClassNames.today, classNames?.today),
        outside: clsx(
          styles.outside,
          defaultClassNames.outside,
          classNames?.outside
        ),
        disabled: clsx(
          styles.disabled,
          defaultClassNames.disabled,
          classNames?.disabled
        ),
        hidden: clsx(
          styles.hidden,
          defaultClassNames.hidden,
          classNames?.hidden
        ),

        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, ...rootProps }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={clsx(rootClassName)}
            {...rootProps}
          />
        ),

        PreviousMonthButton: ({ className: btnClassName, ...btnProps }) => (
          <button
            type="button"
            className={clsx(
              styles.buttonReset,
              styles.focusRing,
              styles.navButton,
              btnClassName
            )}
            {...btnProps}
          />
        ),

        NextMonthButton: ({ className: btnClassName, ...btnProps }) => (
          <button
            type="button"
            className={clsx(
              styles.buttonReset,
              styles.focusRing,
              styles.navButton,
              btnClassName
            )}
            {...btnProps}
          />
        ),

        Chevron: ({ className: iconClassName, orientation, ...iconProps }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon
                className={clsx(styles.chevron, styles.rtlFlip, iconClassName)}
                {...iconProps}
              />
            );
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon
                className={clsx(styles.chevron, styles.rtlFlip, iconClassName)}
                {...iconProps}
              />
            );
          }

          return (
            <ChevronDownIcon
              className={clsx(styles.chevron, iconClassName)}
              {...iconProps}
            />
          );
        },

        DayButton: dayButtonProps => (
          <CalendarDayButton locale={locale} {...dayButtonProps} />
        ),

        WeekNumber: ({ children, ...weekNumberProps }) => (
          <td {...weekNumberProps}>
            <div className={styles.weekNumberCell}>{children}</div>
          </td>
        ),

        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const selectedSingle =
    modifiers.selected &&
    !modifiers.range_start &&
    !modifiers.range_end &&
    !modifiers.range_middle;

  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={selectedSingle || undefined}
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      className={clsx(styles.dayButton, defaultClassNames.day, className)}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
