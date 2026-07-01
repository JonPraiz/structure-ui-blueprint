import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";
import { TrendingUp, TrendingDown, Bot, Sparkles, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", engagement: 4000, growth: 2400 },
  { month: "Feb", engagement: 3000, growth: 1398 },
  { month: "Mar", engagement: 2000, growth: 9800 },
  { month: "Apr", engagement: 2780, growth: 3908 },
  { month: "May", engagement: 1890, growth: 4800 },
  { month: "Jun", engagement: 2390, growth: 3800 },
];

const chartConfig = {
  engagement: {
    label: "Engagement",
    color: "hsl(var(--primary))",
  },
  growth: {
    label: "Growth",
    color: "hsl(var(--accent))",
  },
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">AI Analytics & Reports</h2>
          <p className="text-muted-foreground">Strategic insights powered by organizational data.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
            </Button>
            <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
                <CardTitle>Member Growth Trends</CardTitle>
                <CardDescription>Monthly growth and engagement across the organization.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area type="monotone" dataKey="growth" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorGrowth)" strokeWidth={2} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <Card className="col-span-1 border-primary/20 bg-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    AI Strategic Summary
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <TrendingUp size={18} />
                        <span>Growth Spike</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Organization growth increased by 22% in March following the 'Community Gala' event.
                    </p>
                </div>
                <div className="space-y-2 border-t pt-4">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                        <Sparkles size={18} />
                        <span>AI Recommendation</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                        "Focus on youth-oriented programs in June to sustain the current momentum. Data shows a high conversion rate from high-school age groups."
                    </p>
                </div>
                <div className="space-y-2 border-t pt-4">
                    <div className="flex items-center gap-2 text-accent font-semibold">
                        <TrendingDown size={18} />
                        <span>Retention Warning</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Member retention in the 'Volunteer' role is dipping. Consider implementing the AI-suggested rewards program.
                    </p>
                </div>
                <Button className="w-full mt-4" variant="secondary">View Full Strategic Plan</Button>
            </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
              <CardHeader>
                  <CardTitle className="text-sm font-medium">Activity Rate</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">84.2%</div>
                  <div className="flex items-center text-xs text-green-600">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +5.4% from last month
                  </div>
              </CardContent>
          </Card>
          <Card>
              <CardHeader>
                  <CardTitle className="text-sm font-medium">Doc Generation</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                      Across all departments
                  </div>
              </CardContent>
          </Card>
          <Card>
              <CardHeader>
                  <CardTitle className="text-sm font-medium">Budget Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                   <div className="flex items-center text-xs text-green-600">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +2% improvement
                  </div>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
