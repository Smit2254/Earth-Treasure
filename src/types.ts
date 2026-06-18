export interface Product {
  id: string;
  name: string;
  category: string;
  crystalType: string;
  size: string;
  moq: number;
  priceUSD: number;
  image: string;
  description: string;
  availability: "In Stock" | "Made to Order" | "Limited Capacity";
  purity: string;
  origin: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  categoryInterested: string;
  quantityRequirement: string;
  message: string;
}

export interface SelectedInquiryItem {
  product: Product;
  quantity: number;
}
