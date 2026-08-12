import {
  Droplets,
  GraduationCap,
  ShieldCheck,
  Store,
  type LucideIcon,
} from "lucide-react";

export type AlepiStatus = "VIROU LEI" | "APROVADO" | "PROJETO";

export type AlepiWorkItem = {
  /** Numeração editorial (01–04) */
  id: string;
  /** Tema de atuação (ex.: Proteção à pessoa idosa) */
  tag: string;
  title: string;
  description: string;
  status: AlepiStatus;
  /** Referência oficial (ex.: PLO 190/2023) */
  reference: string;
  ctaLabel: string;
  /** Link de verificação no SAPL/ALEPI */
  href: string;
  icon: LucideIcon;
};

/** Busca de matérias do SAPL — Assembleia Legislativa do Estado do Piauí */
export const ALEPI_SAPL_SEARCH_URL = "https://sapl.al.pi.leg.br/materia/pesquisar-materia";

const saplSearch = (numero: number, ano: number) =>
  `${ALEPI_SAPL_SEARCH_URL}?numero=${numero}&ano=${ano}`;

export const ALEPI_WORK: AlepiWorkItem[] = [
  {
    id: "01",
    tag: "Proteção à pessoa idosa",
    title: "Mais segurança nas relações de crédito.",
    description:
      "Projeto que amplia a proteção de pessoas idosas em contratos de crédito realizados por telefone ou meios eletrônicos.",
    status: "VIROU LEI",
    reference: "PLO 190/2023",
    ctaLabel: "Ver na ALEPI",
    href: saplSearch(190, 2023),
    icon: ShieldCheck,
  },
  {
    id: "02",
    tag: "Empreendedorismo",
    title: "Ao lado de quem empreende e gera oportunidades.",
    description:
      "Criação da Frente Parlamentar em Defesa das Micro e Pequenas Empresas do Estado do Piauí.",
    status: "APROVADO",
    reference: "Projeto de Resolução 04/2020",
    ctaLabel: "Ver iniciativa",
    href: saplSearch(4, 2020),
    icon: Store,
  },
  {
    id: "03",
    tag: "Vida no campo",
    title: "Saneamento também é qualidade de vida.",
    description:
      "Proposta de incentivo a soluções de saneamento básico rural, incluindo fossas sépticas biodigestoras e jardins filtrantes.",
    status: "PROJETO",
    reference: "PLO 168/2023",
    ctaLabel: "Ver projeto",
    href: saplSearch(168, 2023),
    icon: Droplets,
  },
  {
    id: "04",
    tag: "Educação",
    title: "Apoio a quem amplia oportunidades.",
    description:
      "Atualização da legislação estadual para contemplar entidades sem fins lucrativos responsáveis por escolas alternativas.",
    status: "VIROU LEI",
    reference: "PLO 249/2023",
    ctaLabel: "Ver na ALEPI",
    href: saplSearch(249, 2023),
    icon: GraduationCap,
  },
];
