import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tasks as initialTasks } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal, Bot, Sparkles } from "lucide-react";

const columns = [
  { title: 'Todo', status: 'todo' },
  { title: 'In Progress', status: 'in progress' },
  { title: 'Done', status: 'done' },
];

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Task Management</h2>
          <p className="text-muted-foreground">Kanban board with AI-driven task recommendations.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Sparkles className="mr-2 h-4 w-4" />
                AI Recommend
            </Button>
            <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Task
            </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.status} className="bg-muted/30 rounded-xl p-4 border border-muted/50">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm uppercase tracking-wider">{column.title}</h3>
                    <Badge variant="secondary" className="h-5 min-w-[20px] px-1 justify-center rounded-full text-[10px]">
                        {initialTasks.filter(task => task.status === column.status).length}
                    </Badge>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal size={14} /></Button>
            </div>
            <div className="space-y-3">
              {initialTasks
                .filter(task => task.status === column.status)
                .map(task => (
                  <Card key={task.id} className="group hover:border-primary/50 transition-colors shadow-sm cursor-grab active:cursor-grabbing">
                    <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline" className="text-[10px] border-primary/20 text-primary font-bold">
                                {task.id}
                            </Badge>
                            {task.status === 'in progress' && (
                                <Bot size={14} className="text-primary animate-pulse" />
                            )}
                        </div>
                        <p className="text-sm font-medium leading-tight mb-2">{task.title}</p>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex -space-x-2">
                                <img className="h-6 w-6 rounded-full border-2 border-background" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                                <img className="h-6 w-6 rounded-full border-2 border-background" src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                            </div>
                            <div className="text-[10px] text-muted-foreground font-medium uppercase">High Priority</div>
                        </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="ghost" className="w-full justify-start text-muted-foreground text-xs hover:text-foreground">
                    <Plus size={14} className="mr-2" />
                    Add Task
                </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
