import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Heart, Leaf, Receipt, TrendingDown, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { userOrders, restaurants } from "@/data/mock";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Mon compte — SaveurZéro" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero font-display text-2xl font-black text-primary-foreground">SB</div>
          <div>
            <h1 className="font-display text-3xl font-bold">Bonjour, Salma 👋</h1>
            <p className="text-muted-foreground">Continuez à sauver des repas !</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-gradient-hero p-6 text-primary-foreground shadow-glow">
            <Leaf className="h-8 w-8" />
            <p className="mt-3 font-display text-3xl font-black">28</p>
            <p className="text-sm opacity-90">repas sauvés</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <TrendingDown className="h-8 w-8 text-primary" />
            <p className="mt-3 font-display text-3xl font-black">847 MAD</p>
            <p className="text-sm text-muted-foreground">économisés</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <Heart className="h-8 w-8 text-accent-foreground" />
            <p className="mt-3 font-display text-3xl font-black">5</p>
            <p className="text-sm text-muted-foreground">restaurants favoris</p>
          </div>
        </div>

        <Tabs defaultValue="orders" className="mt-10">
          <TabsList className="rounded-full bg-secondary p-1">
            <TabsTrigger value="orders" className="rounded-full"><Receipt className="mr-1 h-4 w-4" /> Commandes</TabsTrigger>
            <TabsTrigger value="favs" className="rounded-full"><Heart className="mr-1 h-4 w-4" /> Favoris</TabsTrigger>
            <TabsTrigger value="notif" className="rounded-full"><Bell className="mr-1 h-4 w-4" /> Notifs</TabsTrigger>
            <TabsTrigger value="profile" className="rounded-full"><User className="mr-1 h-4 w-4" /> Profil</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6 space-y-3">
            {userOrders.map((o) => (
              <div key={o.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5">
                <div>
                  <p className="font-display font-bold">{o.restaurant}</p>
                  <p className="text-xs text-muted-foreground">{o.id} · {o.date} · {o.items} article(s)</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={o.status === "Récupérée" ? "default" : "secondary"} className="rounded-full">{o.status}</Badge>
                  <p className="font-display font-bold text-primary">{o.total} MAD</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="favs" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.slice(0, 3).map((r) => (
              <Link key={r.id} to="/restaurants/$restaurantId" params={{ restaurantId: r.id }} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-card">
                <img src={r.cover} alt={r.name} className="aspect-video w-full object-cover" />
                <div className="p-4">
                  <p className="font-display font-bold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city} · ⭐ {r.rating}</p>
                </div>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="notif" className="mt-6 space-y-3">
            {["Nouvelle offre chez Casa Bites", "Votre commande SZ-2841 est prête", "Saveurs de Marrakech a publié 3 nouvelles offres"].map((n) => (
              <div key={n} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10"><Bell className="h-4 w-4 text-primary" /></div>
                <p className="text-sm">{n}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="profile" className="mt-6 rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Salma Benali · salma@email.com · +212 6 00 00 00</p>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
