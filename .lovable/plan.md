# Site institucional — Georgiano Neto (Homepage V1)

## Visão geral

Site institucional de página única, em pt-BR, mobile-first, com navegação por âncoras e 9 blocos: Header, Hero, Presença, Caminhada, Confiança, Trabalho, Além do Mandato, A Caminhada Continua e Footer. Sem backend, sem páginas secundárias, sem números inventados — os únicos dados quantitativos são as votações reais do site atual (2014: 37.204 / 2018: 79.723 / 2022: 109.025, fonte ALEPI).

## Sistema visual

- **Paleta** (tokens em `src/styles.css`, formato oklch): azul elétrico #0360ED, azul médio #0C51AB, azul profundo #072B63, azul noite #061833, amarelo #F6A708, amarelo vivo #FFBE1A, branco, off-white #F5F5F1, texto #111318. Distribuição ~70/20/10; amarelo só como pulso.
- **Tipografia**: Oswald (display, uppercase, pesos 600–700) + Inter (corpo/UI), carregadas via `<link>` no `__root.tsx`. Headline do Hero com `clamp()` (56–72px no mobile).
- **Motivo proprietário**: faixa azul + faixa amarela — diagonais atrás de fotos, divisores, underlines amarelos, cantos cortados. Componente reutilizável.
- **Texturas**: grain fino (SVG noise em data-URI, opacidade baixa), variações tonais sutis, sombras largas e raras. Nada de fundos planos.
- **Pulso**: microanimação CSS (ponto/linha amarela, opacity/scale lentos) em poucos pontos — label do Hero, indicadores. Quase imperceptível.
- **Radius**: cards 14–20px, botões 8–12px, imagens 12–18px. Botões Primary (amarelo, texto azul escuro, hover com translateY leve) e Secondary (outline).

## Imagens — placeholders de marca

Nenhuma foto gerada por IA. Componente `PhotoPlaceholder`: bloco azul profundo com faixa amarela diagonal, grain, etiqueta curta (ex.: "Foto oficial — Hero") e proporção responsiva por slot. Todas as posições de imagem ficam centralizadas em `src/data/photos.ts` (uma entrada por foto: id, etiqueta, alt, proporção) — quando os arquivos oficiais chegarem, cada entrada vira um import real sem tocar nos componentes.

## Estrutura da página

1. **Header** — sticky, minimalista. Logo GEORGIANO NETO; links Início / Sobre / Trabalho / Agora / Contato (âncoras); CTA "Fale com a equipe". Mobile: drawer fullscreen limpo. Encolhe após o primeiro scroll; blur discreto só quando necessário.
2. **Hero** (~100svh, fundo azul noite) — 2 colunas no desktop. Label com pulso; headline DO LADO (branco) / DO POVO. (amarelo); sub "Presente onde a vida acontece."; texto curto; CTAs "Conheça nosso trabalho" (primary) e "Acompanhe a caminhada" (secondary). Direita: placeholder recortado grande sobre faixas azul/amarelo. Mobile: headline primeiro, foto abaixo parcialmente sobreposta.
3. **Presença** — 50/50 foto/conteúdo. POLÍTICA DE VERDADE / SE FAZ PRESENTE. (destaque amarelo). Três princípios com ícones Lucide: Estar perto, Ouvir, Trabalhar.
4. **Nossa Caminhada** — editorial assimétrico: 1 foto grande + 2 menores, bastante respiro. NOSSA CAMINHADA / POR TODO O PIAUÍ. + subtexto + CTA "Ver registros". Sem mapa, sem busca de município.
5. **Confiança** (novo, conforme sua escolha) — bloco editorial "UMA HISTÓRIA DE CONFIANÇA." com as três votações em barras ascendentes azuis com detalhe amarelo (como no print), selo "Deputado estadual mais votado da história do Piauí" e fonte ALEPI. Entre Caminhada e Trabalho.
6. **Trabalho** — label "TRABALHO QUE FAZ A DIFERENÇA"; headline PRESENTE NAS ÁREAS QUE MOVEM O PIAUÍ. 4 cards (Saúde, Educação, Infraestrutura, Desenvolvimento) com imagem, descrição curta do brief e seta. Grid 4 colunas no desktop; mobile com scroll horizontal natural, sem autoplay.
7. **Além do Mandato** — fundo off-white, menos cor e movimento. UMA HISTÓRIA DE VIDA. + foto humana + 5 fatos numerados (Filho de Teresina / Formado em Direito / Eleito aos 20 anos / Cozinha — especialidade: lasanha / Pai da Ana Jussara) + "Amor incondicional a Deus e ao Piauí."
8. **A Caminhada Continua** — fundo azul profundo; 3 cards de atualizações (foto, label Hoje/Registro/Destaque, título, 1 linha); CTA "Acompanhe no Instagram".
9. **Footer** — azul profundo/elétrico; VAMOS EM / FRENTE. (amarelo); placeholder recortado à direita; contatos com ícones (Instagram, WhatsApp, e-mail, atuação parlamentar); linha inferior "Georgiano Neto — Deputado Estadual do Piauí".

## Motion

Componente `Reveal` próprio (IntersectionObserver + CSS transitions): opacity + translateY de 20–40px, 300–700ms, `cubic-bezier(0.22, 1, 0.36, 1)`. Máscaras de imagem com overflow hidden; faixas entrando lateralmente; parallax leve no Hero; hover sutil (escala de imagem, underline). Sem scroll hijacking, sem biblioteca de animação, respeitando `prefers-reduced-motion`.

## SEO, acessibilidade e performance

- `head()` próprio na rota `/`: title "Georgiano Neto — Deputado Estadual do Piauí", description, og:title/og:description/og:type e twitter:card em pt-BR. Meta base do `__root.tsx` atualizada (sem "Lovable App") e `lang="pt-BR"`.
- HTML semântico, h1 único, headings em ordem, alt text, focus visible, contraste AA, alvos de toque ≥48px, unidades svh/clamp/rem.
- Placeholders são leves por natureza (SVG/CSS); animações só em transform/opacity.

## Arquivos

- `src/styles.css` — tokens @theme + utilities (grain, pulse, reveal, band)
- `src/routes/__root.tsx` — fontes via link, meta base, lang pt-BR
- `src/routes/index.tsx` — head() + composição das seções
- `src/components/site/` — Header, Hero, Presence, Journey, Trust, WorkAreas, HumanSide, Updates, Footer, Reveal, PhotoPlaceholder, Band
- `src/data/` — navigation.ts, photos.ts, workAreas.ts, updates.ts, facts.ts

## Detalhes técnicos

- TanStack Start + Tailwind v4 (tokens em `@theme`; sem `tailwind.config.js`), lucide-react (Instagram, Mail, MapPin etc.; WhatsApp via SVG inline oficial, pois a Lucide não tem ícone de marca).
- Links de contato/Instagram ficam como placeholders óbvios para troca quando os endereços oficiais forem confirmados.
- Sem Lovable Cloud nesta versão (não há persistência, auth ou formulários no escopo V1).
