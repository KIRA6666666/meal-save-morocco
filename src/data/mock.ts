import tagine from "@/assets/food-tagine.jpg";
import pastry from "@/assets/food-pastry.jpg";
import sandwich from "@/assets/food-sandwich.jpg";
import breakfast from "@/assets/food-breakfast.jpg";
import healthy from "@/assets/food-healthy.jpg";
import hero from "@/assets/hero-food.jpg";

export type Offer = {
  id: string;
  title: string;
  restaurantId: string;
  restaurantName: string;
  city: string;
  category: string;
  image: string;
  oldPrice: number;
  price: number;
  pickupStart: string;
  pickupEnd: string;
  stock: number;
  tags: string[];
  description: string;
};

export type Restaurant = {
  id: string;
  name: string;
  city: string;
  rating: number;
  reviews: number;
  cover: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
  pickupNote: string;
};

export const cities = ["Casablanca", "Marrakech", "Rabat", "Tanger", "Fès", "Agadir"];
export const categories = ["Petit déjeuner", "Déjeuner", "Dîner", "Pâtisserie", "Sandwichs", "Plats marocains", "Healthy", "Boissons"];

export const restaurants: Restaurant[] = [
  { id: "r1", name: "Saveurs de Marrakech", city: "Marrakech", rating: 4.8, reviews: 312, cover: hero, description: "Cuisine marocaine authentique au cœur de la médina. Tagines, couscous et pâtisseries faits maison.", address: "12 Rue Riad Zitoun, Marrakech", phone: "+212 524 44 55 66", hours: "11h00 – 22h30", pickupNote: "Présentez votre code de commande à la caisse." },
  { id: "r2", name: "Casa Bites", city: "Casablanca", rating: 4.6, reviews: 218, cover: hero, description: "Bistrot moderne servant sandwichs gourmets, bowls et jus pressés à froid.", address: "45 Bd Mohammed V, Casablanca", phone: "+212 522 33 22 11", hours: "08h00 – 21h00", pickupNote: "Retrait au comptoir entre 19h et 21h." },
  { id: "r3", name: "Atlas Kitchen", city: "Rabat", rating: 4.7, reviews: 156, cover: hero, description: "Cuisine berbère revisitée, produits frais des montagnes de l'Atlas.", address: "8 Avenue Hassan II, Rabat", phone: "+212 537 11 22 33", hours: "12h00 – 23h00", pickupNote: "Entrée latérale, demandez Karim." },
  { id: "r4", name: "Medina Grill", city: "Fès", rating: 4.5, reviews: 98, cover: hero, description: "Grillades traditionnelles au feu de bois, kefta et brochettes.", address: "Place R'cif, Fès", phone: "+212 535 99 88 77", hours: "11h30 – 22h00", pickupNote: "Sonnez à la porte verte." },
  { id: "r5", name: "Tangier Taste", city: "Tanger", rating: 4.9, reviews: 421, cover: hero, description: "Saveurs méditerranéennes avec vue sur le détroit. Poissons frais du jour.", address: "Corniche, Tanger", phone: "+212 539 55 66 77", hours: "10h00 – 23h30", pickupNote: "Parking gratuit à l'arrière." },
  { id: "r6", name: "Argan Café", city: "Agadir", rating: 4.4, reviews: 87, cover: hero, description: "Petit déjeuner et brunch sains à base de produits locaux.", address: "Rue de la Plage, Agadir", phone: "+212 528 11 22 33", hours: "07h00 – 14h00", pickupNote: "Retrait en terrasse." },
];

