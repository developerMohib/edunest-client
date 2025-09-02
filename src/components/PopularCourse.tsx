import { products } from '@/utils/category';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const PopularCourse: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Products
        </h1>

        {/* Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products?.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={500} height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 text-gray-800 p-2 rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white">
                    <i className="fas fa-heart" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </button>
                </div>
                {product.tag && (
                  <span
                    className={`${product.tag.color} text-white text-xs font-bold px-2 py-1 rounded-full absolute top-4 left-4`}
                  >
                    {product.tag.text}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{product.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-indigo-600">
                      {product.price}
                    </p>
                    {product.oldPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        {product.oldPrice}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const fullStars = Math.floor(product.rating);
                      const halfStar = product.rating % 1 !== 0 && i === fullStars;
                      return (
                        <i
                          key={i}
                          className={
                            i < fullStars
                              ? "fas fa-star"
                              : halfStar
                              ? "fas fa-star-half-alt"
                              : "far fa-star"
                          }
                        />
                      );
                    })}
                  </div>
                  <span className="text-gray-500 text-xs ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Example: Flip card can stay separate */}
          <div className="perspective-1000 h-[480px] group">
            {/* ... same flip card code as before ... */}
          </div>
        </div>

        {/* Featured Floating Product */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-white/90 font-semibold mb-2">
                LIMITED EDITION
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Premium Wireless Earbuds
              </h2>
              <p className="text-white/80 mb-6">
                Experience crystal-clear sound with our latest noise-cancelling
                technology and 24-hour battery life.
              </p>
              <div className="flex items-center mb-6">
                <div className="text-yellow-300 mr-2">
                    <FaStar />
                </div>
                <span className="text-white/80 text-sm">
                  4.9/5 (1,240 reviews)
                </span>
              </div>
              <div className="flex items-end gap-4 mb-6">
                <span className="text-3xl font-bold text-white">$149.99</span>
                <span className="text-lg text-white/60 line-through">
                  $199.99
                </span>
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  25% OFF
                </span>
              </div>
              <button className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 w-fit flex items-center gap-2">
                <i className="fas fa-bolt" /> Shop Now
              </button>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-8">
              <Image
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1032&q=80"
                alt="Wireless Earbuds"
                className="max-h-80 object-contain animate-bounce" width={500} height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PopularCourse;