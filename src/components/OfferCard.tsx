import { Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import type { Offer } from "@/data/mock";
import { Badge } from "@/components/ui/badge";

export function OfferCard({ offer }: { offer: Offer }) {
  const discount = Math.round(((offer.oldPrice - offer.price) / offer.oldPrice) * 100);
  return (
    <Link
      to="/offers/$offerId"
      params={{ offerId: offer.id }}
      className="group block overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={offer.image} alt={offer.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-soft">−{discount}%</span>
        </div>
        {offer.stock <= 3 && (
          <span className="absolute right-3 top-3 rounded-full bg-destructive/95 px-3 py-1 text-xs font-semibold text-destructive-foreground">
            Plus que {offer.stock}
          </span>
        )}
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-tight">{offer.title}</h3>
        </div>
        <p className="text-sm font-medium text-muted-foreground">{offer.restaurantName}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{offer.city}</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{offer.pickupStart}–{offer.pickupEnd}</span>
        </div>
        <div className="flex flex-wrap gap-1 pt-1">
          {offer.tags.slice(0, 2).map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full text-[10px] font-medium">{t}</Badge>
          ))}
          <Badge variant="outline" className="rounded-full text-[10px]">{offer.category}</Badge>
        </div>
        <div className="flex items-baseline justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-primary">{offer.price} MAD</span>
            <span className="text-sm text-muted-foreground line-through">{offer.oldPrice} MAD</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
