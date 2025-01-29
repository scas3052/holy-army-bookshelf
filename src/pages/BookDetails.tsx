import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { booksData } from "@/data/books";

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const book = booksData.find((b) => b.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-6">
              <h1 className="font-serif text-4xl font-bold text-gray-900">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600">{book.author}</p>
              <div className="text-2xl font-bold text-primary">
                {book.isFree ? "Free" : `$${book.price.toFixed(2)}`}
              </div>
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600">
                  This inspiring book will help strengthen your faith and deepen
                  your spiritual journey. Perfect for both new believers and
                  seasoned Christians seeking to grow in their walk with God.
                </p>
              </div>
              {!book.isFree && (
                <Button
                  className="w-full md:w-auto"
                  onClick={() => {
                    addToCart(book);
                  }}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;