import { products } from '@/utils/category';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { GiJumpAcross } from "react-icons/gi";

const PopularCourse: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-eduBlack">
          Top selling Courses
        </h1>

        {/* Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="group relative shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-eduBorder/20 rounded-md"
            >
              <div className="relative overflow-hidden h-60">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={500} height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <button className="bg-eduWhite text-eduGray p-2 rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-eduRed hover:text-eduWhite cursor-pointer">
                    <FaHeart />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full bg-eduBlue text-eduWhite py-2 rounded-lg font-medium hover:bg-eduGreen transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
                {product.tag && (
                  <span
                    className={`${product.tag.color} text-eduWhite text-xs font-bold px-2 py-1 rounded-full absolute top-4 left-4`}
                  >
                    {product.tag.text}
                  </span>
                )}
              </div>
              <div className="px-5 pt-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-eduBlack">
                        {product.title}
                      </h3>
                      <p className="text-eduGray text-sm">{product.description}</p>
                    </div>
                  </div>

                  <div className="text-eduGreen gap-x-2 flex items-center">
                    <p className="text-lg font-bold text-eduBlue">
                      {product.price}
                    </p>
                    {product.oldPrice && (
                      <p className="text-xs text-eduGray line-through">
                        {product.oldPrice}
                      </p>
                    )}
                  </div>
              </div>
              <div className='p-5'>
                <Link href={`/course-details/${product.id}`}>
                  <button className="w-full bg-eduRed text-eduWhite py-2 rounded-lg font-medium hover:bg-eduBlue transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Floating Product */}
        <div className="mt-16 bg-gradient-to-r from-eduGreen/20 to-eduRed/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-eduBlack font-semibold mb-2 tracking-widest">
                Blooming Out - Let&apos;s Enroll
              </span>
              <h2 className="text-sm font-normal text-eduBlack mb-4">
                Best Selling Ever
              </h2>
              <h2 className="text-3xl font-bold text-eduBlack mb-4">
                Full Stack Web Development
              </h2>
              <p className="text-eduBlack mb-6">
                Learn MERN stack (MongoDB, Express, React, Node.js) with real-world projects.
              </p>
              <div className="flex items-center mb-6">
                <div className="text-yellow-300 mr-2">
                  <FaStar />
                </div>
                <span className="text-eduBlack text-sm">
                  4.9/5 (1,240 reviews)
                </span>
              </div>
              <div className="flex items-end gap-4 mb-6">
                <span className="text-3xl font-bold text-eduBlue">$149.99</span>
                <span className="text-lg text-eduGray line-through">
                  $199.99
                </span>
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  25% OFF
                </span>
              </div>
              <button className="bg-eduBlack text-eduWhite hover:text-eduBlack py-3 px-6 rounded-lg font-bold hover:bg-eduRed transition-colors duration-300 w-fit flex items-center gap-2 cursor-pointer">
                <GiJumpAcross /> Let&apos;s Jump
              </button>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-8">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1068&q=80"
                alt="Full stack web development"
                className="max-h-80 object-contain rounded-md" width={500} height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;