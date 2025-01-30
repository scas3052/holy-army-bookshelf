import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { genres, getLanguages } from "@/data/books";

export const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const languages = getLanguages();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <Link to="/" className="flex-1 flex justify-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-300% animate-gradient bg-clip-text text-transparent">
              HOLY ARMY FELLOWSHIP
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className="px-4 py-2">Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Books</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div>
                        <h4 className="font-medium mb-2">Genres</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {genres.map((genre) => (
                            <Link
                              key={genre}
                              to={`/books/genre/${genre}`}
                              className="text-sm hover:text-primary"
                            >
                              {genre.charAt(0).toUpperCase() + genre.slice(1)}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Languages</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {languages.map((language) => (
                            <Link
                              key={language}
                              to={`/books/language/${language}`}
                              className="text-sm hover:text-primary"
                            >
                              {language}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                      <Link to="/books/grid" className="block py-2 hover:text-primary">
                        Grid View
                      </Link>
                      <Link to="/books/list" className="block py-2 hover:text-primary">
                        List View
                      </Link>
                      <Link to="/cart" className="block py-2 hover:text-primary">
                        Cart
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <Link to="/" className="block py-2">Home</Link>
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                Books <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-2">
                <h4 className="font-medium mb-2">Genres</h4>
                {genres.map((genre) => (
                  <Link
                    key={genre}
                    to={`/books/genre/${genre}`}
                    className="block py-1 text-sm"
                  >
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </Link>
                ))}
                <h4 className="font-medium mb-2 mt-4">Languages</h4>
                {languages.map((language) => (
                  <Link
                    key={language}
                    to={`/books/language/${language}`}
                    className="block py-1 text-sm"
                  >
                    {language}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/books/grid" className="block py-2">Grid View</Link>
            <Link to="/books/list" className="block py-2">List View</Link>
            <Link to="/cart" className="block py-2">Cart</Link>
            <Link to="/login" className="block py-2">My Account</Link>
          </div>
        )}
      </div>
    </nav>
  );
};