export const offers: Offer[] = [
  { id: "o1", title: "Panier Tagine du Jour", restaurantId: "r1", restaurantName: "Saveurs de Marrakech", city: "Marrakech", category: "Plats marocains", image: tagine, oldPrice: 90, price: 35, pickupStart: "20:00", pickupEnd: "22:00", stock: 3, tags: ["Halal", "Fait maison"], description: "Un délicieux tagine de poulet aux olives et citron confit, accompagné de pain frais. Préparé le jour même." },
  { id: "o2", title: "Box Pâtisseries Marocaines", restaurantId: "r1", restaurantName: "Saveurs de Marrakech", city: "Marrakech", category: "Pâtisserie", image: pastry, oldPrice: 60, price: 22, pickupStart: "19:30", pickupEnd: "21:30", stock: 5, tags: ["Sucré", "Halal"], description: "Assortiment de cornes de gazelle, baklavas et chebakia. Idéal pour le thé." },
  { id: "o3", title: "Sandwich Poulet Grillé", restaurantId: "r2", restaurantName: "Casa Bites", city: "Casablanca", category: "Sandwichs", image: sandwich, oldPrice: 45, price: 18, pickupStart: "19:00", pickupEnd: "20:30", stock: 8, tags: ["Halal"], description: "Sandwich artisanal au poulet grillé, légumes croquants et sauce maison." },
  { id: "o4", title: "Petit Déjeuner Marocain", restaurantId: "r6", restaurantName: "Argan Café", city: "Agadir", category: "Petit déjeuner", image: breakfast, oldPrice: 55, price: 20, pickupStart: "12:00", pickupEnd: "13:30", stock: 4, tags: ["Végétarien"], description: "Msemen, miel d'argan, olives, fromage frais et thé à la menthe." },
  { id: "o5", title: "Bowl Healthy Quinoa", restaurantId: "r2", restaurantName: "Casa Bites", city: "Casablanca", category: "Healthy", image: healthy, oldPrice: 70, price: 28, pickupStart: "20:00", pickupEnd: "21:00", stock: 2, tags: ["Végétarien", "Sans gluten"], description: "Quinoa, avocat, poulet grillé, légumes de saison et vinaigrette citron." },
  { id: "o6", title: "Tagine Kefta du Chef", restaurantId: "r4", restaurantName: "Medina Grill", city: "Fès", category: "Plats marocains", image: tagine, oldPrice: 85, price: 32, pickupStart: "21:00", pickupEnd: "22:00", stock: 6, tags: ["Halal"], description: "Kefta de bœuf mijotée à la sauce tomate et œuf, servie chaude." },
  { id: "o7", title: "Bowl Méditerranéen", restaurantId: "r5", restaurantName: "Tangier Taste", city: "Tanger", category: "Healthy", image: healthy, oldPrice: 75, price: 30, pickupStart: "21:30", pickupEnd: "23:00", stock: 5, tags: ["Pescetarien"], description: "Poisson grillé, riz aux herbes, légumes méditerranéens." },
  { id: "o8", title: "Panier Surprise Berbère", restaurantId: "r3", restaurantName: "Atlas Kitchen", city: "Rabat", category: "Dîner", image: tagine, oldPrice: 100, price: 40, pickupStart: "21:00", pickupEnd: "22:30", stock: 3, tags: ["Halal", "Surprise"], description: "Sélection mystère de plats du jour préparés par notre chef." },
];

export const testimonials = [
  { name: "Salma B.", role: "Cliente, Casablanca", quote: "J'économise chaque semaine et je mange mieux. Une appli à recommander à tout le monde !", avatar: "SB" },
  { name: "Yassine R.", role: "Restaurateur, Marrakech", quote: "Au lieu de jeter, on vend. Nos invendus partent en 30 minutes.", avatar: "YR" },
  { name: "Amine K.", role: "Étudiant, Rabat", quote: "Des repas de qualité à prix d'étudiant. Parfait pour mon budget.", avatar: "AK" },
];

export const faqs = [
  { q: "Comment fonctionne la commande ?", a: "Choisissez une offre, payez en ligne ou à la récupération, puis présentez votre code au restaurant pendant le créneau de retrait." },
  { q: "Est-ce que la nourriture est encore bonne ?", a: "Absolument. Il s'agit d'invendus du jour, préparés frais. Les restaurants garantissent la qualité." },
  { q: "Puis-je annuler une commande ?", a: "Oui, jusqu'à 1h avant le créneau de retrait, directement depuis votre compte." },
  { q: "Comment devenir restaurant partenaire ?", a: "Inscrivez-vous gratuitement, validez votre établissement et commencez à publier vos offres." },
];

export const userOrders = [
  { id: "ORD-2841", date: "12 Avril 2026", restaurant: "Saveurs de Marrakech", items: 2, total: 57, status: "Récupérée" },
  { id: "ORD-2799", date: "08 Avril 2026", restaurant: "Casa Bites", items: 1, total: 18, status: "Récupérée" },
  { id: "ORD-2755", date: "02 Avril 2026", restaurant: "Argan Café", items: 1, total: 20, status: "Annulée" },
];

export const partnerOffers = [
  { id: "P-101", name: "Panier Tagine du Jour", price: 35, oldPrice: 90, qty: 3, status: "Actif", sold: 12 },
  { id: "P-102", name: "Box Pâtisseries", price: 22, oldPrice: 60, qty: 5, status: "Actif", sold: 8 },
  { id: "P-099", name: "Couscous Vendredi", price: 30, oldPrice: 80, qty: 0, status: "Épuisé", sold: 20 },
];
