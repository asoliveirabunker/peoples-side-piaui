# Fotos reais na Nossa Caminhada + remoção da seção "A caminhada continua"

## Objetivo
Colocar as 4 fotos oficiais enviadas na seção **Nossa Caminhada por todo o Piauí** (hoje com placeholders de marca) e remover por completo a seção **A caminhada continua** (#agora).

## 1. Upload das fotos (CDN)
As 4 imagens enviadas viram assets CDN via `lovable-assets` (sem binário no repositório):

| Arquivo | Foto | Slot na seção |
|---|---|---|
| `multidao.png` | Grupo na Farinhada (muita gente, polegares) | Principal (grande) |
| `abraco-comunidade.png` | Abraço em senhora (retrato vertical) | Lateral alta |
| `comunidade.png` | Aperto de mão com moradores sentados | Mosaico |
| `zona-rural.png` | Grupo no pórtico "Bem-vindo a Prata do Piauí" | Mosaico |

## 2. Nova grade com 4 fotos (Journey)
Layout em mosaico que aproveita a orientação de cada foto:

```text
Desktop (12 colunas)
+-----------------------------+-----------+
|  MULTIDÃO (grande, 8 col)   |           |
+-----------------------------+  ABRAÇO   |
|  COMUNIDADE  |  ZONA RURAL  | (vertical |
|  (4 col)     |  (4 col)     |  2 linhas)|
+--------------+--------------+-----------+

Mobile: empilhado — Multidão larga, Comunidade + Zona Rural lado a lado, Abraço por último.
```

- Substituir `PhotoPlaceholder` por `<img>` reais (`object-cover`, cantos arredondados, leve zoom no hover).
- Remover os rótulos "FOTO OFICIAL — ..." e as marcas de mira: com foto real, o mosaico fica limpo.
- Manter as animações de reveal (clip) respeitando o scroll, como hoje.
- Alt texts reais descritivos em `src/data/photos.ts` (novo slot `journeyC`).

## 3. Botão "Ver registros"
Passa a abrir o **Instagram do mandato** (`CONTACTS.instagram`, nova aba) — decisão do usuário.

## 4. Remover a seção "A caminhada continua"
- Retirar `<Updates />` de `src/routes/index.tsx` (import + uso).
- Excluir `src/components/site/Updates.tsx` e `src/data/updates.ts`.
- Remover o link **"Agora"** do menu (`src/data/navigation.ts`) — header e mobile.
- Varrer o projeto por outras referências a `#agora` e ajustar.
- O Instagram continua acessível no rodapé (Contato) e no botão "Ver registros".

## 5. Verificação
- `bunx tsc --noEmit` sem erros.
- Screenshots Playwright (desktop + mobile) da seção Nossa Caminhada e da página toda; checar console.

## Detalhes técnicos
- Assets: `lovable-assets create --file /mnt/user-uploads/image-N.png --filename <nome>.png > src/assets/<nome>.png.asset.json`, importados como JSON no componente.
- Arquivos tocados: `src/components/site/Journey.tsx`, `src/data/photos.ts`, `src/data/navigation.ts`, `src/routes/index.tsx`; exclusões: `Updates.tsx`, `updates.ts`; novos: 4 `.asset.json`.
- Memória do projeto atualizada ao final (Journey com fotos reais; seção Updates removida — não reintroduzir).
