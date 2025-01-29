import React, { createContext, useContext, useState } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  isFree?: boolean;
}

interface CartContextType {
  cart: Book[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Book[]>([]);

  const addToCart = (book: Book) => {
    setCart((prevCart) => {
      // Check if book already exists in cart
      if (prevCart.some((item) => item.id === book.id)) {
        return prevCart;
      }
      return [...prevCart, book];
    });
  };

  const removeFromCart = (bookId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}