import React from 'react';

const PostMain = () => {
  // Static post data (
  const post = {
    title: "Exploring the Future of AI",
    image: "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",
    tags: ["AI", "Innovation", "Technology", "Cloud"],
    description: `Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using it), reasoning (using rules to reach conclusions), and self-correction. AI has become an integral part of modern technology, powering everything from voice assistants like Siri and Alexa to recommendation systems on Netflix and Amazon. Its applications are vast and continually expanding across industries including healthcare, finance, transportation, and education.

One of the most remarkable aspects of AI is its ability to analyze massive amounts of data quickly and accurately. Machine learning, a subset of AI, enables systems to learn from data patterns and improve their performance over time without being explicitly programmed. This has led to breakthroughs in image recognition, natural language processing, and predictive analytics. For example, AI models can detect diseases from medical images, translate languages in real time, or forecast market trends with high precision.

Despite its many advantages, AI also raises important ethical and societal concerns. Issues such as bias in algorithms, data privacy, job displacement due to automation, and the potential misuse of AI in surveillance or weapon systems are hot topics of debate. Many experts advocate for transparent, fair, and responsible AI development to ensure that these technologies benefit society as a whole. Regulations and ethical frameworks are being proposed and adopted around the world to address these challenges.

Moreover, AI is increasingly influencing creative and cognitive fields. From composing music and writing stories to generating art and assisting in scientific discoveries, AI is augmenting human capabilities in unprecedented ways. This collaborative potential between humans and intelligent systems is opening up new avenues for innovation and productivity. However, it also challenges traditional notions of creativity, originality, and intellectual property.

In conclusion, artificial intelligence is a transformative technology that holds great promise for the future. While its potential benefits are vast, its development must be guided by ethical principles and careful consideration of its impact on society. As AI continues to evolve, the focus should be on creating inclusive, accountable systems that enhance human life while minimizing risks and inequalities.`
  };

  return (
<div className="w-full border border-gray-300 rounded-lg p-6">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#E8BA00] text-black text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>

      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto rounded mb-6"
      />

      {/* Full Description */}
      <p className="text-gray-700 whitespace-pre-line">{post.description}</p>
    </div>
  );
};

export default PostMain;