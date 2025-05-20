import * as RadioGroup from "@radix-ui/react-radio-group";

import styles from "./styles.module.css";
import { Body } from "../../typography/Body";

export const Root = (props: RadioGroup.RadioGroupProps) => {
  return (
    <RadioGroup.Root
      className={`${styles.root} ${props.className} `}
      {...props}
    ></RadioGroup.Root>
  );
};

Root.displayName = "ButtonGroup.Root";

export const Item = ({
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

Item.displayName = "ButtonGroup.Item";
