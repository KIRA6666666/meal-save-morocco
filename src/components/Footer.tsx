import { Link } from "@tanstack/react-router";
import { Leaf, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">SaveurZéro</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              La plateforme marocaine qui sauve les bons repas du gaspillage et les rend accessibles à tous.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <Input placeholder="Votre email" className="rounded-full bg-background" />
              <Button type="submit" className="rounded-full">S'abonner</Button>
            </form>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-bold">Plateforme</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/offers" className="hover:text-foreground">Offres</Link></li>
              <li><Link to="/partner" className="hover:text-foreground">Restaurants</Link></li>
              <li><Link to="/dashboard" className="hover:text-foreground">Mon compte</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-bold">Société</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-foreground" href="#">À propos</a></li>
              <li><a className="hover:text-foreground" href="#">Impact</a></li>
              <li><a className="hover:text-foreground" href="#">Contact</a></li>
              <li><a className="hover:text-foreground" href="#">CGU</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 SaveurZéro · Fait avec 🌱 au Maroc</p>
          <div className="flex gap-3">
            <a href="#" className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
