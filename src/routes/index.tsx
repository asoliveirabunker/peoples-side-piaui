import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Presence } from "@/components/site/Presence";
import { Journey } from "@/components/site/Journey";
import { Trust } from "@/components/site/Trust";
import { WorkAreas } from "@/components/site/WorkAreas";
import { HumanSide } from "@/components/site/HumanSide";
import { Updates } from "@/components/site/Updates";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgiano Neto — Deputado Estadual do Piauí" },
      {
        name: "description",
        content:
          "Do lado do povo. Presente onde a vida acontece. Conheça a trajetória, o trabalho e a caminhada de Georgiano Neto, deputado estadual do Piauí.",
      },
      { property: "og:title", content: "Georgiano Neto — Deputado Estadual do Piauí" },
      {
        property: "og:description",
        content: "Do lado do povo. Presente onde a vida acontece.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-clip bg-night">
      <Header />
      <main>
        <Hero />
        <Presence />
        <Journey />
        <Trust />
        <WorkAreas />
        <HumanSide />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}
