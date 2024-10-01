import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation

const BlogCards = () => {
  const blogs = [
    {
      id: 1,
      title: 'Want the Power Company to Start Paying You?',
      image: 'blog1.webp',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    {
      id: 2,
      title: 'How Rooftop Solar and Land Conservation Can Work Together to Benefit the Environment',
      image: 'blog3.webp',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    {
      id: 3,
      title: 'Freedom Solar named #1 on list of “6 Commercial Solar Contractors To Watch” by Siteline',
      image: 'blog4.webp',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    {
      id: 4,
      title: '7 Reasons to Upgrade Your Business CCTV System',
      image: '/cctvblog1.jpg',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    {
      id: 5,
      title: 'Transforming Security: Verkada’s AI-Powered Search for Faster, Smarter Footage Analysis',
      image: '/cctvblog2.jpg',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    {
      id: 6,
      title: 'Why Professional Security Cameras Are a Smart Investment for Your Business',
      image: '/cctvblog3.jpg',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    {
      id: 7,
      title: 'CCTV Service Repair',
      image: '/cctvblog4.webp',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    {
      id: 8,
      title: 'Best Solar Repair Companies on the Gold Coast',
      image: '/solarblog4.jpg',
      date: 'Aug 30, 2024',
      details: 'This is a detailed blog description.',
    },
    // Add more blogs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="relative border rounded-lg overflow-hidden shadow-lg bg-white"
          >
            {/* Image Section */}
            <img
              src={blog.image}
              alt={`Blog ${blog.id}`}
              className="w-full h-48 object-cover"
            />

            {/* Date Box in the top-right corner */}
            <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-md text-xs">
              {blog.date}
            </div>

            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>

              {/* Read More Button */}
              <div className="flex justify-end">
                <span className="text-blue-600 hover:underline flex items-center">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
