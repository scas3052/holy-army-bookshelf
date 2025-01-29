import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link to="/books/all" className="hover:text-primary transition-colors">
              All Books
            </Link>
            <Link to="/books/free" className="hover:text-primary transition-colors">
              Free Books
            </Link>
            <Link to="/books/paid" className="hover:text-primary transition-colors">
              Paid Books
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
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
                className="hover:text-primary transition-colors px-4 py-2"
              >
                All Books
              </Link>
              <Link
                to="/books/free"
                className="hover:text-primary transition-colors px-4 py-2"
              >
                Free Books
              </Link>
              <Link
                to="/books/paid"
                className="hover:text-primary transition-colors px-4 py-2"
              >
                Paid Books
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors px-4 py-2"
              >
                Contact
              </Link>
              <Link to="/cart" className="px-4 py-2 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
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