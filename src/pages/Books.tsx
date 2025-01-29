import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { BookCard } from "@/components/BookCard";

// Sample books data (in a real app, this would come from an API)
const booksData = [
  {
    id: "1",
    title: "The Power of Prayer",
    author: "Rev. John Smith",
    price: 9.99,
    coverImage: "/placeholder.svg",
    language: "English",
    category: "paid",
  },
  {
    id: "2",
    title: "Daily Devotional",
    author: "Pastor Sarah Johnson",
    price: 0,
    coverImage: "/placeholder.svg",
    language: "English",
    category: "free",
    isFree: true,
  },
  {
    id: "3",
    title: "Walking in Faith",
    author: "Dr. Michael Brown",
    price: 14.99,
    coverImage: "/placeholder.svg",
    language: "English",
    category: "paid",
  },
  {
    id: "4",
    title: "Biblical Leadership",
    author: "Pastor David Wilson",
    price: 12.99,
    coverImage: "/placeholder.svg",
    language: "English",
    category: "paid",
  },
  {
    id: "5",
    title: "Introduction to Christianity",
    author: "Dr. Emily White",
    price: 0,
    coverImage: "/placeholder.svg",
    language: "English",
    category: "free",
    isFree: true,
  },
];

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