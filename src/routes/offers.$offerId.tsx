import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, MapPin, ShieldCheck, Leaf, Flame, ShoppingBag, Minus, Plus, Star } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { offers, restaurants } from "@/data/mock";

export const Route = createFileRoute("/offers/$offerId")({
  loader: ({ params }) => {
    const offer = offers.find((o) => o.id === params.offerId);
    if (!offer) throw notFound();
    return { offer };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.offer.title} — ${loaderData.offer.restaurantName}` },
      { name: "description", content: loaderData.offer.description },
      { property: "og:image", content: loaderData.offer.image },
    ] : [],
  }),
  component: OfferDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center"><Link to="/offers" className="text-primary">Retour aux offres</Link></div>
  ),
});

function OfferDetail() {
  const { offer } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const restaurant = restaurants.find((r) => r.id === offer.restaurantId);
  const discount = Math.round(((offer.oldPrice - offer.price) / offer.oldPrice) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <img src={offer.image} alt={offer.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full bg-accent text-accent-foreground hover:bg-accent">−{discount}%</Badge>
              <Badge variant="outline" className="rounded-full">{offer.category}</Badge>
              {offer.tags.map((t: string) => <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>)}
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{offer.title}</h1>
            {restaurant && (
              <Link to="/restaurants/$restaurantId" params={{ restaurantId: restaurant.id }} className="mt-3 flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <span className="font-semibold">{restaurant.name}</span>
                <span className="flex items-center gap-1 text-sm"><Star className="h-3.5 w-3.5 fill-accent text-accent" />{restaurant.rating}</span>
                <span className="flex items-center gap-1 text-sm"><MapPin className="h-3.5 w-3.5" />{restaurant.city}</span>
              </Link>
            )}

            <p className="mt-6 leading-relaxed text-muted-foreground">{offer.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-5xl font-black text-primary">{offer.price} MAD</span>
              <span className="text-xl text-muted-foreground line-through">{offer.oldPrice} MAD</span>
            </div>

            <div className="mt-6 rounded-2xl bg-secondary/60 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold"><Clock className="h-4 w-4 text-primary" /> Créneau de retrait</div>
              <p className="mt-1 font-display text-xl font-bold">Aujourd'hui · {offer.pickupStart} – {offer.pickupEnd}</p>
              <p className="mt-1 text-xs text-destructive">Plus que {offer.stock} disponibles</p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-3 rounded-full border border-border p-1">
                <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="h-4 w-4" /></Button>
                <span className="w-6 text-center font-bold">{qty}</span>
                <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setQty(Math.min(offer.stock, qty + 1))}><Plus className="h-4 w-4" /></Button>
              </div>
              <Link to="/cart" className="flex-1">
                <Button size="lg" className="w-full rounded-full shadow-glow">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Ajouter au panier · {offer.price * qty} MAD
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: ShieldCheck, label: "Paiement sécurisé" },
                { icon: MapPin, label: "Retrait sur place" },
                { icon: Flame, label: "Offre limitée" },
                { icon: Leaf, label: "Anti-gaspillage" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 rounded-2xl border border-border p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10"><b.icon className="h-4 w-4 text-primary" /></div>
                  <span className="text-sm font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
