'use client';

import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard Overview";
    const page = pathname.split("/").pop();
    return page ? page.charAt(0).toUpperCase() + page.slice(1) : "Dashboard";
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {getPageTitle()}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Here&apos;s your learning progress.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="sr-only">Notifications</span>
            <span className="text-xl">🔔</span>
          </button>
          
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">U</span>
          </div>
        </div>
      </div>
    </header>
  );
}