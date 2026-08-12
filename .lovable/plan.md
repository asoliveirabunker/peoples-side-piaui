# Plano: novo bloco emocional com foto do abraço

## Objetivo
Inserir a foto enviada (Georgiano Neto abraçando uma moradora) como um novo bloco dedicado no site, posicionado de forma estratégica e sem competir visualmente com os outros elementos.

## Decisões já tomadas
- A foto será usada como imagem real no site, não apenas como referência.
- O bloco será novo, não substituirá Hero nem Presença.

## O que será feito

### 1. Upload da imagem para Lovable Assets
- Usar o CLI `lovable-assets create` a partir do arquivo em `/mnt/user-uploads/ChatGPT_Image_12_de_ago._de_2026_15_29_21.png`.
- Salvar o ponteiro `.asset.json` em `src/assets/abraco.png.asset.json`.
- Referenciar a URL do CDN no componente.

### 2. Criar componente `src/components/site/EmbraceBanner.tsx`
- Bloco full-width, posicionado entre a seção **Confiança** (`#confianca`) e **5 fatos sobre mim** (`#sobre`).
- Composição:
  - Imagem de fundo cobrindo toda a largura, com `object-cover` e foco no centro.
  - Overlay escuro azul (`bg-night/75` a `bg-night/85`) para garantir legibilidade e não competir com o conteúdo vizinho.
  - Faixa diagonal amarela/azul sutil no canto (reutilizando o componente `Band`) para manter a identidade visual.
  - Texto curto e impactante, ex.: “Do lado do povo, sempre.”, em Oswald branco, com destaque amarelo opcional.
  - Alt text acessível descrevendo o abraço.
- Animação de entrada via `Reveal` (fade/scale sutil) ao entrar na viewport, respeitando o padrão de scroll do site.

### 3. Inserir o bloco na página
- Atualizar `src/routes/index.tsx` para renderizar `<EmbraceBanner />` entre `<Trust />` e `<HumanSide />`.

### 4. Ajustes de SEO/performance
- Adicionar `loading="lazy"` na imagem de fundo (é abaixo da dobra).
- Garantir que o bloco tenha `aria-label` e contraste adequado.

### 5. Verificação
- Rodar `bunx tsc --noEmit` para garantir que não há erros de tipo.
- Capturar screenshots desktop/mobile via Playwright para confirmar que a imagem não sobrecarrega a hierarquia visual e que a transição entre Confiança → Banner → 5 fatos está fluida.

## Resultado esperado
Um banner emocional, largo e discreto, que quebra o ritmo entre dados e história pessoal sem roubar a atenção do headline principal ou das votações.
