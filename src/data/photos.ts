/**
 * Slots de fotografia do site.
 *
 * Cada entrada descreve uma posição de imagem. Hero, Presença e Nossa
 * Caminhada já usam as fotos oficiais (assets CDN); as demais renderizam
 * como PhotoPlaceholder (bloco de marca). Quando os arquivos oficiais
 * chegarem, basta trocar a entrada por um import real da imagem no
 * componente correspondente — labels e alt texts já estão prontos aqui.
 */
export type PhotoSlot = {
  id: string;
  label: string;
  alt: string;
};

export const PHOTOS = {
  hero: {
    id: "hero",
    label: "Foto oficial — Hero (recorte)",
    alt: "Georgiano Neto sorrindo, falando ao microfone",
  },
  presence: {
    id: "presence",
    label: "Foto oficial — Abraço",
    alt: "Georgiano Neto abraçando uma moradora durante visita",
  },
  journeyMain: {
    id: "journey-main",
    label: "Foto oficial — Multidão",
    alt: "Georgiano Neto com dezenas de apoiadores em encontro comunitário",
  },
  journeyA: {
    id: "journey-a",
    label: "Foto oficial — Comunidade",
    alt: "Georgiano Neto cumprimentando moradores em reunião comunitária",
  },
  journeyB: {
    id: "journey-b",
    label: "Foto oficial — Zona rural",
    alt: "Georgiano Neto com lideranças no pórtico de Prata do Piauí",
  },
  journeyC: {
    id: "journey-c",
    label: "Foto oficial — Abraço em comunidade",
    alt: "Georgiano Neto abraçando uma senhora durante visita à comunidade",
  },
  human: {
    id: "human",
    label: "Foto oficial — Cozinha",
    alt: "Georgiano Neto cozinhando em momento descontraído",
  },
  footer: {
    id: "footer",
    label: "Foto oficial — Recorte",
    alt: "Georgiano Neto acenando para a população",
  },
} as const satisfies Record<string, PhotoSlot>;
