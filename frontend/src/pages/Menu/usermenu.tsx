import MenuItem from '../../components/Menu/MenuItem';
import OrderTimer from '../../components/Menu/OrderTimer';
import type { FoodItem } from '../../types/menu';

const mockMenu: FoodItem[] = [
  { id: '1', name: 'Veg Thali', description: 'Rice, Dal, 2 Sabzi, Roti, Salad', price: 120, category: 'Fixed', available: true },
  { id: '2', name: 'Paneer Butter Masala', description: 'Rich and creamy paneer', price: 180, category: 'Regular', available: true },
  { id: '3', name: 'Chicken Biryani', description: 'Aromatic basmati rice with chicken', price: 250, category: 'Special', available: false },
];

function Menu() {
    console.log('Menu component rendering');
    return (
        <div className="max-w-4xl mx-auto p-4 space-y-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">JPL Guest House Food Ordering</h1>
            {/* Today's Section */}
            <section className="space-y-4">
                <OrderTimer closingTime="10:00 AM" title="Today's Lunch" />
                <h1 className="text-3xl font-bold border-b pb-2 text-white border-green-400">Today's Menu</h1>
                <div className="grid gap-4 md:grid-cols-2">
                    {mockMenu.map(item => (
                        <MenuItem key={item.id} item={item} onAddToCart={(item) => console.log('Added:', item.name)} />
                    ))}
                </div>
            </section>

            {/* Tomorrow's Section */}
            <section className="space-y-4">
                <OrderTimer closingTime="08:00 PM" title="Tomorrow's Breakfast" />
                <h2 className="text-2xl font-bold border-b pb-2 text-white border-green-400">Tomorrow's Menu</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Items for tomorrow will go here */}
                    <p className="text-gray-200 italic">Tomorrow's menu is being finalized...</p>
                </div>
            </section>
        </div>
    );
}

export default Menu;