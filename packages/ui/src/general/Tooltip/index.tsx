import { useEffect, useId } from "react";
import { Tooltip as T } from "react-tooltip";

import { Body } from "../../typography/Body";
import clsx from "../../utils/clsx";
import styles from "./styles.module.css";
import type { TooltipProps } from "./types";

const sameText = (a: string | null | undefined, b: string) =>
  (a ?? "").replace(/\s+/g, " ").trim() === b.replace(/\s+/g, " ").trim();

/**
 * A styled wrapper around `react-tooltip` for displaying contextual information on hover or focus.
 *
 * Associates itself with a target element using the `anchorSelect` CSS selector, and supports configurable
 * placement, background color, and typography via the `Body` component.
 *
 * Accessibility:
 * - Closes with Escape and stays open while the pointer is over it (WCAG 1.4.13).
 * - Anchors found by `anchorSelect` when the tooltip mounts get `aria-describedby` pointing to a
 *   hidden copy of `text`, so screen readers announce it on focus (skipped when the anchor's name
 *   already is the same text). Anchors added to the DOM later are not linked: render them before
 *   the tooltip, or set `aria-describedby` yourself. Do not put essential information only in a tooltip.
 *
 * @component
 * @param {TooltipProps} props - Props to configure the tooltip.
 * @param {string} props.text - The tooltip content to display.
 * @param {string} props.anchorSelect - A CSS selector that identifies the element to anchor the tooltip to.
 * @param {import("react-tooltip").PlacesType} [props.place="top"] - Position of the tooltip relative to the anchor (`top`, `right`, `bottom`, `left`, etc.).
 * @param {string} [props.color="var(--color-background-100)"] - Background color of the tooltip.
 * @param {string} [props.className] - Optional additional class names for styling.
 * @returns {JSX.Element} A styled tooltip connected to an anchor element.
 *
 * @example
 * <button id="info-button">Hover me</button>
 * <Tooltip
 *   text="This button triggers an info modal"
 *   anchorSelect="#info-button"
 *   place="bottom"
 * />
 */
export const Tooltip = ({
  text,
  anchorSelect,
  place = "top",
  color = "var(--color-background-100)",
  className,
}: TooltipProps) => {
  const descriptionId = `tooltip-${useId().replace(/:/g, "")}`;

  // O react-tooltip não liga a âncora ao texto: põe aria-describedby nela.
  useEffect(() => {
    let anchors: Element[];
    try {
      anchors = Array.from(document.querySelectorAll(anchorSelect));
    } catch {
      return;
    }
    const linked = anchors.filter((anchor) => {
      if (
        sameText(anchor.getAttribute("aria-label"), text) ||
        sameText(anchor.textContent, text)
      ) {
        return false;
      }
      const ids = (anchor.getAttribute("aria-describedby") ?? "")
        .split(/\s+/)
        .filter(Boolean);
      if (ids.includes(descriptionId)) return false;
      anchor.setAttribute(
        "aria-describedby",
        [...ids, descriptionId].join(" "),
      );
      return true;
    });

    return () => {
      linked.forEach((anchor) => {
        const ids = (anchor.getAttribute("aria-describedby") ?? "")
          .split(/\s+/)
          .filter((id) => id && id !== descriptionId);
        if (ids.length) anchor.setAttribute("aria-describedby", ids.join(" "));
        else anchor.removeAttribute("aria-describedby");
      });
    };
  }, [anchorSelect, descriptionId, text]);

  return (
    <>
      <span id={descriptionId} hidden style={{ display: "none" }}>
        {text}
      </span>
      <T
        className={clsx(styles.tooltip, className)}
        anchorSelect={anchorSelect}
        place={place}
        style={{ backgroundColor: color }}
        clickable
        globalCloseEvents={{ escape: true }}
      >
        <Body variant="small_body">{text}</Body>
      </T>
    </>
  );
};

Tooltip.displayName = "Tooltip";
