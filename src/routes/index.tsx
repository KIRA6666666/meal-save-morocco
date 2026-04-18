import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Sparkles, Leaf, TrendingDown, Store, ShoppingBag, Clock, ArrowRight, Star, Smartphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OfferCard } from "@/components/OfferCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { offers, cities, categories, testimonials, faqs } from "@/data/mock";
import heroImg from "@/assets/hero-food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SaveurZéro — Donnez une seconde vie aux bons repas" },
      { name: "description", content: "Commandez les invendus de restaurants marocains à prix réduit. Moins de gaspillage, plus d'économies." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Anti-gaspillage · Maroc
            </span>
            <h1 className="mt-5 font-display text-5xl font-black leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
              Donnez une <span className="text-primary">seconde vie</span> aux bons repas.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Commandez les invendus de vos restaurants préférés à prix réduit. Moins de gaspillage, plus d'économies, plus de saveurs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/offers">
                <Button size="lg" className="rounded-full px-7 shadow-glow">
                  Découvrir les offres <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/partner">
                <Button size="lg" variant="outline" className="rounded-full px-7">
                  Rejoindre comme restaurant
                </Button>
              </Link>
            </div>

            {/* Search */}
            <div className="mt-10 rounded-3xl border border-border bg-card p-4 shadow-card">
              <div className="grid gap-2 md:grid-cols-4">
                <Select>
                  <SelectTrigger className="rounded-xl border-0 bg-muted"><SelectValue placeholder="Ville" /></SelectTrigger>
                  <SelectContent>{cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="rounded-xl border-0 bg-muted"><SelectValue placeholder="Catégorie" /></SelectTrigger>
                  <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="rounded-xl border-0 bg-muted"><SelectValue placeholder="Heure de retrait" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lunch">12h – 14h</SelectItem>
                    <SelectItem value="dinner">19h – 22h</SelectItem>
                    <SelectItem value="late">22h – 23h</SelectItem>
                  </SelectContent>
                </Select>
                <Link to="/offers">
                  <Button className="h-full w-full rounded-xl"><Search className="mr-1 h-4 w-4" /> Rechercher</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-glow">
              <img src={heroImg} alt="Repas marocain savoureux" width={1600} height={1200} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10"><Leaf className="h-5 w-5 text-success" /></div>
              <div>
                <p className="font-display text-2xl font-bold">+12 400</p>
                <p className="text-xs text-muted-foreground">repas sauvés ce mois-ci</p>
              </div>
            </div>
            <div className="absolute -top-4 right-6 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20"><TrendingDown className="h-5 w-5 text-accent-foreground" /></div>
              <div>
                <p className="font-display text-2xl font-bold">−65%</p>
                <p className="text-xs text-muted-foreground">prix moyen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">À saisir maintenant</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Offres en vedette</h2>
          </div>
          <Link to="/offers" className="hidden text-sm font-semibold text-primary hover:underline md:block">Voir tout →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.slice(0, 4).map((o) => <OfferCard key={o.id} offer={o} />)}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Comment ça marche ?</h2>
            <p className="mt-3 text-muted-foreground">3 étapes simples pour sauver un repas et économiser.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Store, title: "Le restaurant publie", desc: "Chaque jour, les restaurants partenaires mettent en ligne leurs invendus à prix réduit." },
              { icon: ShoppingBag, title: "Vous commandez", desc: "Choisissez votre repas, payez en ligne ou sur place, recevez votre code." },
              { icon: Clock, title: "Vous récupérez", desc: "Passez au restaurant pendant le créneau indiqué. Profitez et savourez !" },
            ].map((s, i) => (
              <div key={s.title} className="relative rounded-3xl bg-card p-7 shadow-soft">
                <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-hero font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                <s.icon className="h-9 w-9 text-primary" />
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="rounded-[2.5rem] bg-gradient-hero p-10 text-primary-foreground md:p-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Notre impact</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">Ensemble, on change les choses.</h2>
              <p className="mt-4 max-w-md text-primary-foreground/85">Chaque repas sauvé, c'est de l'eau, du CO₂ et du gaspillage en moins. Et plus de pouvoir d'achat pour vous.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: "+128 000", l: "repas sauvés" },
                { v: "3,2 M MAD", l: "économisés" },
                { v: "420+", l: "restaurants partenaires" },
                { v: "−72%", l: "gaspillage évité" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur">
                  <p className="font-display text-3xl font-black">{s.v}</p>
                  <p className="mt-1 text-sm opacity-80">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Pour les clients</div>
            <h3 className="mt-4 font-display text-2xl font-bold">Mangez mieux, payez moins</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>✓ Jusqu'à −70% sur des repas de qualité</li>
              <li>✓ Une sélection variée près de chez vous</li>
              <li>✓ Un geste concret pour la planète</li>
              <li>✓ Paiement sécurisé, retrait facile</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">Pour les restaurants</div>
            <h3 className="mt-4 font-display text-2xl font-bold">Récupérez vos pertes</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>✓ Transformez vos invendus en revenus</li>
              <li>✓ Attirez de nouveaux clients</li>
              <li>✓ Image éco-responsable valorisée</li>
              <li>✓ Tableau de bord clair et gratuit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Ils nous font confiance</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-card p-7 shadow-soft">
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-hero font-display font-bold text-primary-foreground">{t.avatar}</div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App download */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-card p-10 shadow-card md:grid-cols-2 md:p-14">
          <div>
            <Smartphone className="h-10 w-10 text-primary" />
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Téléchargez bientôt notre application</h2>
            <p className="mt-3 text-muted-foreground">Recevez des alertes en temps réel sur les nouvelles offres autour de vous. iOS et Android — printemps 2026.</p>
            <form className="mt-6 flex max-w-md gap-2">
              <Input placeholder="votre@email.com" className="rounded-full" />
              <Button className="rounded-full">Me prévenir</Button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square rounded-3xl bg-gradient-warm p-6"><Leaf className="h-8 w-8 text-primary" /><p className="mt-3 font-display text-xl font-bold">Éco</p><p className="text-xs text-muted-foreground">Impact mesuré</p></div>
            <div className="aspect-square rounded-3xl bg-primary/10 p-6 mt-8"><TrendingDown className="h-8 w-8 text-primary" /><p className="mt-3 font-display text-xl font-bold">−70%</p><p className="text-xs text-muted-foreground">Économies</p></div>
            <div className="aspect-square rounded-3xl bg-accent/20 p-6 -mt-4"><Clock className="h-8 w-8 text-accent-foreground" /><p className="mt-3 font-display text-xl font-bold">Live</p><p className="text-xs text-muted-foreground">Dispo en direct</p></div>
            <div className="aspect-square rounded-3xl bg-secondary p-6 mt-4"><Sparkles className="h-8 w-8 text-primary" /><p className="mt-3 font-display text-xl font-bold">+420</p><p className="text-xs text-muted-foreground">Restaurants</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 md:px-6">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Footer />
    </div>
  );
}
