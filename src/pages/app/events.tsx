import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Calendar, Clock, MapPin, Users, DollarSign, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

export default function EventsPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedEvent, setGeneratedEvent] = useState<any>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedEvent({
        title: "Community Outreach Gala 2024",
        description: "A high-impact fundraising event focused on supporting local youth education programs through networking and silent auctions.",
        schedule: [
          { time: "06:00 PM", task: "Welcome Reception & Cocktail Hour" },
          { time: "07:15 PM", task: "Opening Ceremony & Vision Presentation" },
          { time: "08:00 PM", task: "Dinner & Live Jazz Performance" },
          { time: "09:30 PM", task: "Silent Auction Results & Closing Remarks" },
        ],
        budget: [
          { item: "Venue Rental", cost: "$2,500" },
          { item: "Catering (150 guests)", cost: "$4,500" },
          { item: "Marketing & Publicity", cost: "$1,200" },
          { item: "Entertainment", cost: "$1,500" },
        ],
        aiRecommendations: [
          "Partner with 'Green Grocers' for organic catering sponsorship.",
          "Utilize social media influencers in the 'Local Heroes' category.",
          "Invite alumni from the 2020 program to share testimonials."
        ]
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Smart Event Planner</h2>
          <p className="text-muted-foreground">Plan and manage your organization's events with AI.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Calendar className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 h-fit sticky top-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              AI Event Generator
            </CardTitle>
            <CardDescription>Describe your event and let AI build the plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input id="event-name" placeholder="e.g. Annual Youth Conference" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-desc">Description & Goals</Label>
              <Textarea id="event-desc" placeholder="What is the purpose of this event? Who is the audience?" className="min-h-[100px]" />
            </div>
            <Button 
              className="w-full bg-secondary text-secondary-foreground" 
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? "AI is thinking..." : "Generate Full Event Plan"}
            </Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="wait">
            {!generatedEvent && !isGenerating && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl bg-muted/30"
              >
                <div className="p-4 bg-background rounded-full mb-4 shadow-sm">
                    <Calendar className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Plan Generated Yet</h3>
                <p className="text-muted-foreground text-center max-w-sm">
                  Enter event details on the left and use our AI to generate a professional schedule, budget, and strategy.
                </p>
              </motion.div>
            )}

            {isGenerating && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {[1, 2, 3].map(i => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader><div className="h-6 bg-muted rounded w-1/3"></div></CardHeader>
                    <CardContent><div className="h-20 bg-muted rounded"></div></CardContent>
                  </Card>
                ))}
              </motion.div>
            )}

            {generatedEvent && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <Card className="overflow-hidden border-primary/20">
                  <div className="h-2 bg-primary" />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-accent/20 text-accent hover:bg-accent/30">AI Generated Plan</Badge>
                        <CardTitle className="text-2xl">{generatedEvent.title}</CardTitle>
                      </div>
                      <Button variant="outline" size="sm">Save Plan</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground/80 leading-relaxed italic border-l-4 border-muted pl-4">
                      "{generatedEvent.description}"
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-bold flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                Proposed Schedule
                            </h4>
                            <div className="space-y-3">
                                {generatedEvent.schedule.map((item: any, idx: number) => (
                                    <div key={idx} className="flex gap-4 items-start pb-3 border-b border-muted last:border-0">
                                        <span className="text-sm font-semibold text-primary whitespace-nowrap">{item.time}</span>
                                        <span className="text-sm text-foreground">{item.task}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-primary" />
                                Budget Estimate
                            </h4>
                            <div className="space-y-3">
                                {generatedEvent.budget.map((item: any, idx: number) => (
                                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-muted last:border-0">
                                        <span className="text-sm text-muted-foreground">{item.item}</span>
                                        <span className="text-sm font-semibold text-foreground">{item.cost}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                        <h4 className="font-bold flex items-center gap-2 text-primary">
                            <Sparkles className="h-4 w-4" />
                            AI Strategic Recommendations
                        </h4>
                        <ul className="space-y-2">
                            {generatedEvent.aiRecommendations.map((rec: string, idx: number) => (
                                <li key={idx} className="text-sm flex gap-2">
                                    <span className="text-primary">•</span>
                                    {rec}
                                </li>
                            ))}
                        </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
