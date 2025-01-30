import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { booksData } from "@/data/books";

const Authors = () => {
  const authorStats = booksData.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">
          Authors
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(authorStats).map(([author, count]) => (
            <div key={author} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{author}</h2>
              <p className="text-gray-600">{count} book{count !== 1 ? 's' : ''}</p>
              <Link 
                to={`/books/author/${encodeURIComponent(author)}`}
                className="mt-4 inline-block text-primary hover:underline"
              >
                View Books
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;