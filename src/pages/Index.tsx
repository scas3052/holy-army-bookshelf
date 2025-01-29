import { Navbar } from "@/components/Navbar";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample books data (in a real app, this would come from an API)
const featuredBooks = [
  {
    id: "1",
    title: "The Power of Prayer",
    author: "Rev. John Smith",
    price: 9.99,
    coverImage: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Daily Devotional",
    author: "Pastor Sarah Johnson",
    price: 0,
    coverImage: "/placeholder.svg",
    isFree: true,
  },
  {
    id: "3",
    title: "Walking in Faith",
    author: "Dr. Michael Brown",
    price: 14.99,
    coverImage: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Spiritual Growth Through Reading
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover our collection of inspiring Christian e-books to strengthen your faith
            and deepen your spiritual journey.
          </p>
          <Link to="/books/all">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Browse All Books
            </Button>
          </Link>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="container mx-auto py-16">
        <h2 className="font-serif text-3xl font-bold mb-8 text-center">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/books/all" className="group">
              <div className="bg-primary/5 rounded-lg p-8 text-center transition-all group-hover:bg-primary/10">
                <h3 className="font-serif text-2xl font-semibold mb-4">All Books</h3>
                <p className="text-gray-600 mb-4">
                  Browse our complete collection of spiritual literature
                </p>
                <Button variant="link" className="text-primary">
                  View All →
                </Button>
              </div>
            </Link>
            <Link to="/books/free" className="group">
              <div className="bg-primary/5 rounded-lg p-8 text-center transition-all group-hover:bg-primary/10">
                <h3 className="font-serif text-2xl font-semibold mb-4">Free Books</h3>
                <p className="text-gray-600 mb-4">
                  Access our collection of free spiritual resources
                </p>
                <Button variant="link" className="text-primary">
                  View Free Books →
                </Button>
              </div>
            </Link>
            <Link to="/books/paid" className="group">
              <div className="bg-primary/5 rounded-lg p-8 text-center transition-all group-hover:bg-primary/10">
                <h3 className="font-serif text-2xl font-semibold mb-4">Premium Books</h3>
                <p className="text-gray-600 mb-4">
                  Explore our premium selection of in-depth teachings
                </p>
                <Button variant="link" className="text-primary">
                  View Premium →
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: info@holyarmyfellowship.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to receive updates about new books and events.</p>
              <Button className="w-full">Subscribe</Button>
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