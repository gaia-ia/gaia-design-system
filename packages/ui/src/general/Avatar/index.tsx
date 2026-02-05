import * as AvatarPrimitive from "@radix-ui/react-avatar";

import styles from "./styles.module.css";

function Avatar({
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg";
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={styles.avatar}
      {...props}
    />
  );
}

function AvatarImage(
  props: React.ComponentProps<typeof AvatarPrimitive.Image>,
) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={styles.image}
      {...props}
    />
  );
}

function AvatarFallback(
  props: React.ComponentProps<typeof AvatarPrimitive.Fallback>,
) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={styles.fallback}
      {...props}
    />
  );
}

function AvatarBadge(props: React.ComponentProps<"span">) {
  return <span data-slot="avatar-badge" className={styles.badge} {...props} />;
}

function AvatarGroup(props: React.ComponentProps<"div">) {
  return <div data-slot="avatar-group" className={styles.group} {...props} />;
}

function AvatarGroupCount(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={styles.groupCount}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
};
