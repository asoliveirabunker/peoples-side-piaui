# Redesign da seção "5 fatos sobre mim"

## Objetivo

Trocar a seção "Uma história de vida" para o estilo da referência enviada: fundo escurecido com foto do Georgiano, 5 faixas azuis empilhadas com texto branco e números grandes amarelos (01.–05.) à esquerda.

## O que será alterado

1. **Conteúdo** — `src/data/facts.ts`
   - Substituir os 5 textos curtos pelas frases completas da imagem de referência:
     1. "Sou filho de Teresina, tenho 32 anos e sou formado em direito;"
     2. "Fui o deputado estadual mais jovem eleito do Brasil em 2014, e fui o mais votado da história do Piauí em 2018 e 2022;"
     3. "Minhas comidas preferidas são galinha caipira e pudim;"
     4. "Adoro cozinhar, minha especialidade é lasanha;"
     5. "Em 2025 ganhei o maior presente da minha vida, minha filha Ana Jussara."

2. **Título da seção**
   - Trocar de "Uma história de vida" para "5 fatos sobre mim".

3. **Layout** — `src/components/site/HumanSide.tsx`
   - Fundo da seção: placeholder de marca `PHOTOS.human` ocupando toda a área, com overlay escuro (~75–80%) para garantir legibilidade do texto.
   - Faixas de informação: 5 retângulos azul-escuro (`brand-deep`/`night`) alinhados verticalmente, com canto levemente cortado (`cut-corner`) para manter a identidade geométrica.
   - Números: "01." a "05." em amarelo (`sun`), fonte display (Oswald), grandes, posicionados à esquerda de cada faixa com leve sobreposição.
   - Texto: branco, dentro das faixas azuis, com bom contraste e espaçamento.
   - Remover a foto lateral e o blockquote atual; a nova lista carrega sozinha a seção.
   - Manter animações de scroll (`Reveal`) nos itens, escalonadas.

4. **Ajustes de suporte**
   - Garantir que `PhotoPlaceholder` possa ser usado como imagem de fundo sem perder o alt text e o fallback de marca.
   - Adicionar tokens/utilitários se necessário para o overlay escuro e o alinhamento dos números.

5. **Verificação**
   - Testar renderização desktop e mobile com Playwright.
   - Confirmar legibilidade do texto sobre a foto e o contraste das faixas azuis.

## Notas técnicas

- A imagem enviada é apenas referência de design; não será incorporada diretamente no site. O placeholder de marca (`PHOTOS.human`) continua no lugar, pronto para ser trocado pela foto oficial quando disponível.
- Mantemos a paleta oficial existente: azul `#0360ED`, amarelo `#F6A708`, fontes Oswald + Inter.
- Nenhuma nova dependência é necessária.
