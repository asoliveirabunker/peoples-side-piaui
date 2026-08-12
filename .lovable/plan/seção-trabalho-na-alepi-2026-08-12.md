# Seção "Trabalho na ALEPI"

Nova seção editorial na homepage, inserida **depois de "5 fatos sobre mim" e antes do rodapé** — mantém o ritmo claro/escuro da página (Confiança claro → 5 fatos escuro → ALEPI claro → rodapé escuro) e fecha a narrativa com trabalho verificável antes do contato.

## Copy (exata do brief)

- Eyebrow: **TRABALHO NA ALEPI**
- Headline: **TRABALHO QUE CHEGA À VIDA DAS PESSOAS.**
- Sub: Projetos e iniciativas apresentados por Georgiano Neto em áreas que fazem parte do dia a dia dos piauienses.

## Estrutura: 1 protagonista + 3 secundários

Ordem de leitura em cada card: **tag → título → descrição → chip de status → referência → link oficial**.

**01 — PROTEÇÃO À PESSOA IDOSA** (protagonista, ~55–60% da área no desktop)
- "Mais segurança nas relações de crédito." · chip **VIROU LEI** · PLO 190/2023 · "Ver na ALEPI ↗"
- Composição tipográfica: "01" gigante em baixa opacidade, ícone ShieldCheck, pattern gráfico discreto da identidade. **Sem foto** — as fotos reais já estão em uso nas outras seções (repetir polui) e o brief proíbe imagem gerada por IA; vale o fallback do próprio brief: background gráfico editorial.

**02 — EMPREENDEDORISMO** — "Ao lado de quem empreende e gera oportunidades." · chip **APROVADO** · Projeto de Resolução 04/2020 · "Ver iniciativa ↗" · ícone Store

**03 — VIDA NO CAMPO** — "Saneamento também é qualidade de vida." · chip **PROJETO** · PLO 168/2023 · "Ver projeto ↗" · ícone Droplets

**04 — EDUCAÇÃO** — "Apoio a quem amplia oportunidades." · chip **VIROU LEI** · PLO 249/2023 · "Ver na ALEPI ↗" · ícone GraduationCap

Faixa de fechamento: "Projetos, requerimentos e outras iniciativas fazem parte desse trabalho na Assembleia." + CTA **CONHEÇA A ATUAÇÃO PARLAMENTAR →** + microcopy "Dados e documentos oficiais: Assembleia Legislativa do Estado do Piauí — ALEPI / SAPL."

## Links de verificação (já testados)

O SAPL da ALEPI está em `https://sapl.al.pi.leg.br` e a busca parametrizada funciona — testado: `?numero=190&ano=2023` retorna "PLO 190/2023".

- Cada referência linka para `sapl.al.pi.leg.br/materia/pesquisar-materia?numero=N&ano=AAAA` (190/2023, 168/2023, 249/2023, 4/2020)
- CTA final linka para a página de pesquisa do SAPL
- Regra de credibilidade respeitada: chips distinguem VIROU LEI / APROVADO / PROJETO; nada é apresentado como "obra entregue"

## Design

- Fundo `#F5F5F1` (token `paper` já existe), headline `#072B63` (`brand-deep`), texto `ink`, secundário `ink/65`
- Cards editoriais: fundo branco, `border: 1px solid brand-deep/12`, `border-radius: 16px`, sem sombras fortes — separação por borda, espaço e tipografia
- Numeração 01–04 em Oswald 800, `clamp(56px, 7vw, 96px)`, `opacity: 0.06` — não compete com títulos
- Chips pequenos nas cores exatas do brief: VIROU LEI `rgba(246,167,8,.14)`/`#9C6500` · APROVADO `rgba(3,96,237,.10)`/`#0360ED` · PROJETO `rgba(7,43,99,.08)`/`#072B63`
- Amarelo só em chips, números e microdetalhes — sem faixas ou listras
- Tipografia: headline Oswald `clamp(64px,7vw,104px)` / line 0.9 / tracking -0.03em; títulos `clamp(26px,2.4vw,38px)`; texto 16px/1.55
- Motion: headline fade + translateY 24px→0; cards com stagger de 80ms (componente `Reveal` existente); hover desktop 280–350ms — título vira azul, seta desloca 4px, borda ganha contraste
- Mobile: composição assimétrica abandonada — eyebrow, headline, sub, 01→04, CTA final; padding 20–24px, gaps 14–16px; destaque 01 maior, demais compactos; sem carrossel, sem depender de hover

## Arquivos

- **Novo** `src/data/alepiWork.ts` — as 4 frentes (tag, título, descrição, status, referência, URL SAPL, ícone)
- **Novo** `src/components/site/AlepiWork.tsx` — seção com grid assimétrico
- `src/routes/index.tsx` — inserir `<AlepiWork />` entre `HumanSide` e `Footer`
- `src/data/navigation.ts` — adicionar link "Trabalho" (`#trabalho`) entre Sobre e Contato

## Verificação

Typecheck + Playwright (desktop 1474px e mobile 390px): hierarquia 1+3, chips de status, links SAPL, stagger de entrada e estados de hover.
