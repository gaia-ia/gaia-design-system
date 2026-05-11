import * as PopoverPrimitive from "@radix-ui/react-popover";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import * as React from "react";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type {
  ComboboxMultiProps,
  ComboboxOption,
  ComboboxOptionGroup,
  ComboboxProps,
} from "./types";

function isGrouped(
  options: ComboboxOption[] | ComboboxOptionGroup[],
): options is ComboboxOptionGroup[] {
  return options.length > 0 && "group" in options[0];
}

function flattenOptions(
  options: ComboboxOption[] | ComboboxOptionGroup[],
): ComboboxOption[] {
  if (isGrouped(options)) {
    return options.flatMap((g) => g.options);
  }
  return options as ComboboxOption[];
}

/**
 * A searchable single-select combobox. The visible input field doubles as the
 * search box — typing filters the options that appear in the dropdown below it.
 *
 * Supports label, placeholder, hint, error, disabled, clearable, and grouped options.
 *
 * @component
 * @param {ComboboxProps} props - Props to configure the combobox.
 * @returns {JSX.Element} An input-driven combobox with a filtered options dropdown.
 *
 * @example
 * <Combobox
 *   id="country"
 *   label="País"
 *   value={country}
 *   onChange={setCountry}
 *   options={[
 *     { value: "br", label: "Brasil" },
 *     { value: "us", label: "Estados Unidos" },
 *   ]}
 *   placeholder="Selecione um país"
 *   clearable
 * />
 */
const Combobox: React.FC<ComboboxProps> = ({
  label,
  id,
  error,
  hint,
  placeholder = "Selecione uma opção",
  emptyText = "Nenhuma opção encontrada",
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  clearable = false,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const allFlat = flattenOptions(options);
  const selectedLabel = allFlat.find((o) => o.value === value)?.label ?? "";
  const hasValue = value !== undefined && value !== null;

  // When closed, input shows the selected label; when open, shows the search text
  const displayValue = open ? searchText : selectedLabel;

  const filterFn = (o: ComboboxOption) =>
    searchText.length === 0 ||
    o.label.toLowerCase().includes(searchText.toLowerCase());

  const filteredData = isGrouped(options)
    ? (options as ComboboxOptionGroup[])
        .map((g) => ({ ...g, options: g.options.filter(filterFn) }))
        .filter((g) => g.options.length > 0)
    : (options as ComboboxOption[]).filter(filterFn);

  // Flat list for keyboard navigation index tracking
  const visibleItems: ComboboxOption[] = isGrouped(options)
    ? (filteredData as ComboboxOptionGroup[]).flatMap((g) => g.options)
    : (filteredData as ComboboxOption[]);

  const handleOpen = () => {
    if (disabled) return;
    setSearchText("");
    setActiveIndex(-1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSearchText("");
    setActiveIndex(-1);
  };

  const handleSelect = (optValue: string | number) => {
    onChange?.(optValue);
    handleClose();
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(null);
    setSearchText("");
    setOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setActiveIndex((i) => {
          let next = i + 1;
          while (next < visibleItems.length && visibleItems[next]?.disabled)
            next++;
          return next < visibleItems.length ? next : i;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => {
          let prev = i - 1;
          while (prev >= 0 && visibleItems[prev]?.disabled) prev--;
          return prev >= 0 ? prev : i;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (
          open &&
          activeIndex >= 0 &&
          visibleItems[activeIndex] &&
          !visibleItems[activeIndex].disabled
        ) {
          handleSelect(visibleItems[activeIndex].value);
        } else if (!open) {
          setOpen(true);
        }
        break;
      case "Escape":
        handleClose();
        inputRef.current?.blur();
        break;
      case "Tab":
        handleClose();
        break;
    }
  };

  const renderOptions = (opts: ComboboxOption[], startIndex = 0) =>
    opts.map((opt, localI) => {
      const flatI = startIndex + localI;
      const isActive = flatI === activeIndex;
      const isSelected = value === opt.value;
      return (
        <div
          key={String(opt.value)}
          role="option"
          aria-selected={isSelected}
          aria-disabled={opt.disabled}
          className={clsx(
            styles.item,
            isActive && styles.item_active,
            opt.disabled && styles.item_disabled,
          )}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => !opt.disabled && handleSelect(opt.value)}
          onMouseEnter={() => !opt.disabled && setActiveIndex(flatI)}
          onMouseLeave={() => setActiveIndex((i) => (i === flatI ? -1 : i))}
        >
          <CheckIcon
            size={14}
            className={
              isSelected ? styles.check_icon : styles.check_icon_hidden
            }
          />
          {opt.label}
        </div>
      );
    });

  const renderList = () => {
    if (visibleItems.length === 0)
      return <div className={styles.empty}>{emptyText}</div>;

    if (isGrouped(options)) {
      let offset = 0;
      return (filteredData as ComboboxOptionGroup[]).map((group, gi) => {
        const items = renderOptions(group.options, offset);
        offset += group.options.length;
        return (
          <React.Fragment key={group.group}>
            {gi > 0 && <div className={styles.separator} />}
            <div className={styles.group}>
              <div className={styles.group_label}>{group.group}</div>
              {items}
            </div>
          </React.Fragment>
        );
      });
    }

    return renderOptions(filteredData as ComboboxOption[]);
  };

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Body as="label" htmlFor={id} className={styles.label} variant="label">
          {label}
          {required && <span className={styles.required}>*</span>}
        </Body>
      )}
      <div className={styles.input_container_wrapper}>
        <PopoverPrimitive.Root
          open={open}
          onOpenChange={(isOpen) => {
            if (!isOpen) handleClose();
          }}
        >
          <PopoverPrimitive.Anchor asChild>
            <div
              ref={anchorRef}
              className={clsx(
                styles.input_container,
                error && styles.input_container_error,
                disabled && styles.input_container_disabled,
              )}
            >
              <input
                ref={inputRef}
                id={id}
                className={styles.input}
                value={displayValue}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setActiveIndex(-1);
                  if (!open) setOpen(true);
                }}
                onFocus={handleOpen}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete="off"
                role="combobox"
                aria-controls={`${id}-listbox`}
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-invalid={!!error}
                aria-autocomplete="list"
              />
              <div className={styles.input_actions}>
                {clearable && hasValue && !disabled && (
                  <button
                    type="button"
                    className={styles.clear_button}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleClear}
                    tabIndex={-1}
                    aria-label="Limpar seleção"
                  >
                    <XIcon size={14} />
                  </button>
                )}
                <ChevronDownIcon
                  size={16}
                  className={clsx(styles.chevron, open && styles.chevron_open)}
                />
              </div>
            </div>
          </PopoverPrimitive.Anchor>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              className={styles.popup}
              side="bottom"
              align="start"
              sideOffset={4}
              onOpenAutoFocus={(e) => e.preventDefault()}
              onInteractOutside={(e) => {
                if (anchorRef.current?.contains(e.target as Element)) {
                  e.preventDefault();
                }
              }}
            >
              <div
                id={`${id}-listbox`}
                role="listbox"
                aria-label={label ?? placeholder}
                className={styles.list}
                onMouseDown={(e) => e.preventDefault()}
              >
                {renderList()}
              </div>
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
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

