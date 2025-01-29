import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link to="/books/all">
              <Button>Browse Books</Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b"
              >
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-24 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.author}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="mt-6 border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-primary text-xl">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Link to="/checkout">
                <Button className="w-full">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;