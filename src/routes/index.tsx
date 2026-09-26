import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import savoirFaireImg from "@/assets/savoir-faire.jpg";
import collectionDisplay from "@/assets/uploads/collection-display.png.asset.json";
import creationsDisplay from "@/assets/uploads/creations-display.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raffia&Co — Fabricant & Grossiste de sacs en raphia de Madagascar" },
      {
        name: "description",
        content:
          "Fabricant & grossiste de sacs, chapeaux, tapis et boîtes en raphia de Madagascar. Nous accompagnons marques, importateurs et distributeurs du monde entier. Artisanat fait main à Antananarivo.",
      },
      { property: "og:title", content: "Raffia&Co — Fabricant & Grossiste de sacs en raphia de Madagascar" },
      {
        property: "og:description",
        content:
          "Fabricant & grossiste de sacs en raphia de Madagascar. Fabrication artisanale, capacité de production importante, raphia naturel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const creations = [
  {
    img: sacFleurs.url,
    alt: "Sac en raphia orné de fleurs colorées crochetées",
    label: "Sac fleurs",
  },
  {
    img: sacSpirale.url,
    alt: "Sac tote en raphia à motifs spirales beige et brun",
    label: "Sac spirale",
  },
  {
    img: sacBeige.url,
    alt: "Sac en raphia beige naturelle",
    label: "Sac naturel",
  },
  {
    img: sacNavy.url,
    alt: "Sac en raphia bleu marine avec poignées en cuir",
    label: "Sac marine & cuir",
  },
  {
    img: sacAnthracite.url,
    alt: "Sac tressé en raphia anthracite avec bouton en bois",
    label: "Sac tisseur anthracite",
  },
  {
    img: sacOr.url,
    alt: "Sac tressé en raphia aux motifs dorés",
    label: "Sac tisseur or",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-sand text-ink font-body">
      {/* Top bar */}
      <div className="w-full py-2 bg-ink text-center text-[9px] uppercase tracking-[0.2em] text-sand/80">
        Fabricant Direct • Antananarivo, Madagascar
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-sand/90 backdrop-blur-md border-b border-ink/5">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="font-display text-xl font-medium tracking-tight">
              Raffia&Co
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-ocean -mt-1">
              Raphia & Cuir
            </span>
          </div>
          <a
            href="#contact"
            className="text-[10px] font-bold uppercase tracking-widest bg-ink text-sand px-4 py-2 rounded-full transition-colors hover:bg-ink/90"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl">
        {/* Hero */}
        <section className="px-6 pt-10 pb-14">
          {/* Captivating intro */}
          <div className="mb-10 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ember">
              Fabricant & Grossiste
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-light leading-[1.15] mt-3">
              Le raphia de Madagascar,{" "}
              <span className="italic">façonné avec savoir-faire.</span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-ink/75">
              Au cœur d'un atelier familial à Antananarivo, nous donnons vie
              au raphia de Madagascar avec passion et exigence.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Une fibre naturelle d'exception, sublimée par le savoir-faire
              de nos artisans et par une production capable de répondre aux
              projets de différentes tailles.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Derrière chaque pièce, il y a des mains, un savoir-faire et une
              histoire. Chaque création porte aussi une part de l'âme de
              ceux qui l'ont façonnée.
            </p>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Sac en raphia fait main de Madagascar"
              className="w-full aspect-[4/5] md:aspect-[16/10] object-cover rounded-sm"
            />
            <div className="absolute -bottom-8 left-0 right-8 md:right-16 bg-card/95 p-6 shadow-xl border border-ink/5">
              <h2 className="font-display text-2xl md:text-3xl font-light leading-tight italic">
                Le savoir-faire malgache,{" "}
                <span className="not-italic font-semibold">
                  au cœur de chaque création.
                </span>
              </h2>
              <p className="mt-3 text-[12px] leading-relaxed text-ink/70">
                Depuis notre atelier familial à Antananarivo, nous donnons vie
                au raphia à travers une grande variété de créations, pensées
                pour différents styles, usages et projets.
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-ink/70">
                Chaque pièce est façonnée avec soin par nos artisans, qui
                mettent leur savoir-faire, leur patience et leur sens du
                détail au service d'une matière naturelle emblématique de
                Madagascar.
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-ink/70">
                Une fabrication authentique, portée par des mains expertes et
                une passion pour le raphia.
              </p>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="px-6 pt-16 pb-12">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ember">
              Nos collections
            </span>
            <h2 className="font-display text-2xl mt-2">La collection</h2>
          </div>
          <img
            src={collectionDisplay.url}
            alt="Collection de sacs, chapeaux, tapis et boîtes en raphia coloré de Madagascar"
            className="w-full aspect-[4/3] object-cover rounded-sm border border-ink/5"
          />
        </section>

        {/* Nos créations — vraies photos produits */}
        <section className="px-6 py-12 bg-card/30">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ember">
              Réalisations de l'atelier
            </span>
            <h2 className="font-display text-2xl mt-2">Nos créations</h2>
            <p className="mt-3 text-sm text-ink/70 max-w-2xl leading-relaxed">
              Quelques pièces sorties de notre atelier d'Antananarivo. Chaque sac
              est crocheté et tressé à la main, avec finitions en cuir.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {creations.map((item) => (
              <figure key={item.label} className="overflow-hidden rounded-sm border border-ink/5 bg-sand">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full aspect-[3/4] object-cover"
                />
                <figcaption className="px-3 py-2 text-[10px] uppercase tracking-widest text-ink/60">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Savoir-faire */}
        <section className="px-6 py-16 bg-card/40">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ember">
              Savoir-faire
            </span>
            <h2 className="font-display text-2xl mt-2">
              L'essence du raphia malgache
            </h2>
            <p className="mt-4 text-sm text-ink/80 leading-relaxed max-w-2xl">
              À Madagascar, le raphia occupe une place particulière dans le
              savoir-faire local. Cultivé dans un environnement naturel
              favorable, il offre une fibre souple, longue et résistante,
              idéale pour une grande variété de créations.
            </p>
            <p className="mt-3 text-sm text-ink/80 leading-relaxed max-w-2xl">
              Transmis au fil des générations, le travail du raphia repose sur
              des gestes précis et un savoir-faire profondément ancré dans la
              culture malgache.
            </p>
            <p className="mt-3 text-sm font-medium text-ink/80 leading-relaxed max-w-2xl">
              Une matière naturelle, un savoir-faire vivant, une signature
              malgache.
            </p>
          </div>
          <img
            src={savoirFaireImg}
            alt="Artisan malgache tressant le raphia"
            className="w-full aspect-[16/10] object-cover rounded-sm"
          />

          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-lagoon/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-ink">01</span>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1">
                  L'atelier, sans intermédiaire
                </h4>
                <p className="text-[13px] text-ink/70 leading-snug">
                  Tout naît sous notre toit, à Antananarivo. Du fil de raphia
                  brut jusqu'à la pièce finie, nos artisans maîtrisent chaque
                  geste — vous achetez au fabricant, pas à un revendeur.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-raphia/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-ink">02</span>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1">
                  Façonné pour votre marque
                </h4>
                <p className="text-[13px] text-ink/70 leading-snug">
                  Dimensions, palette de couleurs, logo tissé dans la matière,
                  packaging signé : nous suivons votre cahier des charges pour
                  des pièces qui portent votre identité.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-ember/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-ink">03</span>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1">
                  De l'unité au volume
                </h4>
                <p className="text-[13px] text-ink/70 leading-snug">
                  Quelques centaines comme plusieurs dizaines de milliers de
                  pièces par mois. Chaque sac passe entre les mains d'un
                  contrôleur qualité avant de quitter l'atelier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="px-6 py-12 border-y border-ink/10">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-4">
            Logistique & Délais
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-ink/10 rounded-sm">
              <p className="text-[9px] uppercase tracking-widest text-ink/50">
                Production
              </p>
              <p className="text-lg font-display mt-1">30-90 Jours</p>
            </div>
            <div className="p-4 border border-ink/10 rounded-sm">
              <p className="text-[9px] uppercase tracking-widest text-ink/50">
                Réponse Devis
              </p>
              <p className="text-lg font-display mt-1">24-48 Heures</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-6 my-16 p-8 bg-ink text-sand rounded-sm relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="font-display text-3xl leading-tight mb-4">
              Prêt à lancer <br />
              <span className="italic">votre collection ?</span>
            </h2>
            <p className="text-sm text-sand/70 mb-2">
              Contactez-nous par email pour obtenir un devis personnalisé. Nous
              répondons à toutes les marques.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-sand/50 mb-8">
              Iavoloha • Madagascar
            </p>
            <a
              href="mailto:ramonafamily3@gmail.com"
              className="block w-full py-4 bg-sand text-ink text-center text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-card mb-3 break-all"
            >
              ramonafamily3@gmail.com
            </a>
            <a
              href="mailto:ramonafamily3@gmail.com?subject=Demande%20de%20catalogue%20-%20Raffia%26Co"
              className="block w-full py-4 border border-sand/30 text-sand text-center text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:border-sand"
            >
              Demander le catalogue
            </a>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
            <div className="w-full h-full border-t border-l border-sand rounded-tl-full"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-12 text-center">
        <div className="h-[1px] w-12 bg-ember mx-auto mb-8"></div>
        <p className="font-display text-xl mb-1">Raffia&Co</p>
        <p className="text-[10px] text-ink/50 uppercase tracking-widest mb-2">
          Raphia & Cuir — Madagascar
        </p>
        <p className="text-[9px] text-ink/40 uppercase tracking-[0.2em] mb-6">
          Iavoloha • Antananarivo
        </p>
        <div className="flex justify-center gap-2 mb-6">
          <div className="size-2 bg-mad-red rounded-full"></div>
          <div className="size-2 bg-card border border-ink/10 rounded-full"></div>
          <div className="size-2 bg-mad-green rounded-full"></div>
        </div>
        <p className="text-[8px] text-ink/30 uppercase mt-8 tracking-widest">
          © 2026 • Atelier d'Antananarivo
        </p>
      </footer>
    </div>
  );
}
