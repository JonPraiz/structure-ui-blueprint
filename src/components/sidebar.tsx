import { Home, BarChart, Users, FileText, Calendar, Settings, LayoutGrid } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/app/dashboard', icon: Home },
  { name: 'Tasks', href: '/app/tasks', icon: LayoutGrid },
  { name: 'Members', href: '/app/members', icon: Users },
  { name: 'Events', href: '/app/events', icon: Calendar },
  { name: 'Calendar', href: '/app/calendar', icon: Calendar },
  { name: 'Documents', href: '/app/documents', icon: FileText },
  { name: 'Reports', href: '/app/reports', icon: BarChart },
];

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div className="hidden md:flex md:flex-col md:w-64 border-r bg-card">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <Link to="/app/dashboard" className="flex items-center flex-shrink-0 px-4 mb-6">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mr-2 shadow-lg shadow-primary/20">
            <span className="text-primary-foreground font-bold">S</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Structure</h1>
        </Link>
        <nav className="flex-1 px-3 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`
              }
            >
              <item.icon className={`mr-3 h-5 w-5 transition-colors`} aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      
      <div className="px-3 py-4 border-t">
        <NavLink
            to="/app/settings"
            className={({ isActive }) =>
            `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors mb-4 ${
                isActive
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`
            }
        >
            <Settings className="mr-3 h-5 w-5" />
            Settings
        </NavLink>
        
        <Link to="#" className="flex items-center px-3 py-2 group hover:bg-muted rounded-lg transition-colors">
          <img
            className="h-9 w-9 rounded-full object-cover border-2 border-primary/20"
            src={user?.avatarUrl}
            alt="User avatar"
          />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-foreground truncate">
              {user?.name}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Administrator
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
