import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, Store, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImg from "@/assets/hero-food.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Connexion — SaveurZéro" }] }),
  component: Login,
});

function Login() {
  const [role, setRole] = useState<"client" | "restaurant">("client");
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-10 md:px-12 lg:px-20">
        <Link to="/" className="mb-10 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero"><Leaf className="h-5 w-5 text-primary-foreground" /></div>
          <span className="font-display text-xl font-bold">SaveurZéro</span>
        </Link>
        <h1 className="font-display text-4xl font-bold">Bon retour 👋</h1>
        <p className="mt-2 text-muted-foreground">Connectez-vous pour continuer à sauver des repas.</p>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-full bg-secondary p-1">
          <button onClick={() => setRole("client")} className={`flex items-center justify-center gap-2 rounded-full py-2 text-sm font-semibold ${role === "client" ? "bg-card shadow-soft" : "text-muted-foreground"}`}><User className="h-4 w-4" /> Client</button>
          <button onClick={() => setRole("restaurant")} className={`flex items-center justify-center gap-2 rounded-full py-2 text-sm font-semibold ${role === "restaurant" ? "bg-card shadow-soft" : "text-muted-foreground"}`}><Store className="h-4 w-4" /> Restaurant</button>
        </div>

        <form className="mt-6 space-y-4">
          <div><Label className="mb-1 block text-xs">Email</Label><Input type="email" placeholder="vous@email.com" className="rounded-xl" /></div>
          <div><Label className="mb-1 block text-xs">Mot de passe</Label><Input type="password" placeholder="••••••••" className="rounded-xl" /></div>
          <Button className="w-full rounded-full shadow-glow" size="lg">Se connecter</Button>
          <p className="text-center text-sm text-muted-foreground">Pas de compte ? <Link to="/signup" className="font-semibold text-primary hover:underline">S'inscrire</Link></p>
        </form>
      </div>
      <div className="relative hidden overflow-hidden lg:block">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute bottom-12 left-12 right-12 text-primary-foreground">
          <h2 className="font-display text-4xl font-black leading-tight">Moins de gaspillage,<br />plus d'économies.</h2>
          <p className="mt-3 max-w-md opacity-90">Rejoignez +50 000 personnes qui sauvent des repas chaque jour au Maroc.</p>
        </div>
      </div>
    </div>
  );
}
