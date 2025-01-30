import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/contexts/CartContext";
import { Download, Eye } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  isFree?: boolean;
  language?: string;
  genre?: string;
  className?: string;
}

export const BookCard = ({
  id,
  title,
  author,
  price,
  coverImage,
  isFree,
  language = "English",
  genre = "Uncategorized",
  className = "",
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
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${className}`}>
      <div className={className.includes("flex") ? "flex-shrink-0 w-1/4" : ""}>
        <img 
          src={coverImage} 
          alt={title} 
          className={className.includes("flex") ? "w-full h-40 object-cover" : "w-full h-40 object-cover"}
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-serif font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{author}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {language}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {genre}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">
            {isFree ? "Free" : `$${price.toFixed(2)}`}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/book/${id}`)}
            >
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
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
          </div>
        </div>
      </div>
    </div>
  );
};