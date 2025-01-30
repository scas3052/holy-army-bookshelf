import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/contexts/CartContext";
import { Download } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  isFree?: boolean;
  language?: string;
}

export const BookCard = ({
  id,
  title,
  author,
  price,
  coverImage,
  isFree,
  language = "English",
}: BookCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, author, price, coverImage, isFree });
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: `${title} is being downloaded.`,
    });
    // Implement actual download logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-serif font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{author}</p>
        <p className="text-gray-500 text-sm mb-2">Language: {language}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">
            {isFree ? "Free" : `$${price.toFixed(2)}`}
          </span>
          <div className="flex space-x-2">
            {isFree ? (
              <Button onClick={handleDownload} size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )}
            <Button size="sm" onClick={() => navigate(`/book/${id}`)}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};