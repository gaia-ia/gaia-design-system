# Configuração do Token NPM para CI/CD

> **Renovar a cada 90 dias** - Próxima renovação: Março/2026

## Link direto

https://www.npmjs.com/settings/~/tokens/granular-access-tokens/new

---

## Campos para preencher

| Campo | Valor |
|-------|-------|
| **Token name** | `ci-cd-github-gaia-design-system` |
| **Description** | `Token para GitHub Actions release` |
| **Bypass two-factor authentication (2FA)** | Marcado |
| **Allowed IP ranges** | (deixe vazio) |
| | |
| **Packages and scopes** | |
| Permissions | **Read and write** |
| Select packages | **Only select packages and scopes** |
| Select packages and scopes | `@gaia-dev` |
| | |
| **Organizations** | |
| Permissions | **Read and write** |
| Select organizations | **gaia-dev** |
| | |
| **Expiration** | |
| Expiration Date | **90 days** |

---

## Após gerar o token

1. Copie o token gerado
2. Acesse: https://github.com/gaia-ia/gaia-design-system/settings/secrets/actions
3. Edite o secret `NPM_TOKEN`
4. Cole o novo token
5. Salve

---

## Verificação

O **Summary** deve mostrar:
- "read and write access to X packages and 1 scopes"
- "read and write access to 1 organizations"

---

## Por que isso é necessário?

Desde Novembro/2025, o NPM exige tokens granulares com limite máximo de 90 dias para operações de escrita. Tokens clássicos foram descontinuados.

Referências:
- https://github.blog/changelog/2025-11-05-npm-security-update-classic-token-creation-disabled-and-granular-token-changes/
- https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/
