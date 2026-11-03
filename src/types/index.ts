export interface Product {
  id: string;
  name: string;
  category: 'plc' | 'variadores' | 'sensores' | 'hmi' | 'tableros' | 'otros';
  brand: string;
  model: string;
  price: number;
  priceFormatted: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
}

export type ActiveTab = 'inicio' | 'tienda' | 'servicios' | 'contacto' | 'showcase';
