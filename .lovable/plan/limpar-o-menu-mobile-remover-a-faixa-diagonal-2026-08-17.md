# Limpar o menu mobile (remover a faixa diagonal)

## Problema

Ao abrir o menu no mobile, aparece uma faixa diagonal azul + amarela atrás dos links. Esse padrão de faixas já foi removido de todas as outras seções do site, mas sobrou no menu — é o único lugar onde ele ainda aparece.

## O que muda

- Remover o bloco decorativo da faixa diagonal do menu mobile em `src/components/site/Header.tsx` (o `div` com as duas barras azul/amarela).
- Manter tudo o mais igual: fundo azul-noite com grain, links numerados em amarelo, CTA "Fale com a equipe" e a linha "Do lado do povo.".

## Verificação

- Abrir o menu no viewport mobile (390px) e confirmar: nenhuma faixa visível, links legíveis, animação de entrada intacta.
- Conferir o console em busca de erros de runtime ao abrir/fechar o menu (nenhum registrado no momento) e rodar a checagem de tipos.

## Detalhe técnico

Deleção do bloco `aria-hidden` posicionado em `absolute -right-24 top-28 ... -rotate-12` (linhas ~93-96). Nenhum estilo global é afetado; a utility `grain` continua.