/**
 * A searchable multi-select combobox. Selected items appear as removable chips
 * inside the input container. Typing in the inline input filters the dropdown options.
 *
 * Press Backspace on an empty input to remove the last chip.
 * Supports label, placeholder, hint, error, disabled, and grouped options.
 *
 * @component
 * @param {ComboboxMultiProps} props - Props to configure the multi-select combobox.
 * @returns {JSX.Element} A multi-select combobox with chip display.
 *
 * @example
 * <ComboboxMulti
 *   id="tags"
 *   label="Tags"
 *   value={tags}
 *   onChange={setTags}
 *   options={[
 *     { value: "react", label: "React" },
 *     { value: "typescript", label: "TypeScript" },
 *   ]}
 *   placeholder="Adicionar tags..."
 * />
 */
const ComboboxMulti: React.FC<ComboboxMultiProps> = ({
  label,
  id,
  error,
  hint,
  placeholder = "Selecione opções",
  emptyText = "Nenhuma opção encontrada",
  options,
  value = [],
  onChange,
  disabled = false,
  required = false,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const allFlat = flattenOptions(options);

  const labelMap = allFlat.reduce<Record<string, string>>((acc, opt) => {
    acc[String(opt.value)] = opt.label;
    return acc;
  }, {});

  const filterFn = (o: ComboboxOption) =>
    searchText.length === 0 ||
    o.label.toLowerCase().includes(searchText.toLowerCase());

  const filteredData = isGrouped(options)
    ? (options as ComboboxOptionGroup[])
        .map((g) => ({ ...g, options: g.options.filter(filterFn) }))
        .filter((g) => g.options.length > 0)
    : (options as ComboboxOption[]).filter(filterFn);

  const visibleItems: ComboboxOption[] = isGrouped(options)
    ? (filteredData as ComboboxOptionGroup[]).flatMap((g) => g.options)
    : (filteredData as ComboboxOption[]);

  const handleToggle = (optValue: string | number) => {
    const next = value.includes(optValue)
      ? value.filter((v) => v !== optValue)
      : [...value, optValue];
    onChange?.(next);
    setSearchText("");
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  const handleRemove = (optValue: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(value.filter((v) => v !== optValue));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Backspace":
        if (searchText === "" && value.length > 0) {
          onChange?.(value.slice(0, -1));
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setActiveIndex((i) => {
          let next = i + 1;
          while (next < visibleItems.length && visibleItems[next]?.disabled)
            next++;
          return next < visibleItems.length ? next : i;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => {
          let prev = i - 1;
          while (prev >= 0 && visibleItems[prev]?.disabled) prev--;
          return prev >= 0 ? prev : i;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (
          open &&
          activeIndex >= 0 &&
          visibleItems[activeIndex] &&
          !visibleItems[activeIndex].disabled
        ) {
          handleToggle(visibleItems[activeIndex].value);
        }
        break;
      case "Escape":
        setOpen(false);
        setSearchText("");
        setActiveIndex(-1);
        break;
    }
  };

  const renderOptions = (opts: ComboboxOption[], startIndex = 0) =>
    opts.map((opt, localI) => {
      const flatI = startIndex + localI;
      const isActive = flatI === activeIndex;
      const isSelected = value.includes(opt.value);
      return (
        <div
          key={String(opt.value)}
          role="option"
          aria-selected={isSelected}
          aria-disabled={opt.disabled}
          className={clsx(
            styles.item,
            isActive && styles.item_active,
            opt.disabled && styles.item_disabled,
          )}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => !opt.disabled && handleToggle(opt.value)}
          onMouseEnter={() => !opt.disabled && setActiveIndex(flatI)}
          onMouseLeave={() => setActiveIndex((i) => (i === flatI ? -1 : i))}
        >
          <CheckIcon
            size={14}
            className={
              isSelected ? styles.check_icon : styles.check_icon_hidden
            }
          />
          {opt.label}
        </div>
      );
    });

  const renderList = () => {
    if (visibleItems.length === 0)
      return <div className={styles.empty}>{emptyText}</div>;

    if (isGrouped(options)) {
      let offset = 0;
      return (filteredData as ComboboxOptionGroup[]).map((group, gi) => {
        const items = renderOptions(group.options, offset);
        offset += group.options.length;
        return (
          <React.Fragment key={group.group}>
            {gi > 0 && <div className={styles.separator} />}
            <div className={styles.group}>
              <div className={styles.group_label}>{group.group}</div>
              {items}
            </div>
          </React.Fragment>
        );
      });
    }

    return renderOptions(filteredData as ComboboxOption[]);
  };

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Body as="label" htmlFor={id} className={styles.label} variant="label">
          {label}
          {required && <span className={styles.required}>*</span>}
        </Body>
      )}
      <div className={styles.input_container_wrapper}>
        <PopoverPrimitive.Root
          open={open}
          onOpenChange={(isOpen) => {
            if (!isOpen && !disabled) {
              setOpen(false);
              setSearchText("");
              setActiveIndex(-1);
            }
          }}
        >
          <PopoverPrimitive.Anchor asChild>
            <div
              ref={anchorRef}
              className={clsx(
                styles.chips_container,
                error && styles.chips_container_error,
                disabled && styles.chips_container_disabled,
              )}
              onClick={() => !disabled && inputRef.current?.focus()}
            >
              {value.map((v) => (
                <span key={String(v)} className={styles.chip}>
                  <span className={styles.chip_label}>
                    {labelMap[String(v)] ?? v}
                  </span>
                  {!disabled && (
                    <button
                      type="button"
                      className={styles.chip_remove}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => handleRemove(v, e)}
                      aria-label={`Remover ${labelMap[String(v)]}`}
                      tabIndex={-1}
                    >
                      <XIcon size={10} />
                    </button>
                  )}
                </span>
              ))}
              <input
                ref={inputRef}
                id={id}
                className={styles.chips_input}
                placeholder={value.length === 0 ? placeholder : undefined}
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setActiveIndex(-1);
                  if (!open) setOpen(true);
                }}
                onFocus={() => !disabled && setOpen(true)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                role="combobox"
                aria-controls={`${id}-listbox`}
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-invalid={!!error}
                aria-label={label ?? placeholder}
                autoComplete="off"
              />
            </div>
          </PopoverPrimitive.Anchor>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              className={styles.popup}
              side="bottom"
              align="start"
              sideOffset={4}
              onOpenAutoFocus={(e) => e.preventDefault()}
              onInteractOutside={(e) => {
                if (anchorRef.current?.contains(e.target as Element)) {
                  e.preventDefault();
                }
              }}
            >
              <div
                id={`${id}-listbox`}
                role="listbox"
                aria-label={label ?? placeholder}
                aria-multiselectable
                className={styles.list}
                onMouseDown={(e) => e.preventDefault()}
              >
                {renderList()}
              </div>
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
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

export { Combobox, ComboboxMulti };
