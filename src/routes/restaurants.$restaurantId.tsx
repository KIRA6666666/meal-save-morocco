import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, MapPin, Phone, Clock, Info } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OfferCard } from "@/components/OfferCard";
import { restaurants, offers } from "@/data/mock";

export const Route = createFileRoute("/restaurants/$restaurantId")({
  loader: ({ params }) => {
    const r = restaurants.find((x) => x.id === params.restaurantId);
    if (!r) throw notFound();
    return { restaurant: r };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.restaurant.name} — SaveurZéro` },
      { name: "description", content: loaderData.restaurant.description },
      { property: "og:image", content: loaderData.restaurant.cover },
    ] : [],
  }),
  component: RestaurantPage,
  notFoundComponent: () => <div className="p-16 text-center"><Link to="/offers">← Offres</Link></div>,
});

function RestaurantPage() {
  const { restaurant } = Route.useLoaderData();
  const restaurantOffers = offers.filter((o) => o.restaurantId === restaurant.id);
  const reviews = [
    { name: "Sara", rating: 5, text: "Service rapide, repas délicieux et concept génial." },
    { name: "Mohammed", rating: 4, text: "Très bon rapport qualité-prix. À refaire !" },
    { name: "Fatima", rating: 5, text: "Une vraie découverte, j'adore l'idée." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative h-64 overflow-hidden md:h-80">
        <img src={restaurant.cover} alt={restaurant.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto -mt-20 max-w-7xl px-4 md:px-6">
        <div className="rounded-[2rem] bg-card p-7 shadow-card md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero font-display text-2xl font-black text-primary-foreground">
                  {restaurant.name[0]}
                </div>
                <div>
                  <h1 className="font-display text-3xl font-bold md:text-4xl">{restaurant.name}</h1>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-accent text-accent" />{restaurant.rating} <span className="text-xs">({restaurant.reviews})</span></span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{restaurant.city}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{restaurant.hours}</span>
                  </div>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-muted-foreground">{restaurant.description}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border p-4"><MapPin className="h-5 w-5 text-primary" /><p className="mt-2 text-xs text-muted-foreground">Adresse</p><p className="text-sm font-medium">{restaurant.address}</p></div>
            <div className="rounded-2xl border border-border p-4"><Phone className="h-5 w-5 text-primary" /><p className="mt-2 text-xs text-muted-foreground">Contact</p><p className="text-sm font-medium">{restaurant.phone}</p></div>
            <div className="rounded-2xl border border-border p-4"><Info className="h-5 w-5 text-primary" /><p className="mt-2 text-xs text-muted-foreground">Retrait</p><p className="text-sm font-medium">{restaurant.pickupNote}</p></div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">Offres disponibles</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {restaurantOffers.map((o) => <OfferCard key={o.id} offer={o} />)}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_400px]">
          <div>
            <h2 className="font-display text-2xl font-bold">Avis clients</h2>
            <div className="mt-5 space-y-4">
              {reviews.map((r, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{r.name}</p>
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Localisation</h2>
            <div className="mt-5 flex aspect-square items-center justify-center rounded-3xl bg-gradient-warm text-center">
              <div>
                <MapPin className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-3 font-semibold">{restaurant.address}</p>
                <p className="text-xs text-muted-foreground">Carte interactive</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
