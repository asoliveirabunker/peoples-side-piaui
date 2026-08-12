# Plano — Seção Confiança: números que contam, barras que sobem e estrela em destaque

## Objetivo
Na seção "Uma história de Confiança", fazer tudo reagir ao scroll: os números de votos **contam de zero até o valor final**, as **barras sobem** em sincronia, e o selo da **estrela** ("Deputado estadual mais votado da história do Piauí") ganha muito mais presença, como na referência enviada.

## Mudanças

### 1. Números com count-up no scroll
- Novo componente `CountUp` (`src/components/site/CountUp.tsx`): anima o número de 0 até o total de votos usando `requestAnimationFrame`, com easing suave (ease-out), duração ~1,4s.
- Formatação pt-BR durante toda a animação (37.204 → 79.723 → 109.025).
- Dispara **uma única vez**, quando a seção entra na tela (reutiliza o `useReveal` já existente no Trust).
- Atraso escalonado por coluna (0ms / 140ms / 280ms), sincronizado com a subida de cada barra.

### 2. Barras que sobem (já existe — sincronizar)
- Manter a animação atual `scaleY(0) → scaleY(1)`; ajustar a duração para acompanhar o ritmo do count-up, mantendo o stagger de 140ms entre barras.

### 3. Mais ênfase na estrela
Seguindo a referência (faixa larga e clara com estrela amarela):
- Estrela bem maior (aprox. o dobro do tamanho atual) com **brilho pulsante sutil** (`animate-pulse-soft`, já existente no design system).
- Selo mais largo e alto: fundo amarelo-claro mais presente, borda `sun` mais forte, sombra suave e cantos arredondados.
- Texto do selo maior (Oswald, uppercase), ocupando a largura da coluna de texto.
- Entrada do selo com leve scale-in além do fade, para dar peso ao momento.

### 4. Tudo respeita scroll e acessibilidade
- Todas as animações disparam via IntersectionObserver ao entrar na viewport (uma vez só).
- `prefers-reduced-motion`: números aparecem já no valor final, barras abertas, sem pulso na estrela.

## Arquivos
- `src/components/site/CountUp.tsx` — **novo**, componente de contagem animada.
- `src/components/site/Trust.tsx` — integra CountUp nos três números, redesenha o selo da estrela, sincroniza tempos.
- `src/styles.css` — ajuste fino da duração de `.trust-bar` (e entrada scale-in do selo, se necessário).

## Verificação
- Typecheck (`tsc --noEmit`).
- Playwright: screenshots da seção no desktop e mobile confirmando count-up concluído, barras no topo e selo da estrela em destaque; console sem erros.
