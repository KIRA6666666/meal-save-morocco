import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Banknote, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Commande — SaveurZéro" }] }),
  component: Checkout,
});

function Checkout() {
  const [done, setDone] = useState(false);
  const [pay, setPay] = useState<"card" | "cash">("card");

  if (done) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/15"><CheckCircle2 className="h-10 w-10 text-success" /></div>
          <h1 className="mt-6 font-display text-4xl font-bold">Commande confirmée !</h1>
          <p className="mt-3 text-muted-foreground">Votre code de retrait : <span className="font-mono font-bold text-foreground">SZ-2891</span></p>
          <p className="mt-2 text-sm text-muted-foreground">Présentez-le au restaurant pendant le créneau de retrait.</p>
          <Link to="/dashboard" className="mt-8"><Button className="rounded-full">Voir mes commandes</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="font-display text-4xl font-bold">Finaliser votre commande</h1>
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6 rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div>
              <h3 className="font-display text-lg font-bold">Vos informations</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div><Label className="mb-1 block text-xs">Nom complet</Label><Input required placeholder="Salma Benali" className="rounded-xl" /></div>
                <div><Label className="mb-1 block text-xs">Téléphone</Label><Input required placeholder="+212 6 ..." className="rounded-xl" /></div>
                <div className="sm:col-span-2"><Label className="mb-1 block text-xs">Email</Label><Input required type="email" placeholder="vous@email.com" className="rounded-xl" /></div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold">Préférence de retrait</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["Début du créneau", "Fin du créneau"].map((p) => (
                  <label key={p} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input type="radio" name="pref" defaultChecked={p === "Début du créneau"} className="accent-primary" />
                    <span className="text-sm font-medium">{p}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold">Paiement</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button type="button" onClick={() => setPay("card")} className={`flex items-center gap-3 rounded-xl border p-4 text-left ${pay === "card" ? "border-primary bg-primary/5" : "border-border"}`}>
                  <CreditCard className="h-5 w-5 text-primary" /> <div><p className="text-sm font-semibold">Carte bancaire</p><p className="text-xs text-muted-foreground">Sécurisé</p></div>
                </button>
                <button type="button" onClick={() => setPay("cash")} className={`flex items-center gap-3 rounded-xl border p-4 text-left ${pay === "cash" ? "border-primary bg-primary/5" : "border-border"}`}>
                  <Banknote className="h-5 w-5 text-primary" /> <div><p className="text-sm font-semibold">Espèces</p><p className="text-xs text-muted-foreground">Au retrait</p></div>
                </button>
              </div>
              {pay === "card" && (
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="sm:col-span-3"><Input placeholder="Numéro de carte" className="rounded-xl" /></div>
                  <Input placeholder="MM/AA" className="rounded-xl" />
                  <Input placeholder="CVV" className="rounded-xl" />
                  <Input placeholder="Nom" className="rounded-xl" />
                </div>
              )}
            </div>
          </div>

          <aside className="h-fit space-y-3 rounded-3xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-lg font-bold">Votre commande</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Panier Tagine ×1</span><span>35 MAD</span></div>
              <div className="flex justify-between"><span>Box Pâtisseries ×2</span><span>44 MAD</span></div>
              <div className="flex justify-between text-muted-foreground"><span>Frais</span><span>5 MAD</span></div>
            </div>
            <div className="flex items-baseline justify-between border-t pt-3">
              <span className="font-display font-bold">Total</span>
              <span className="font-display text-2xl font-black text-primary">84 MAD</span>
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full shadow-glow">Confirmer la commande</Button>
          </aside>
        </form>
      </div>
      <Footer />
    </div>
  );
}
