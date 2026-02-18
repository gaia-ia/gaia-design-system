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
import { useState } from "react";

import styles from "./styles.module.css";
import { MulticheckProps } from "./types";

const Multicheck: React.FC<MulticheckProps> = ({
  id,
  selectedValues,
  setSelectedValues,
  maxShownItems = 8,
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

  const toggleSelection = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const removeSelection = (value: string) => {
    setSelectedValues((prev) => prev.filter((v) => v !== value));
  };

  const visibleItems = expanded
    ? selectedValues
    : selectedValues.slice(0, maxShownItems);
  const hiddenCount = selectedValues.length - visibleItems.length;

  return (
    <div className={styles.wrapper}>
      {label && (
        <Body htmlFor={`${id}commbobox`} as="label" variant="label">
          {label}
        </Body>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            id={`${id}commbobox`}
            role="combobox"
            aria-expanded={open}
            className={styles.trigger}
          >
            <div className={styles.values}>
              {selectedValues.length > 0 ? (
                <>
                  {visibleItems.map((val) => {
                    const framework = options.find((c) => c.value === val);
                    if (!framework) return null;

                    return (
                      <Badge key={val} className={styles.badge}>
                        {framework.label}
                        <div
                          className={styles.badgeRemoveBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSelection(val);
                          }}
                        >
                          <div>
                            <XIcon className={styles.badgeRemoveIcon} />
                          </div>
                        </div>
                      </Badge>
                    );
                  })}

                  {hiddenCount > 0 || expanded ? (
                    <Badge
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded((prev) => !prev);
                      }}
                      className={styles.badge}
                    >
                      {expanded ? showLessText : `+${hiddenCount} ${moreText}`}
                    </Badge>
                  ) : null}
                </>
              ) : (
                <span className={styles.placeholder}>{selectPlaceholder}</span>
              )}
            </div>

            <ChevronsUpDownIcon className={styles.chevron} size={16} />
          </div>
        </PopoverTrigger>

        <PopoverContent
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
                {options.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => toggleSelection(framework.value)}
                  >
                    <span className={styles.itemLabel}>{framework.label}</span>
                    {selectedValues.includes(framework.value) && (
                      <CheckIcon size={16} className={styles.itemCheck} />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { Multicheck };
