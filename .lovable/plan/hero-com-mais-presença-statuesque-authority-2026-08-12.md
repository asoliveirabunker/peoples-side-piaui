# Hero com mais presença — "Statuesque Authority"

## Objetivo
Aumentar o Georgiano no hero com postura profissional: foto maior, ancorada na base da seção (sem "flutuar"), com o título "DO LADO DO POVO." respirando à esquerda — **sem sobrepor** texto, botões ou header em nenhuma tela.

## O que muda no hero (src/components/site/Hero.tsx)

1. **Foto ancorada no chão da seção**
   - Hoje a foto flutua a 76vh com espaço morto acima. Ela passa a ocupar quase toda a altura do hero (`calc(100svh - altura do header)`) e encosta na borda inferior da seção, dissolvendo no azul-marinho com o fade já existente (sem corte seco).
   - Em telas grandes (xl), leve escala extra (`scale-105` com origem na base) para mais estatura.
   - A foto cresce **para cima e para a direita**, nunca para a esquerda — o título e os CTAs ficam intocados, com a coluna de texto um pouco mais larga (1.1fr × 0.9fr).

2. **Fundo com profundidade (sem poluir)**
   - Brilho azul da marca atrás da silhueta (já existe, será reforçado sutilmente).
   - Brilho amarelo bem suave (blur alto, opacidade baixa) no canto inferior esquerdo, equilibrando a composição.
   - Gradiente de "chão" na base da foto para assentar a figura.

3. **Detalhes editoriais da direção escolhida**
   - Eyebrow "Georgiano Neto" ganha traço amarelo + texto amarelo (no lugar do pontinho), combinando com o estilo da referência.
   - Tag vertical decorativa "PIAUÍ NO CORAÇÃO" na borda direita, quase invisível (20% de opacidade), só em telas xl.
   - Nada de molduras, cartões ou faixas diagonais.

4. **Mobile**
   - Texto primeiro, foto abaixo, maior que hoje (de 48vh para ~54vh), ancorada na base da seção, sem sobrepor os botões.

## Fora de escopo
- Conteúdo (título, subtítulo, CTAs e links) permanece igual.
- Demais seções não são tocadas.

## Detalhes técnicos
- Apenas `src/components/site/Hero.tsx` e `src/styles.css` (nova utility `.vertical-text` com `writing-mode`).
- Somente tokens semânticos (`night`, `brand`, `sun`) — nenhum hex fixo no componente.
- Fade da foto (`.hero-photo-fade`) e animações de reveal respeitando scroll são mantidos.
- Verificação: typecheck + screenshots Playwright (desktop 1280 e mobile 390) conferindo que foto não sobrepõe headline, CTAs e header.
