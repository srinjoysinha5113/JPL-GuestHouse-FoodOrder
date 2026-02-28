import React from 'react';
import type { FoodItem } from '../../types/menu';

interface MenuItemProps {
  item: FoodItem;
  onAddToCart?: (item: FoodItem) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white/90 hover:shadow-md transition-shadow backdrop-blur-sm">
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500 text-sm">{item.description}</p>
        <span className="text-green-600 font-bold">₹{item.price}</span>
      </div>
      <button 
        onClick={() => onAddToCart?.(item)}
        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors disabled:bg-gray-400"
        disabled={!item.available}
      >
        {item.available ? 'Add' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default MenuItem;
