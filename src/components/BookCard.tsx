import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  isFree?: boolean;
}

export const BookCard = ({
  id,
  title,
  author,
  price,
  coverImage,
  isFree,
}: BookCardProps) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // In a real app, this would interact with a cart state management system
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={coverImage}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-serif font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{author}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">
            {isFree ? "Free" : `$${price.toFixed(2)}`}
          </span>
          <div className="space-x-2">
            <Button variant="outline" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button onClick={() => navigate(`/book/${id}`)}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};