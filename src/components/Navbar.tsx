import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-1" /> {/* Spacer */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-300% animate-gradient bg-clip-text text-transparent">
              HOLY ARMY FELLOWSHIP
            </h1>
          </Link>
          <div className="flex-1 flex justify-end space-x-4">
            <Link to="/your-books">
              <Button variant="ghost">Your Books</Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};