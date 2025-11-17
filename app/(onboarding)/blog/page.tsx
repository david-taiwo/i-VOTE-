// pages/blog.js
import React from 'react';

const BlogPage = () => {
  return (
    <div className="blog-container">
      {/* Blog Breadcrumb Section */}
      <div className="text-sfPro font-normal text-sm leading-none mb-6">
        <span> / </span>
        <span> Blog </span>
        <span> / </span>
        <span> What To Consider When </span>
      </div>

      {/* Hero Section */}
      <div
        className="bg-cover bg-center p-10 text-white"
        style={{
          backgroundImage: 'url("/blog_hero_img.png")',
        }}
      >
        <div className="max-w-screen-lg mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6">
            What To Consider When Choosing An Online Coaching Platform: A Guide For Coaches
          </h1>

          {/* Date */}
          <p className="text-sfPro text-sm font-normal mb-4">
            SEPT 12, 2025
          </p>

          {/* Description */}
          <p className="text-sfPro text-lg leading-7 mb-6">
            No matter what you do, Teach, coach, create, or lead, Conectr is designed to help you reach your audience and unlock new opportunities.
          </p>

          {/* Buttons */}
          <div className="mb-4">
            <button className="bg-green-500 text-white py-2 px-4 mr-4 rounded-full hover:bg-green-600">
              Coaching
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
              Tag
            </button>
          </div>

          {/* Read Time */}
          <p className="text-sfPro text-sm font-normal">Read time: 14 min</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
