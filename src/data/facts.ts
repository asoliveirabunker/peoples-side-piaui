import { ChefHat, GraduationCap, Heart, MapPin, Vote, type LucideIcon } from "lucide-react";

export type Fact = {
  id: string;
  icon: LucideIcon;
  text: string;
};

export const FACTS: Fact[] = [
  { id: "01", icon: MapPin, text: "Filho de Teresina." },
  { id: "02", icon: GraduationCap, text: "Formado em Direito." },
  { id: "03", icon: Vote, text: "Eleito deputado estadual aos 20 anos." },
  { id: "04", icon: ChefHat, text: "Gosta de cozinhar. Especialidade: lasanha." },
  { id: "05", icon: Heart, text: "Pai da Ana Jussara." },
];
