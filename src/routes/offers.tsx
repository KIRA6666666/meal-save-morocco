import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OfferCard } from "@/components/OfferCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { offers, cities, categories } from "@/data/mock";

export const Route = createFileRoute("/offers")({
  head: () => ({ meta: [{ title: "Offres anti-gaspi — SaveurZéro" }, { name: "description", content: "Parcourez les meilleures offres de repas invendus à prix réduit." }] }),
  component: OffersPage,
});

function OffersPage() {
  const [city, setCity] = useState<string>("all");
  const [cat, setCat] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(50);
  const [diet, setDiet] = useState<Record<string, boolean>>({});
  const [sort, setSort] = useState("discount");

  let list = offers.filter((o) => {
    if (city !== "all" && o.city !== city) return false;
    if (cat !== "all" && o.category !== cat) return false;
    if (o.price > maxPrice) return false;
    return true;
  });
  if (sort === "cheapest") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "discount") list = [...list].sort((a, b) => (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Offres anti-gaspi</h1>
          <p className="mt-2 text-muted-foreground">{list.length} offres disponibles près de chez vous.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters */}
          <aside className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-soft h-fit lg:sticky lg:top-24">
            <div className="flex items-center gap-2"><SlidersHorizontal className="h-4 w-4" /><h3 className="font-display font-bold">Filtres</h3></div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-muted-foreground">Ville</label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les villes</SelectItem>
                  {cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-muted-foreground">Catégorie</label>
              <Select value={cat} onValueChange={setCat}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase text-muted-foreground">Prix max : {maxPrice} MAD</label>
              <Slider value={[maxPrice]} onValueChange={(v) => setMaxPrice(v[0])} max={100} step={5} />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-muted-foreground">Régime</label>
              {["Halal", "Végétarien", "Vegan", "Sans gluten"].map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm">
                  <Checkbox checked={!!diet[d]} onCheckedChange={(v) => setDiet({ ...diet, [d]: !!v })} />
                  {d}
                </label>
              ))}
            </div>

            <Button variant="outline" className="w-full rounded-full" onClick={() => { setCity("all"); setCat("all"); setMaxPrice(50); setDiet({}); }}>
              Réinitialiser
            </Button>
          </aside>

          {/* Results */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{list.length} résultats</p>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-48 rounded-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="discount">Plus grosse remise</SelectItem>
                  <SelectItem value="cheapest">Moins cher</SelectItem>
                  <SelectItem value="nearest">Plus proche</SelectItem>
                  <SelectItem value="popular">Plus populaire</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {list.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border p-16 text-center">
                <p className="font-display text-xl font-bold">Aucune offre trouvée</p>
                <p className="mt-2 text-sm text-muted-foreground">Essayez d'élargir vos filtres.</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {list.map((o) => <OfferCard key={o.id} offer={o} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile bottom CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-primary p-1 shadow-glow lg:hidden">
        <Link to="/cart" className="flex items-center justify-between px-5 py-2 text-primary-foreground">
          <span className="text-sm font-semibold">Voir mon panier</span>
          <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold">2 articles</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
