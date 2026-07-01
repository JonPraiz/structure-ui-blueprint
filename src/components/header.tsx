import { Bell, Search, Menu, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const mockNotifications = [
  { id: 1, text: "AI generated a new event plan for 'Youth Conference'", time: "5m ago", type: "ai" },
  { id: 2, text: "John Doe joined the organization", time: "1h ago", type: "user" },
  { id: 3, text: "Budget for Q3 has been finalized", time: "2h ago", type: "system" },
];

export default function Header() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(p => p !== '');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-16 border-b bg-card px-4 md:px-6 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md bg-card/80">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden md:flex items-center text-sm font-medium">
          <span className="text-muted-foreground">App</span>
          {pathParts.map((part, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-2 text-muted-foreground/50">/</span>
              <span className={index === pathParts.length - 1 ? "text-foreground" : "text-muted-foreground capitalize"}>
                {part.replace(/-/g, ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
        <div className="relative hidden lg:block w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search anything..."
            className="w-full bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary h-9 rounded-lg pl-8"
          />
        </div>

        <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden">
                <DropdownMenuLabel className="p-4 border-b">Notifications</DropdownMenuLabel>
                <div className="max-h-[300px] overflow-y-auto">
                    {mockNotifications.map((n) => (
                        <DropdownMenuItem key={n.id} className="p-4 border-b last:border-0 flex flex-col items-start gap-1 cursor-pointer">
                            <p className="text-sm font-medium leading-none">{n.text}</p>
                            <p className="text-xs text-muted-foreground">{n.time}</p>
                        </DropdownMenuItem>
                    ))}
                </div>
                <div className="p-2 border-t text-center">
                    <Button variant="ghost" size="sm" className="text-xs text-primary">View all notifications</Button>
                </div>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
