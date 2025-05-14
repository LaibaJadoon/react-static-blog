import PostCard from "../Home/PostCard";
// Sample data holding multiple blog post objects
const postData = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1714618946021-8fbd6394d1a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fDB8fHww",
    tags: ["Tech", "AI", "Innovation"],
    title: "The Future of Artificial Intelligence",
    description:
      "AI is shaping the future of tech. From self-driving cars to voice assistants, the possibilities are endless...",
    link: "/post/1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Design", "UX", "UI"],
    title: "The Importance of UX/UI in Modern Applications",
    description:
      "Good UX/UI design can make or break your application. It's essential to focus on user experience to stand out...",
    link: "/post/2",
  },
  {
    image:
"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ0dXB8ZW58MHx8MHx8fDA%3D",
    tags: ["Programming", "Tips", "Best Practices"],
    title: "Top 10 Programming Tips for Beginners",
    description:
      "Starting out in programming? Here are the top 10 tips that will help you write cleaner, more efficient code...",
    link: "/post/3",
  },
  {
    image:
"https://images.unsplash.com/photo-1667984390527-850f63192709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    tags: ["Security", "Tech", "Guide"],
    title: "Cybersecurity Essentials Everyone Should Know",
    description:
      "Protecting your data online is more important than ever. Learn the basics of cybersecurity and how to stay safe...",
    link: "/post/4",
  },
  {
    image:
"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Innovation", "Future", "Tech"],
    title: "How Tech Innovations Are Shaping the World",
    description:
      "From AI to quantum computing, explore the innovations that are redefining our world and what's coming next...",
    link: "/post/5",
  },
  {
    image:
"https://media.istockphoto.com/id/1334575820/photo/business-woman-using-mobile-smartphone-on-global-network-connection-and-data-customer.webp?a=1&b=1&s=612x612&w=0&k=20&c=exzeKDLNUYiXd3bJi5wibch3oJcKy6GKQM508so1Ams=", 
    tags: ["Web Dev", "Frontend", "React"],
    title: "Getting Started with React in 2025",
    description:
      "React continues to dominate the frontend world. Here's your guide to getting started with React in 2025...",
    link: "/post/6",
  },
];

const CardsContainer = () => {
  return (
    <div className="flex justify-center my-2 w-full px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[85vw]">
        {postData.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
