import * as RadioGroup from "@radix-ui/react-radio-group";

import { Body } from "../../typography/Body";
import styles from "./styles.module.css";

/**
 * A styled wrapper around `RadioGroup.Root` from Radix UI, used to render a group of button-like radio items.
 *
 * Applies custom styles for layout and spacing through a CSS module. All props are forwarded to `RadioGroup.Root`.
 *
 * @component
 * @param {RadioGroup.RadioGroupProps} props - All standard props accepted by `RadioGroup.Root`, including `value`, `onValueChange`, and `className`.
 * @returns {JSX.Element} A styled radio group root element.
 *
 * @example
 * <ButtonGroupRoot value={selected} onValueChange={setSelected}>
 *   <ButtonGroupItem value="1">One</ButtonGroupItem>
 *   <ButtonGroupItem value="2">Two</ButtonGroupItem>
 * </ButtonGroupRoot>
 */
export const ButtonGroupRoot = (props: RadioGroup.RadioGroupProps) => {
  return (
    <RadioGroup.Root
      className={`${styles.root} ${props.className} `}
      {...props}
    ></RadioGroup.Root>
  );
};

ButtonGroupRoot.displayName = "ButtonGroupRoot";

/**
 * A styled radio item component for use within `ButtonGroupRoot`.
 *
 * Wraps `RadioGroup.Item` from Radix UI and includes:
 * - A visible selection indicator
 * - A `Body` typography wrapper around the label content
 *
 * Automatically applies custom styles via CSS module.
 *
 * @component
 * @param {RadioGroup.RadioGroupItemProps} props - Props passed to the underlying `RadioGroup.Item`, including `value`, `disabled`, and `className`.
 * @param {React.ReactNode} props.children - The content displayed inside the button.
 * @returns {JSX.Element} A single button-like radio item.
 *
 * @example
 * <ButtonGroupItem value="apple">Apple</ButtonGroupItem>
 */
export const ButtonGroupItem = ({
  children,
  ...props
}: RadioGroup.RadioGroupItemProps) => {
  return (
    <RadioGroup.Item className={`${styles.item} ${props.className}`} {...props}>
      <RadioGroup.Indicator />
      <Body variant="small_body">{children}</Body>
    </RadioGroup.Item>
  );
};

ButtonGroupItem.displayName = "ButtonGroupItem";
