import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { offers } from "@/data/mock";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Mon panier — SaveurZéro" }] }),
  component: CartPage,
});

function CartPage() {
  const [items, setItems] = useState([
    { offer: offers[0], qty: 1 },
    { offer: offers[1], qty: 2 },
  ]);

  const subtotal = items.reduce((s, i) => s + i.offer.price * i.qty, 0);
  const fee = 5;
  const total = subtotal + fee;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h1 className="font-display text-4xl font-bold">Mon panier</h1>
        <p className="mt-2 text-muted-foreground">{items.length} articles · Retrait au restaurant</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={item.offer.id} className="flex gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft">
                <img src={item.offer.image} alt={item.offer.title} className="h-24 w-24 rounded-2xl object-cover" />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold">{item.offer.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.offer.restaurantName} · {item.offer.city}</p>
                    </div>
                    <button onClick={() => setItems(items.filter((_, i) => i !== idx))} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-border p-1">
                      <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full" onClick={() => setItems(items.map((it, i) => i === idx ? { ...it, qty: Math.max(1, it.qty - 1) } : it))}><Minus className="h-3 w-3" /></Button>
                      <span className="w-5 text-center text-sm font-bold">{item.qty}</span>
                      <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full" onClick={() => setItems(items.map((it, i) => i === idx ? { ...it, qty: it.qty + 1 } : it))}><Plus className="h-3 w-3" /></Button>
                    </div>
                    <p className="font-display text-lg font-bold text-primary">{item.offer.price * item.qty} MAD</p>
                  </div>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="rounded-3xl border border-dashed p-16 text-center">
                <p className="font-display text-xl font-bold">Votre panier est vide</p>
                <Link to="/offers"><Button className="mt-4 rounded-full">Découvrir les offres</Button></Link>
              </div>
            )}
          </div>

          <aside className="h-fit space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
            <h3 className="font-display text-xl font-bold">Récapitulatif</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span className="font-semibold">{subtotal} MAD</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Frais de service</span><span className="font-semibold">{fee} MAD</span></div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-dashed border-border p-2">
              <Tag className="ml-2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Code promo" className="border-0 shadow-none focus-visible:ring-0" />
              <Button variant="ghost" size="sm" className="rounded-full">OK</Button>
            </div>
            <div className="flex items-baseline justify-between border-t border-border pt-4">
              <span className="font-display font-bold">Total</span>
              <span className="font-display text-2xl font-black text-primary">{total} MAD</span>
            </div>
            <Link to="/checkout"><Button size="lg" className="w-full rounded-full shadow-glow">Passer la commande</Button></Link>
            <p className="text-center text-xs text-muted-foreground">🌱 Vous sauvez {items.reduce((s, i) => s + (i.offer.oldPrice - i.offer.price) * i.qty, 0)} MAD et {items.length} repas !</p>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
