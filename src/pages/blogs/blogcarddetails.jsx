import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: 'Want the Power Company to Start Paying You?',
      image: '/blog1.webp',
      date: 'Aug 30, 2024',
      details: 'Authored by Bret Biggart How would you like it if, instead of you sending money to the power company every month, the power company sent money to you? Thats the idea behind virtual power plants an innovative energy solution that protects people from extreme weather, lowers energy costs, fortifies the power grid, AND turns rooftop solar owners into potential power generators. Freedom Solar is helping willing customers to sign up for Tesla Electric’s landmark VPP program.',
    },
    {
      id: 2,
      title: 'How Rooftop Solar and Land Conservation Can Work Together to Benefit the Environment',
      image: '/blog3.webp',
      date: 'Aug 30, 2024',
      details:' Solar energy’s applications are numerous and extend far beyond offering homeowners a backup power source. In recent years, the conversation around ground-mounted solar installations and wildlife conservation has been gaining attention—in no small part because of a boom in solar farms nationwide. As the pressing need for renewable energy intensifies, finding ways for solar energy and land conservation to coexist has become crucial. Learn how solar panels positively impact the environment, and how rooftop solar is paving a way for conservationists to harness the infinite energy from the sun. ',
    },
    {
      id: 3,
      title: 'Freedom Solar named #1 on list of “6 Commercial Solar Contractors To Watch” by Siteline',
      image: '/blog4.webp',
      date: 'Aug 30, 2024',
      details:' Most of us have had a solar contractor show up at our doors trying to convince us to install solar panels on our homes. But solar contracting isn’t limited to the panels popping up on residential rooftops. Commercial solar contractors are helping governments, schools, developers, and communities make the switch to solar energy. This article profiles the top commercial solar contractors driving the change toward renewable power. ',
    },
    {
      id: 4,
      title: 'In today’s ever-evolving business landscape, security is a major priority for companies of all sizes and industries. Your business CCTV system is a critical component ...',
      image: '/cctvblog1.jpg',
      date: 'Aug 30, 2024',
      details:' The world of CCTV technology has advanced significantly in recent years. Modern CCTV systems offer high-resolution imaging, low-light capabilities, and even facial recognition. Upgrading your current CCTV system allows you to harness these cutting-edge features such as: Motion-activated recording: Motion-activated recording activates the CCTV cameras to start recording when any motion is detected, this feature helps save space on the hard drive and also can send notifications if motion is detected.',
    },
    {
      id: 5,
      title: 'Transforming Security: Verkada’s AI-Powered Search for Faster, Smarter Footage Analysis',
      image: '/cctvblog2.jpg',
      date: 'Aug 30, 2024',
      details:' At Camera Security Now, we’re excited to share Verkada’s latest breakthrough—AI-powered search, a cutting-edge feature within the Command platform that transforms how users search for people and vehicles within their security footage. By utilizing freeform text search, this new technology allows users to conduct highly detailed searches with unprecedented ease and accuracy. This feature builds on years of innovation in cloud-based search and computer vision, solidifying Verkada’s place as a leader in intelligent security solutions. ',
    },
    {
      id: 6,
      title: 'Why Professional Security Cameras Are a Smart Investment for Your Business',
      image: '/cctvblog3.jpg',
      date: 'Aug 30, 2024',
      details:' When it comes to protecting your business, cutting corners on security isn’t an option. Many business owners make the mistake of opting for consumer-grade security cameras, only to find themselves disappointed by subpar performance, frequent failures, and limited capabilities. Investing in professional security cameras may seem more expensive initially, but it is ultimately a far better decision for your company’s safety, efficiency, and long-term savings.  ',
    },
    {
        id: 7,
        title: 'CCTV Service Repair',
        image: '/cctvblog4.webp',
        date: 'Aug 30, 2024',
        details:' You wouldn’t trust a car that has never gotten an oil change, so why would you trust a CCTV security system that has never been serviced? Closed circuit television (CCTV) security cameras are an effective method of security used in both residential and commercial applications, but unfortunately, not many systems get the care and attention they need to perform their important job properly. If you think you need CCTV service for repair or your security system is due for a checkup, here are some of the most frequently asked questions about CCTV service.  ',
      },
      {
        id: 8,
        title: 'Best Solar Repair Companies on the Gold Coast',
        image: '/solarblog4.jpg',
        date: 'Aug 30, 2024',
        details:' Are you looking for the best solar repair companies on the Gold Coast? You’re in luck because we’ve got you covered! With solar power becoming increasingly popular on the Gold Coast, keeping your solar power system in tip-top shape is crucial to maximise your energy savings.Solar systems need to be serviced and maintained regularly to ensure they function efficiently. Without proper maintenance, minor issues can escalate into significant problems, leading to costly repairs or even the need for complete system replacements. By having a solar repair company inspect your system every 12 months, you can avoid these expensive surprises and keep your solar power system running smoothly.  ',
      },
    
    // Add more blogs as needed
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Main Blog Content */}
        <div className="w-full lg:w-3/4 pr-8">
          {blog ? (
            <div>
              <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover mb-4" />
              <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
              <p className="text-gray-600 mb-4">{blog.date}</p>
              <p className="text-lg">{blog.details}</p>
            </div>
          ) : (
            <p>Blog not found!</p>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 space-y-8">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Related Posts */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
            <ul className="space-y-2">
              <li className="hover:text-indigo-500">
                <a href="/blog/2">Solar Power Benefits for Your Home</a>
              </li>
              <li className="hover:text-indigo-500">
                <a href="/blog/3">How to Save on Energy Bills</a>
              </li>
              <li className="hover:text-indigo-500">
                <a href="/blog/4">CCTV Cameras</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li className="hover:text-indigo-500">
                <a href="/category/solar-panels">Solar Panels</a>
              </li>
              <li className="hover:text-indigo-500">
                <a href="/category/renewable-energy">CCTV Cameras</a>
              </li>
              <li className="hover:text-indigo-500">
                <a href="/category/energy-efficiency">Electronices</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
