export type Update = {
  id: string;
  label: string;
  title: string;
  description: string;
  photo: { label: string; alt: string };
};

export const UPDATES: Update[] = [
  {
    id: "hoje",
    label: "Hoje",
    title: "Teresina",
    description: "Reunião com lideranças sobre as demandas da população.",
    photo: { label: "Registro — Teresina", alt: "Georgiano Neto em reunião com lideranças em Teresina" },
  },
  {
    id: "registro",
    label: "Registro",
    title: "Dirceu Arcoverde",
    description: "Presente nos festejos de Senhor do Bonfim com a nossa gente.",
    photo: {
      label: "Registro — Dirceu Arcoverde",
      alt: "Georgiano Neto nos festejos de Senhor do Bonfim em Dirceu Arcoverde",
    },
  },
  {
    id: "destaque",
    label: "Destaque",
    title: "Brasília",
    description: "Audiência em busca de melhorias para o Piauí.",
    photo: { label: "Registro — Brasília", alt: "Georgiano Neto em audiência em Brasília" },
  },
];
