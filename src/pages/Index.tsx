import { Navbar } from "@/components/Navbar";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { booksData } from "@/data/books";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "free" | "paid">("all");

  const filteredBooks = booksData.filter((book) => {
    if (selectedCategory === "free") return book.category === "free";
    if (selectedCategory === "paid") return book.category === "paid";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-300% animate-gradient bg-clip-text text-transparent">
            Spiritual Growth Through Reading
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover our collection of inspiring Christian e-books to strengthen your faith
            and deepen your spiritual journey.
          </p>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="container mx-auto py-8">
        <div className="flex justify-center space-x-4">
          <Button 
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
          >
            All Books
          </Button>
          <Button 
            variant={selectedCategory === "free" ? "default" : "outline"}
            onClick={() => setSelectedCategory("free")}
          >
            Free Books
          </Button>
          <Button 
            variant={selectedCategory === "paid" ? "default" : "outline"}
            onClick={() => setSelectedCategory("paid")}
          >
            Paid Books
          </Button>
        </div>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">About Us</h3>
              <p className="text-left">
                Holy Army Fellowship is dedicated to spreading the word of God through digital books. 
                Explore free and paid Christian e-books to enrich your faith.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>📖 <a href="/books/all" className="hover:text-primary">Books</a></li>
                <li>🛒 <a href="/cart" className="hover:text-primary">Cart</a></li>
                <li>🔑 <a href="/login" className="hover:text-primary">Login</a></li>
                <li>📩 <a href="/contact" className="hover:text-primary">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>✉️ info@holyarmyebooks.com</li>
                <li>📞 +91 1234567890</li>
                <li>⏰ Mon - Sat, 9 AM - 6 PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2024 HOLY ARMY FELLOWSHIP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;