import React, { useState } from "react";
import { Coffee, UtensilsCrossed, Sparkles, ChefHat, Star } from "lucide-react";

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { id: "all", name: "All", icon: UtensilsCrossed },
    { id: "appetizers", name: "Appetizers", icon: Sparkles },
    { id: "mains", name: "Main Course", icon: ChefHat },
    { id: "desserts", name: "Desserts", icon: Coffee },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      category: "mains",
      price: "$24.99",
      description:
        "Fresh Atlantic salmon with herbs, served with roasted vegetables",
      image:
        "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&h=300&fit=crop",
      spicy: false,
      popular: true,
    },
    {
      id: 2,
      name: "Bruschetta Trio",
      category: "appetizers",
      price: "$12.99",
      description: "Traditional tomato, mushroom truffle, and ricotta honey",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
      spicy: false,
      popular: true,
    },
    {
      id: 3,
      name: "Tiramisu Classic",
      category: "desserts",
      price: "$8.99",
      description: "House-made with espresso-soaked ladyfingers and mascarpone",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      spicy: false,
      popular: false,
    },
    {
      id: 4,
      name: "Ribeye Steak",
      category: "mains",
      price: "$32.99",
      description: "12oz premium cut with garlic butter and seasonal sides",
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
      spicy: false,
      popular: true,
    },
    {
      id: 5,
      name: "Spicy Calamari",
      category: "appetizers",
      price: "$14.99",
      description: "Crispy fried squid with arrabbiata sauce",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      spicy: true,
      popular: false,
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      category: "desserts",
      price: "$9.99",
      description: "Warm molten center with vanilla ice cream",
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
      spicy: false,
      popular: true,
    },
    {
      id: 7,
      name: "Truffle Pasta",
      category: "mains",
      price: "$28.99",
      description: "Fresh fettuccine with black truffle cream sauce",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
      spicy: false,
      popular: false,
    },
    {
      id: 8,
      name: "Caprese Salad",
      category: "appetizers",
      price: "$11.99",
      description: "Fresh mozzarella, heirloom tomatoes, basil, balsamic glaze",
      image:
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop",
      spicy: false,
      popular: false,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-rose-600 to-red-600 text-white shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <ChefHat className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-2 tracking-tight">
              Aurafit Restaurant
            </h1>
            <p className="text-xl text-orange-100 font-light">
              Authentic Mediterranean Cuisine
            </p>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-300 text-yellow-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Popular
                  </div>
                )}
                {item.spicy && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    🌶️ Spicy
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-5 h-5 ${
                      favorites.includes(item.id)
                        ? "fill-rose-500 text-rose-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Order Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:from-orange-600 hover:to-rose-600 active:scale-95">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">📍 123 Mediterranean Ave, Seaside City</p>
          <p className="text-gray-400">Open Daily: 11:00 AM - 10:00 PM</p>
          <p className="text-gray-400 mt-2">📞 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}
