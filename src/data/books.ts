export const booksData = [
  {
    id: "1",
    title: "The Power of Prayer",
    author: "Rev. John Smith",
    price: 9.99,
    coverImage: "/placeholder.svg",
    category: "paid",
    language: "English",
    genre: "biblical study",
  },
  {
    id: "2",
    title: "Daily Devotional",
    author: "Pastor Sarah Johnson",
    price: 0,
    coverImage: "/placeholder.svg",
    category: "free",
    isFree: true,
    language: "English",
    genre: "devotional",
  },
  {
    id: "3",
    title: "Walking in Faith",
    author: "Dr. Michael Brown",
    price: 14.99,
    coverImage: "/placeholder.svg",
    category: "paid",
    language: "Spanish",
    genre: "testimonial",
  },
  {
    id: "4",
    title: "Biblical Leadership",
    author: "Pastor David Wilson",
    price: 12.99,
    coverImage: "/placeholder.svg",
    category: "paid",
    language: "French",
    genre: "character study",
  },
  {
    id: "5",
    title: "Introduction to Christianity",
    author: "Dr. Emily White",
    price: 0,
    coverImage: "/placeholder.svg",
    category: "free",
    isFree: true,
    language: "English",
    genre: "biblical study",
  },
];

export const genres = [
  "autobiography",
  "biblical study",
  "biography",
  "character study",
  "children",
  "devotional",
  "testimonial",
] as const;

export const getLanguages = () => {
  const languages = new Set(booksData.map(book => book.language));
  return Array.from(languages);
};

export const getAuthorStats = () => {
  const authorStats = booksData.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  return authorStats;
};