import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { BookCard } from "@/components/BookCard";
import { booksData } from "@/data/books";

const Books = () => {
  const { category } = useParams();
  
  const filteredBooks = booksData.filter((book) => {
    if (category === "free") return book.category === "free";
    if (category === "paid") return book.category === "paid";
    return true; // "all" category
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Books` : "All Books"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;