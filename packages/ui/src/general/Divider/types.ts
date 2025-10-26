import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

export interface DividerProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  color?: string;
  orientation?: "horizontal" | "vertical";
  /**
   * Define se o divider é puramente decorativo (visual) ou semântico.
   *
   * - `true`: Apenas visual, leitores de tela ignoram (role="none")
   * - `false`: Separa conteúdos importantes, leitores de tela anunciam (role="separator")
   *
   * @default true
   */
  decorative?: boolean;
  className?: string;
}
