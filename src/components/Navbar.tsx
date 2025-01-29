import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              HOLY ARMY FELLOWSHIP
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/books/all"
              className="px-6 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            >
              All
            </Link>
            <Link
              to="/books/worship"
              className="px-6 py-2 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Worship
            </Link>
            <Link
              to="/books/events"
              className="px-6 py-2 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Events
            </Link>
            <Link
              to="/books/community"
              className="px-6 py-2 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Community
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                to="/books/all"
                className="px-4 py-2 bg-blue-700 text-white rounded-full"
              >
                All
              </Link>
              <Link
                to="/books/worship"
                className="px-4 py-2 border-2 border-blue-700 text-blue-700 rounded-full"
              >
                Worship
              </Link>
              <Link
                to="/books/events"
                className="px-4 py-2 border-2 border-blue-700 text-blue-700 rounded-full"
              >
                Events
              </Link>
              <Link
                to="/books/community"
                className="px-4 py-2 border-2 border-blue-700 text-blue-700 rounded-full"
              >
                Community
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors px-4 py-2"
              >
                Contact
              </Link>
              <Link to="/cart" className="px-4 py-2 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart {cart.length > 0 && `(${cart.length})`}
              </Link>
              <Link to="/login" className="px-4 py-2 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};