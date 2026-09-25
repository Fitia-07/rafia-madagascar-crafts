import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import sacsImg from "@/assets/sacs.jpg";
import chapeauxImg from "@/assets/chapeaux.jpg";
import tapisImg from "@/assets/tapis.jpg";
import boitesImg from "@/assets/boites.jpg";
import savoirFaireImg from "@/assets/savoir-faire.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raffia&Co — Raphia & Cuir de Madagascar" },
      {
        name: "description",
        content:
          "Grossiste de sacs, chapeaux, tapis et boîtes en raphia de Madagascar. Artisanat fait main, fabrication directe à Antananarivo.",
      },
      { property: "og:title", content: "Raffia&Co — Raphia & Cuir de Madagascar" },
      {
        property: "og:description",
        content:
          "Grossiste de sacs, chapeaux, tapis et boîtes en raphia de Madagascar. Artisanat fait main.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const collections = [
  {
    img: sacsImg,
    title: "Sacs",
    desc: "Crochet & cuir",
    alt: "Sac en raphia avec cuir fait main",
  },
  {
    img: chapeauxImg,
    title: "Chapeaux",
    desc: "Tressés à la main",
    alt: "Chapeau en raphia fait main",
  },
  {
    img: tapisImg,
    title: "Tapis",
    desc: "Raphia tissé",
    alt: "Tapis en raphia fait main",
  },
  {
    img: boitesImg,
    title: "Boîtes & pochettes",
    desc: "Détail cuir",
    alt: "Boîtes et pochettes en raphia",
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
        <section className="px-6 pt-6 pb-14">
          <div className="relative">
            <img
              src={heroImg}
              alt="Sac en raphia fait main de Madagascar"
              className="w-full aspect-[4/5] md:aspect-[16/10] object-cover rounded-sm"
            />
            <div className="absolute -bottom-8 left-0 right-8 md:right-16 bg-card/95 p-6 shadow-xl border border-ink/5">
              <h1 className="font-display text-2xl md:text-3xl font-light leading-tight italic">
                Le raphia de Madagascar,{" "}
                <span className="not-italic font-semibold">
                  tressé à la main.
                </span>
              </h1>
              <p className="mt-3 text-[12px] leading-relaxed text-ink/70">
                Sacs, chapeaux, tapis et boîtes façonnés par nos artisans. Vente
                en gros, sans intermédiaire.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {collections.map((item) => (
              <div
                key={item.title}
                className="bg-card/40 border border-ink/5 rounded-sm p-3"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full aspect-square rounded-sm object-cover mb-3"
                />
                <p className="font-display text-base font-semibold">
                  {item.title}
                </p>
                <p className="text-xs text-ink/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Savoir-faire */}
        <section className="px-6 py-16 bg-card/40">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ember">
              Savoir-faire
            </span>
            <h2 className="font-display text-2xl mt-2">L'exception malgache</h2>
            <p className="mt-4 text-sm text-ink/80 leading-relaxed max-w-2xl">
              Madagascar possède l'une des meilleures qualités au monde grâce à
              son climat tropical et au palmier{" "}
              <span className="italic font-medium text-ocean">
                Raphia Farinifera
              </span>
              . Un savoir-faire transmis de génération en génération pour des
              fibres longues, souples et résistantes.
            </p>
          </div>
          <img
            src={savoirFaireImg}
            alt="Artisan malgache tressant le raphia"
            className="w-full aspect-[16/10] object-cover rounded-sm"
          />

          <div className="mt-8 space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-lagoon/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-ink">01</span>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1">
                  Fabricant Direct
                </h4>
                <p className="text-[13px] text-ink/70 leading-snug">
                  Basé à Antananarivo. Toute la production est réalisée dans
                  notre atelier, par nos artisans, sans intermédiaire.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-raphia/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-ink">02</span>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1">
                  Sur Mesure
                </h4>
                <p className="text-[13px] text-ink/70 leading-snug">
                  Fabrication selon votre cahier des charges : dimensions,
                  couleurs, logo tissé et packaging personnalisé.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-ember/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-ink">03</span>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1">
                  Capacité & Échelle
                </h4>
                <p className="text-[13px] text-ink/70 leading-snug">
                  De quelques centaines à plusieurs dizaines de milliers de
                  pièces par mois. Contrôle qualité individuel.
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
            <p className="text-sm text-sand/70 mb-8">
              Contactez-nous par email pour obtenir un devis personnalisé. Nous
              répondons à toutes les marques.
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
        <p className="text-[10px] text-ink/50 uppercase tracking-widest mb-6">
          Raphia & Cuir — Madagascar
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
