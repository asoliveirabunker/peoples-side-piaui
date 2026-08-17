# Imagens mais leves e rápidas no mobile

## Problema

As fotos oficiais estão em PNG sem compressão: cerca de 6,6 MB somados. As duas maiores são o hero (2,5 MB) e o abraço da Presença (1,9 MB). No 4G isso deixa o carregamento lento e o hero demora a aparecer.

## O que muda

1. **Reencodar todas as fotos em WebP** (com transparência preservada no hero), redimensionadas para o tamanho máximo realmente exibido (~1600px no maior lado; hero um pouco maior por ser recorte de corpo inteiro). Alvo: cada foto abaixo de ~250 KB, com o conjunto caindo de ~6,6 MB para menos de 1 MB.
2. **Versões mobile menores** para as fotos grandes (hero, presença, mosaico da caminhada): variante de ~800px servida via `srcset`/`sizes`, para o celular baixar só o necessário.
3. **Reservar espaço** com `width`/`height` em cada `<img>`, evitando o "salto" de layout durante o carregamento.
4. **Prioridades de carregamento**: hero permanece `fetchpriority="high"` com preload no `<head>`; todas as demais continuam `loading="lazy"`.

O enquadramento, os recortes, o fade do hero, os cantos de mira e as legendas ficam exatamente como estão — muda só o peso dos arquivos.

## Verificação

- Medir o total transferido de imagens antes/depois em viewport mobile (390px) e confirmar que a variante pequena é a escolhida.
- Screenshots mobile e desktop das quatro seções com foto (Hero, Presença, Nossa Caminhada, rodapé) para garantir que nada mudou visualmente.

## Detalhes técnicos

- Conversão feita no sandbox com Pillow (WebP qualidade ~82, `method=6`), reupload pelo CLI de assets do Lovable e atualização dos ponteiros `src/assets/*.asset.json`; os PNGs antigos são substituídos pelos novos assets.
- `srcset` com duas larguras por foto grande e `sizes` coerente com o layout (`100vw` no mobile, ~50vw no desktop).
- Preload do hero adicionado no `head()` da rota `/` como `<link rel="preload" as="image" imagesrcset=...>`.
