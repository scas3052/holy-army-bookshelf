import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { BookCard } from "@/components/BookCard";
import { booksData } from "@/data/books";

const Books = () => {
  const { category } = useParams();
  
  const filteredBooks = booksData.filter((book) => {
    if (category?.startsWith('language/')) {
      const language = category.replace('language/', '');
      return book.language.toLowerCase() === language.toLowerCase();
    }
    if (category?.startsWith('genre/')) {
      const genre = category.replace('genre/', '');
      return book.genre.toLowerCase() === genre.toLowerCase();
    }
    if (category === "free") return book.category === "free";
    if (category === "paid") return book.category === "paid";
    if (category === "english") return book.language.toLowerCase() === "english";
    if (category === "grid" || category === "list") return true;
    return true;
  });

  const getPageTitle = () => {
    if (category?.startsWith('language/')) {
      const language = category.replace('language/', '');
      return `${language} Books`;
    }
    if (category?.startsWith('genre/')) {
      const genre = category.replace('genre/', '');
      return `${genre.charAt(0).toUpperCase() + genre.slice(1)} Books`;
    }
    if (category === "english") return "English Books";
    if (category === "grid") return "Grid View";
    if (category === "list") return "List View";
    if (category) return `${category.charAt(0).toUpperCase() + category.slice(1)} Books`;
    return "All Books";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">
          {getPageTitle()}
        </h1>
        <div className={`grid gap-8 ${
          category === "list" 
            ? "grid-cols-1" 
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}>
          {filteredBooks.map((book) => (
            <BookCard 
              key={book.id} 
              {...book} 
              className={category === "list" ? "flex flex-row items-center gap-4" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;