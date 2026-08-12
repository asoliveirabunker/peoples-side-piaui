# Mover foto do abraço para a seção Presença

## Objetivo

A foto do abraço hoje está no banner dedicado (`EmbraceBanner`), que tem dois problemas apontados: repete a headline "Do lado do povo" do hero e o `bg-cover` corta a cabeça das pessoas. A foto passa a ocupar o slot de imagem da seção **Presença** ("Política de verdade se faz presente."), exibida inteira e com margens. O banner dedicado sai do ar.

## Mudanças

### 1. Seção Presença recebe a foto real — `src/components/site/Presence.tsx`

- Substituir o `PhotoPlaceholder` pela imagem real já publicada no CDN (`@/assets/abraco.png.asset.json`, 1672×941, paisagem).
- Exibição **sem corte**: `object-contain` dentro de uma moldura com respiro (`padding` generoso nas 4 bordas), garantindo que a foto inteira apareça — cabeças preservadas e margem garantida em qualquer viewport.
- Manter a estética de "mira de foto" da marca: cantos sutis em `border-white/25` desenhados na moldura (na área da margem, sem sobrepor a imagem).
- Remover a etiqueta "FOTO OFICIAL — ABRAÇO" (chrome de placeholder não faz sentido em foto real).
- Manter o reveal com máscara (`variant="clip"`) já existente.
- Mobile: altura do bloco ajustada para a proporção paisagem da foto (nada de faixa estreita cortada).

### 2. Remover o banner dedicado

- Excluir `src/components/site/EmbraceBanner.tsx`.
- Remover import e uso em `src/routes/index.tsx` (fluxo passa a ser: Trust → HumanSide).
- O asset `abraco.png` no CDN continua em uso (agora pela Presença) — nada a deletar.

### 3. Metadados — `src/data/photos.ts`

- Atualizar o comentário do slot `presence` (agora é foto real, não mais placeholder) e o cabeçalho do arquivo. Alt text já existente é mantido.

### 4. Verificação

- `bunx tsc --noEmit`.
- Screenshots Playwright (desktop 1280px e mobile 390px) da seção Presença: confirmar foto inteira visível, margens ao redor, cantos de marca, e página fluindo sem o banner.

## Detalhes técnicos

- Foto é paisagem (~16:9) e a coluna esquerda da Presença é alta no desktop: por isso `object-contain` + centralização vertical, em vez de `object-cover` (que cortaria as laterais/pessoas).
- Nenhuma dependência nova; nenhuma mudança de dados além de comentários.
