import { GraduationCap, HeartPulse, Route, Sprout, type LucideIcon } from "lucide-react";

export type WorkArea = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  photo: { label: string; alt: string };
};

export const WORK_AREAS: WorkArea[] = [
  {
    id: "saude",
    icon: HeartPulse,
    title: "Saúde",
    description: "Presença, diálogo e trabalho voltados ao cuidado das pessoas.",
    photo: { label: "Foto — Saúde", alt: "Trabalho de Georgiano Neto na área da saúde" },
  },
  {
    id: "educacao",
    icon: GraduationCap,
    title: "Educação",
    description: "Apoio a oportunidades e desenvolvimento.",
    photo: { label: "Foto — Educação", alt: "Trabalho de Georgiano Neto na área da educação" },
  },
  {
    id: "infraestrutura",
    icon: Route,
    title: "Infraestrutura",
    description: "Trabalho voltado à conexão e melhoria das cidades.",
    photo: {
      label: "Foto — Infraestrutura",
      alt: "Trabalho de Georgiano Neto na área de infraestrutura",
    },
  },
  {
    id: "desenvolvimento",
    icon: Sprout,
    title: "Desenvolvimento",
    description: "Presença junto a quem produz, empreende e gera oportunidades.",
    photo: {
      label: "Foto — Desenvolvimento",
      alt: "Trabalho de Georgiano Neto na área de desenvolvimento",
    },
  },
];
