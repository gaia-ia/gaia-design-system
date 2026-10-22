import {
  Badge,
  Body,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@gaia-dev/ui";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import { useId, useState } from "react";

import styles from "./styles.module.css";
import { MulticheckProps } from "./types";

/**
 * A searchable multi-select combobox component that lets users pick multiple options
 * and displays the current selections as removable badges.
 *
 * Selections are controlled externally via `selectedValues` and `setSelectedValues`.
 * The dropdown is implemented with a `Popover`, and the searchable list is powered by
 * `Command` components.
 *
 * The trigger shows up to `maxShownItems` selected badges. When there are more selected
 * values than can be shown, an additional badge appears that toggles an expanded view
 * (show all) / collapsed view (show fewer).
 *
 * @component
 *
 * @param {MulticheckProps} props - Props for the Multicheck component.
 * @param {string} props.id
 * Base identifier used to generate the combobox trigger element id (`${id}commbobox`)
 * and link the optional label via `htmlFor`.
 *
 * @param {string[]} props.selectedValues
 * Currently selected option values (controlled).
 *
 * @param {React.Dispatch<React.SetStateAction<string[]>>} props.setSelectedValues
 * State setter used to update `selectedValues` (controlled).
 * Internally, the component uses a functional update to add/remove values.
 *
 * @param {number} [props.maxShownItems=8]
 * Maximum number of selected badges shown when the selection display is collapsed.
 *
 * @param {string} [props.label]
 * Optional label text rendered above the combobox. When provided, it is linked to the
 * trigger element via `htmlFor`.
 *
 * @param {{ value: string; label: string }[]} props.options
 * Available options to select from. `value` is stored in `selectedValues` and `label`
 * is displayed in the list and badges.
 *
 * @param {string} [props.searchPlaceholder="Search..."]
 * Placeholder text for the search input inside the dropdown.
 *
 * @param {string} [props.selectPlaceholder="Select option"]
 * Placeholder text shown in the trigger when there are no selections.
 *
 * @param {string} [props.showLessText="Show Less"]
 * Text shown on the toggle badge when expanded (used to collapse back).
 *
 * @param {string} [props.moreText="more"]
 * Suffix text used in the collapsed toggle badge (e.g., `+3 more`).
 *
 * @param {string} [props.noOptionFoundText="No option found"]
 * Text shown when the search yields no results.
 *
 * @param {number} [props.maxSelectedItems=8]
 * Maximum number of selected items shown in the badge list.
 *
 * @returns {JSX.Element} A multi-select combobox with searchable options and removable badges.
 *
 * @example
 * // Basic usage with controlled state
 * import { useState } from "react";
 *
 * const options = [
 *   { value: "react", label: "React" },
 *   { value: "vue", label: "Vue" },
 *   { value: "svelte", label: "Svelte" },
 * ];
 *
 * export function Example() {
 *   const [selectedValues, setSelectedValues] = useState<string[]>(["react"]);
 *
 *   return (
 *     <Multicheck
 *       id="frameworks"
 *       label="Frameworks"
 *       options={options}
 *       selectedValues={selectedValues}
 *       setSelectedValues={setSelectedValues}
 *       maxSelectedItems={2}
 *     />
 *   );
 * }
 *
 * @example
 * // Customizing placeholders and the "more" badge text
 * export function ExampleCustomText() {
 *   const [selectedValues, setSelectedValues] = useState<string[]>([]);
 *
 *   return (
 *     <Multicheck
 *       id="tags"
 *       options={[
 *         { value: "design", label: "Design" },
 *         { value: "frontend", label: "Frontend" },
 *         { value: "backend", label: "Backend" },
 *       ]}
 *       selectedValues={selectedValues}
 *       setSelectedValues={setSelectedValues}
 *       selectPlaceholder="Select tags"
 *       searchPlaceholder="Type to search..."
 *       moreText="selected"
 *       showLessText="Collapse"
 *       noOptionFoundText="Nothing matches your search"
 *       maxShownItems={2}
 *     />
 *   );
 * }
 *
 * @remarks
 * - This component is **controlled**: it does not own the selected values state.
 * - Clicking the remove icon on a badge stops event propagation so it won’t toggle the popover.
 * - The trigger uses `role="combobox"` and `aria-expanded` to reflect the popover state.
 *   It is focusable and opens with Enter, Space or ArrowDown; its accessible name
 *   combines the label with the current selection.
 * - Badge remove and expand/collapse controls are real buttons reachable by keyboard.
 */
const Multicheck: React.FC<MulticheckProps> = ({
  id,
  selectedValues,
  setSelectedValues,
  maxShownItems = 8,
  maxSelectedItems,
  label,
  options,
  searchPlaceholder = "Search...",
  selectPlaceholder = "Select option",
  showLessText = "Show Less",
  moreText = "more",
  noOptionFoundText = "No option found",
}) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const baseId = useId();
  const triggerId = `${id}commbobox`;
  const labelId = `${baseId}-label`;
  const summaryId = `${baseId}-summary`;
  const contentId = `${baseId}-content`;

  const toggleSelection = (value: string) => {
    setSelectedValues((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);

      if (maxSelectedItems && prev.length >= maxSelectedItems) return prev;

      return [...prev, value];
    });
  };

  const removeSelection = (value: string) => {
    setSelectedValues((prev) => prev.filter((v) => v !== value));
  };

  const visibleItems = expanded
    ? selectedValues
    : selectedValues.slice(0, maxShownItems);
  const hiddenCount = selectedValues.length - visibleItems.length;

  const selectedLabels = selectedValues
    .map((val) => options.find((o) => o.value === val)?.label)
    .filter(Boolean)
    .join(", ");

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Ignora teclas vindas dos botões internos (remover / expandir).
    if (e.target !== e.currentTarget) return;
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <Body id={labelId} htmlFor={triggerId} as="label" variant="label">
          {label}
        </Body>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            id={triggerId}
            role="combobox"
            tabIndex={0}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={contentId}
            aria-labelledby={label ? `${labelId} ${summaryId}` : summaryId}
            onKeyDown={handleTriggerKeyDown}
            className={styles.trigger}
          >
            <span id={summaryId} className={styles.srOnly}>
              {selectedLabels || selectPlaceholder}
            </span>
            <div className={styles.values}>
              {selectedValues.length > 0 ? (
                <>
                  {visibleItems.map((val) => {
                    const framework = options.find((c) => c.value === val);
                    if (!framework) return null;

                    return (
                      <Badge key={val} className={styles.badge}>
                        <span className={styles.badgeLabel}>
                          {framework.label}
                        </span>
                        <button
                          type="button"
                          className={styles.badgeRemoveBtn}
                          aria-label={`Remover ${framework.label}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSelection(val);
                          }}
                        >
                          <div>
                            <XIcon
                              className={styles.badgeRemoveIcon}
                              aria-hidden="true"
                            />
                          </div>
                        </button>
                      </Badge>
                    );
                  })}

                  {hiddenCount > 0 || expanded ? (
                    <Badge variant="outline" className={styles.badge} asChild>
                      <button
                        type="button"
                        className={styles.badgeToggle}
                        aria-expanded={expanded}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpanded((prev) => !prev);
                        }}
                      >
                        {expanded
                          ? showLessText
                          : `+${hiddenCount} ${moreText}`}
                      </button>
                    </Badge>
                  ) : null}
                </>
              ) : (
                <span className={styles.placeholder} aria-hidden="true">
                  {selectPlaceholder}
                </span>
              )}
            </div>

            <ChevronsUpDownIcon
              className={styles.chevron}
              size={16}
              aria-hidden="true"
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          id={contentId}
          className={styles.popoverContent}
          data-combobox-popper
          onWheelCapture={(e) => e.stopPropagation()}
          onTouchMoveCapture={(e) => e.stopPropagation()}
        >
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{noOptionFoundText}</CommandEmpty>
              <CommandGroup>
                {options.map((framework) => {
                  const isSelected = selectedValues.includes(framework.value);
                  return (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      // A busca do cmdk usa `value` + `keywords`: inclui o rótulo
                      // visível para que digitar o texto exibido encontre a opção.
                      keywords={[framework.label]}
                      // `aria-selected` do cmdk indica o destaque; a seleção real
                      // fica em `aria-checked` (suportado em role="option").
                      aria-checked={isSelected}
                      onSelect={() => toggleSelection(framework.value)}
                    >
                      <span className={styles.itemLabel}>
                        {framework.label}
                      </span>
                      {isSelected && (
                        <CheckIcon
                          size={16}
                          className={styles.itemCheck}
                          aria-hidden="true"
                        />
                      )}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { Multicheck };
