interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  instructor: string;
  duration: string;
  level: string;
  oldPrice?: string;
  tag?: { text: string; color: string };
  rating: number; // e.g. 4.5
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Learn MERN stack (MongoDB, Express, React, Node.js) with real-world projects.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1068&q=80",
    price: "$149.99",
    oldPrice: "$199.99",
    tag: { text: "POPULAR", color: "bg-indigo-500" },
    rating: 4.7,
    reviews: 1240,
    instructor: "John Doe",
    duration: "12 weeks",
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description:
      "Master Python, Pandas, NumPy, and ML models with hands-on projects.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1068&q=80",
    price: "$199.99",
    oldPrice: "$249.99",
    tag: { text: "NEW", color: "bg-green-500" },
    rating: 4.8,
    reviews: 980,
    instructor: "Jane Smith",
    duration: "14 weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    description:
      "Learn Figma, Adobe XD, wireframing, prototyping, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1068&q=80",
    price: "$129.99",
    oldPrice: "$179.99",
    rating: 4.6,
    reviews: 670,
    instructor: "Emily Johnson",
    duration: "10 weeks",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    description:
      "Understand ethical hacking, penetration testing, and network security.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1068&q=80",
    price: "$179.99",
    oldPrice: "$229.99",
    tag: { text: "SALE", color: "bg-red-500" },
    rating: 4.5,
    reviews: 420,
    instructor: "Michael Brown",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    description: "SEO, Google Ads, Social Media, Email Marketing & Analytics.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1068&q=80",
    price: "$99.99",
    oldPrice: "$149.99",
    rating: 4.4,
    reviews: 560,
    instructor: "Sophia Lee",
    duration: "6 weeks",
    level: "All Levels",
  },
];
