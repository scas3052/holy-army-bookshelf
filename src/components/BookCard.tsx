import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <Link to={`/book/${id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};