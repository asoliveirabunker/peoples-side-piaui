# Hero com a foto oficial do Georgiano

## Objetivo
Substituir o placeholder do hero pela foto real enviada (Georgiano de polo azul, ao microfone), integrada ao fundo azul-escuro com um fade suave — sem moldura, sem cartão, sem faixas — para que ela complemente a headline "DO LADO DO POVO." sem competir com ela. Segue o mockup de referência enviado.

## A foto
- O arquivo enviado (`ChatGPT_Image_12_de_ago._de_2026_15_48_11.png`, 1024×1536) já tem **fundo transparente** (canal alpha) — não precisa de recorte nem edição.
- Será publicada como asset CDN via `lovable-assets`, gerando `src/assets/georgiano-hero.png.asset.json` (o binário não entra no repositório).

## Mudanças no Hero (`src/components/site/Hero.tsx`)
1. **Remover** o `PhotoPlaceholder` e o bloco decorativo `bg-sun/15` atrás dele.
2. **Inserir** `<img>` da foto na coluna direita, ancorada na base da seção (o Georgiano "pisa" na dobra do hero):
   - `mask-image` em gradiente vertical: imagem sólida até ~55% e dissolvendo até transparente na base — o fade que funde a foto ao fundo;
   - leve fade também na borda esquerda da foto (lado do texto), reforçando o "sem competir";
   - brilho radial sutil em `brand` atrás da foto para destacá-la do fundo sem virar cartão;
   - sem bordas, sem `ring`, sem `rounded` — nada de aparência de card.
3. **Animação**: manter entrada suave via `Reveal` (fade + leve subida), sem clip de cartão.
4. **Mobile**: foto abaixo do texto, centralizada, altura menor (~48vh), mesmo fade na base.
5. **Alt text**: usa o já definido em `src/data/photos.ts` — "Georgiano Neto sorrindo, falando ao microfone".

## Verificação
- Screenshots desktop e mobile (Playwright) confirmando: foto fundida ao fundo, headline legível e protagonista, sem artefatos de recorte, console sem erros.
- Typecheck (`tsc --noEmit`).

## Fora de escopo
- Demais placeholders do site (Presença, Caminhada, etc.) continuam como estão — só o hero recebe foto real nesta etapa.
