import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaBell, FaChartBar, FaHome, FaUser } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const page = () => {
      return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaHome className="w-5 h-5 mr-2" />
            Overview
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaChartBar className="w-5 h-5 mr-2" />
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <CiSettings className="w-5 h-5 mr-2" />
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button className="md:hidden mr-4">
              <HiMenuAlt3  className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Welcome Back!</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button>
              <FaBell className="w-6 h-6 text-gray-600" />
            </button>
            <button>
              <FaUser className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Stats */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
              <p className="text-sm text-green-500 mt-1">+5% from last month</p>
            </div>

            {/* Card 2: Revenue */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">$12,345</p>
              <p className="text-sm text-green-500 mt-1">+10% from last month</p>
            </div>

            {/* Card 3: Activity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-600">User A signed up</li>
                <li className="text-sm text-gray-600">User B made a purchase</li>
                <li className="text-sm text-gray-600">User C updated profile</li>
              </ul>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-lg font-semibold text-gray-800">Performance Chart</h3>
              <div className="mt-4 h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart Placeholder (Add Chart.js or Recharts here)</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    );
};

export default page;