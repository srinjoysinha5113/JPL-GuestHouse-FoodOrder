export type FoodCategory = 'Fixed' | 'Special' | 'Regular';

export interface FoodItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: FoodCategory;
  available: boolean;
  imageUrl?: string;
}

export interface DayMenu {
  date: string;
  items: FoodItem[];
  closingTime: string; // ISO string or local time format
}

export interface MenuState {
  today: DayMenu | null;
  tomorrow: DayMenu | null;
  loading: boolean;
  error: string | null;
}
