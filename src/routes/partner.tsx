import { createFileRoute } from "@tanstack/react-router";
import { Plus, ShoppingBag, TrendingUp, Leaf, DollarSign, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { partnerOffers, categories } from "@/data/mock";

export const Route = createFileRoute("/partner")({
  head: () => ({ meta: [{ title: "Espace Restaurant — SaveurZéro" }] }),
  component: Partner,
});

function Partner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary">Espace partenaire</p>
            <h1 className="mt-1 font-display text-4xl font-bold">Saveurs de Marrakech</h1>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button className="rounded-full shadow-glow"><Plus className="mr-1 h-4 w-4" /> Nouvelle offre</Button></DialogTrigger>
            <DialogContent className="rounded-3xl">
              <DialogHeader><DialogTitle className="font-display">Publier une offre</DialogTitle></DialogHeader>
              <form onSubmit={(e) => { e.preventDefault(); setOpen(false); }} className="space-y-4">
                <div><Label className="mb-1 block text-xs">Nom du repas</Label><Input placeholder="Tagine du jour" className="rounded-xl" /></div>
                <div><Label className="mb-1 block text-xs">Catégorie</Label>
                  <Select><SelectTrigger className="rounded-xl"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                    <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label className="mb-1 block text-xs">Prix initial</Label><Input type="number" placeholder="90" className="rounded-xl" /></div>
                  <div><Label className="mb-1 block text-xs">Prix réduit</Label><Input type="number" placeholder="35" className="rounded-xl" /></div>
                  <div><Label className="mb-1 block text-xs">Quantité</Label><Input type="number" placeholder="5" className="rounded-xl" /></div>
                  <div><Label className="mb-1 block text-xs">Retrait</Label><Input placeholder="20:00–22:00" className="rounded-xl" /></div>
                </div>
                <div className="flex h-28 items-center justify-center rounded-xl border-2 border-dashed border-border text-sm text-muted-foreground">📷 Glissez une image ici</div>
                <Button type="submit" className="w-full rounded-full">Publier l'offre</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShoppingBag, label: "Offres publiées", value: "24", color: "primary" },
            { icon: TrendingUp, label: "Articles vendus", value: "187", color: "success" },
            { icon: DollarSign, label: "Revenus récupérés", value: "4 280 MAD", color: "accent" },
            { icon: Leaf, label: "Gaspillage évité", value: "62 kg", color: "primary" },
          ].map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-5 shadow-soft">
              <s.icon className="h-7 w-7 text-primary" />
              <p className="mt-3 font-display text-2xl font-black">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold">Ventes des 7 derniers jours</h3>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="mt-6 flex h-44 items-end gap-3">
            {[40, 65, 50, 80, 95, 72, 88].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-primary to-primary/40 transition-all hover:opacity-80" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => <span key={d}>{d}</span>)}
          </div>
        </div>

        {/* Offers table */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-display text-lg font-bold">Mes offres</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-muted-foreground">
                <tr><th className="pb-3">ID</th><th className="pb-3">Nom</th><th className="pb-3">Prix</th><th className="pb-3">Stock</th><th className="pb-3">Vendus</th><th className="pb-3">Statut</th></tr>
              </thead>
              <tbody>
                {partnerOffers.map((o) => (
                  <tr key={o.id} className="border-t border-border">
                    <td className="py-3 font-mono text-xs">{o.id}</td>
                    <td className="py-3 font-medium">{o.name}</td>
                    <td className="py-3"><span className="font-bold text-primary">{o.price}</span> <span className="text-xs text-muted-foreground line-through">{o.oldPrice}</span></td>
                    <td className="py-3">{o.qty}</td>
                    <td className="py-3">{o.sold}</td>
                    <td className="py-3"><Badge variant={o.status === "Actif" ? "default" : "secondary"} className="rounded-full">{o.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-display text-lg font-bold">Commandes reçues aujourd'hui</h3>
          <div className="mt-4 space-y-2">
            {[
              { code: "SZ-2891", item: "Panier Tagine ×1", time: "20:30", client: "Salma B." },
              { code: "SZ-2892", item: "Box Pâtisseries ×2", time: "21:00", client: "Mehdi A." },
              { code: "SZ-2893", item: "Panier Tagine ×1", time: "21:15", client: "Yasmine K." },
            ].map((o) => (
              <div key={o.code} className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-xs font-bold text-primary">{o.code}</span>
                  <div><p className="text-sm font-medium">{o.item}</p><p className="text-xs text-muted-foreground">{o.client}</p></div>
                </div>
                <span className="text-sm font-semibold">{o.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
