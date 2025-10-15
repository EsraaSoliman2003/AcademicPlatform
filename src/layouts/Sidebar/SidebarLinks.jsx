import { Link, useLocation } from "react-router-dom";

export default function SidebarLinks({ links, onLinkClick }) {
  const location = useLocation();

  return (
    <nav className="flex-1 p-5 space-y-2">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            onClick={onLinkClick}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-lg
              transition-all duration-300 ease-in-out
              hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
              dark:hover:from-blue-900/30 dark:hover:to-purple-900/30
              hover:shadow-md
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 text-blue-700 dark:text-blue-200 font-semibold shadow-md"
                  : "text-gray-700 dark:text-gray-300"
              }
            `}
          >
            <span className="p-1 rounded-full">{link.icon}</span>
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
