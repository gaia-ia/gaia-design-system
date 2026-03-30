import { Tabs, TabsContent, TabsList, TabsTrigger } from "@gaia-dev/ui";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Components/general/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
        <TabsTrigger value="settings">Configurações</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Gerencie as informações da sua conta, como nome e e-mail.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Atualize sua senha para manter sua conta segura.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Ajuste as configurações gerais do sistema.</p>
      </TabsContent>
    </Tabs>
  );
};

export const LineVariant = () => {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="analytics">Análises</TabsTrigger>
        <TabsTrigger value="reports">Relatórios</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>Resumo das principais métricas e indicadores.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p>Dados detalhados de uso e comportamento.</p>
      </TabsContent>
      <TabsContent value="reports">
        <p>Relatórios exportáveis com histórico completo.</p>
      </TabsContent>
    </Tabs>
  );
};

export const Vertical = () => {
  return (
    <Tabs defaultValue="profile" orientation="vertical">
      <TabsList>
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="notifications">Notificações</TabsTrigger>
        <TabsTrigger value="billing">Cobrança</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <p>Edite suas informações de perfil e foto.</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p>Configure suas preferências de notificação.</p>
      </TabsContent>
      <TabsContent value="billing">
        <p>Gerencie seu plano e métodos de pagamento.</p>
      </TabsContent>
    </Tabs>
  );
};

export const Disabled = () => {
  return (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Ativa</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Desabilitada
        </TabsTrigger>
        <TabsTrigger value="other">Outra</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p>Esta aba está ativa e pode ser selecionada.</p>
      </TabsContent>
      <TabsContent value="disabled">
        <p>Este conteúdo não pode ser acessado.</p>
      </TabsContent>
      <TabsContent value="other">
        <p>Outra aba disponível para interação.</p>
      </TabsContent>
    </Tabs>
  );
};

export const VerticalLine = () => {
  return (
    <Tabs defaultValue="general" orientation="vertical">
      <TabsList variant="line">
        <TabsTrigger value="general">Geral</TabsTrigger>
        <TabsTrigger value="security">Segurança</TabsTrigger>
        <TabsTrigger value="integrations">Integrações</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <p>Configurações gerais da aplicação.</p>
      </TabsContent>
      <TabsContent value="security">
        <p>Opções de segurança e autenticação.</p>
      </TabsContent>
      <TabsContent value="integrations">
        <p>Gerencie integrações com serviços externos.</p>
      </TabsContent>
    </Tabs>
  );
};
