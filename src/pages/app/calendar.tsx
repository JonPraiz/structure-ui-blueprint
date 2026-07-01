import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Bot } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const days = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= days; i++) {
    calendarDays.push(i);
  }

  const events = [
    { day: 5, title: "Team Sync", type: "meeting" },
    { day: 12, title: "AI Plan Review", type: "ai" },
    { day: 15, title: "Board Meeting", type: "meeting" },
    { day: 22, title: "Community Gala", type: "event" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Calendar</h2>
          <p className="text-muted-foreground">Manage organizational schedules and AI-detected conflicts.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Bot className="mr-2 h-4 w-4" />
                AI Schedule
            </Button>
            <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Event
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">
            {monthNames[month]} {year}
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevMonth}><ChevronLeft size={18} /></Button>
            <Button variant="outline" size="icon" onClick={nextMonth}><ChevronRight size={18} /></Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-7 border-b">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <div key={day} className="py-3 text-center text-sm font-semibold text-muted-foreground border-r last:border-0">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {calendarDays.map((day, idx) => (
              <div key={idx} className={cn(
                "min-h-[120px] p-2 border-b border-r transition-colors hover:bg-muted/30",
                idx % 7 === 6 && "border-r-0",
                day === null && "bg-muted/10"
              )}>
                {day && (
                  <div className="space-y-1">
                    <span className="text-sm font-medium">{day}</span>
                    <div className="space-y-1">
                      {events.filter(e => e.day === day).map((e, eIdx) => (
                        <div key={eIdx} className={cn(
                          "px-1.5 py-0.5 rounded text-[10px] font-bold truncate",
                          e.type === 'meeting' ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                          e.type === 'ai' ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                          "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        )}>
                          {e.title}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2 border-primary/20 bg-primary/5">
              <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 bg-primary rounded-full text-primary-foreground">
                      <Bot size={24} />
                  </div>
                  <div>
                      <h4 className="font-bold">AI Scheduling Assistant</h4>
                      <p className="text-sm text-muted-foreground">
                          "I've detected a potential conflict on the 15th between the 'Board Meeting' and the 'Q3 Budget Review'. Would you like me to suggest a new time?"
                      </p>
                  </div>
                  <Button className="ml-auto whitespace-nowrap">Resolve Conflict</Button>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Upcoming Next 7 Days</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold">Team Sync</span>
                      <span className="text-muted-foreground">Tomorrow, 10 AM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-t pt-2">
                      <span className="font-semibold">Volunteer Workshop</span>
                      <span className="text-muted-foreground">Friday, 2 PM</span>
                  </div>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
