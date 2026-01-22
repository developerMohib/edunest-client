'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: "📊" },
  { name: "Courses", href: "/dashboard/courses", icon: "📚" },
  { name: "Progress", href: "/dashboard/progress", icon: "🎯" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary">EduNest</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const baseClasses = "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors";
          const activeClasses = "bg-primary text-white";
          const inactiveClasses = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";
          
          const linkClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={linkClasses}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              User Name
            </p>
            <p className="text-xs text-gray-500 truncate">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}