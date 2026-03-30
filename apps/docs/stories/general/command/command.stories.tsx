import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@gaia-dev/ui";
import type { Meta } from "@storybook/react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Command> = {
  title: "Components/general/Command",
  component: Command,
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  return (
    <div style={{ position: "relative", width: 350, height: 300 }}>
      <Command>
        <CommandInput placeholder="Buscar comando..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Sugestões">
            <CommandItem>
              <Calendar />
              Calendário
            </CommandItem>
            <CommandItem>
              <Smile />
              Buscar Emoji
            </CommandItem>
            <CommandItem>
              <Calculator />
              Calculadora
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Configurações">
            <CommandItem>
              <User />
              Perfil
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              Cobrança
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              Configurações
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export const DialogVariant = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir Command Palette</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar comando..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Sugestões">
            <CommandItem>
              <Calendar />
              Calendário
            </CommandItem>
            <CommandItem>
              <Smile />
              Buscar Emoji
            </CommandItem>
            <CommandItem>
              <Calculator />
              Calculadora
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Configurações">
            <CommandItem>
              <User />
              Perfil
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              Cobrança
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              Configurações
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export const WithDisabledItems = () => {
  return (
    <div style={{ position: "relative", width: 350, height: 250 }}>
      <Command>
        <CommandInput placeholder="Buscar comando..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Ações">
            <CommandItem>
              <User />
              Perfil
            </CommandItem>
            <CommandItem disabled>
              <CreditCard />
              Cobrança (indisponível)
            </CommandItem>
            <CommandItem>
              <Settings />
              Configurações
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};
