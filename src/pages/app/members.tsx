import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { members as initialMembers } from '@/lib/members';
import { Search, Bot, UserPlus, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MembersPage() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const filteredMembers = initialMembers.filter(member =>
        member.name.toLowerCase().includes(term.toLowerCase()) ||
        member.skills.some(skill => skill.toLowerCase().includes(term.toLowerCase()))
      );
      setMembers(filteredMembers);
    } else {
      setMembers(initialMembers);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Members Directory</h2>
        <div className='flex gap-2'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Invite Team
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Invite Team Members</DialogTitle>
                        <DialogDescription>Send invitations to your colleagues to join this organization.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <Input placeholder="email@example.com" />
                        <Button className="w-full">Send Invitation</Button>
                    </div>
                </DialogContent>
            </Dialog>
            <Button className="bg-primary hover:bg-primary/90">Add Member</Button>
        </div>
      </div>
      <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
              type="search"
              placeholder="Search by name or skill..."
              className="w-full md:w-1/3 pl-8 bg-muted/50 border-none"
              value={searchTerm}
              onChange={handleSearch}
          />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map(member => (
          <Card key={member.id} className="group hover:shadow-lg transition-all duration-200 border-primary/5">
            <CardHeader className="items-center pb-2">
                <div className="relative">
                    <img src={member.avatarUrl} alt={member.name} className="w-20 h-20 rounded-full border-2 border-primary/10 group-hover:border-primary/30 transition-colors" />
                    <div className="absolute -bottom-1 -right-1 bg-background p-1 rounded-full shadow-sm">
                        <Bot size={14} className="text-primary" />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-center pb-2">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{member.role}</p>
              <div className="flex flex-wrap justify-center gap-1">
                {member.skills.slice(0, 3).map(skill => (
                    <Badge key={skill} variant="secondary" className="text-[10px] py-0">{skill}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-2 pt-0">
                <div className='flex items-center text-primary font-bold text-xs bg-primary/5 px-2 py-1 rounded-full'>
                    <Sparkles size={12} className="mr-1"/>
                    <span>AI MATCH: {member.aiMatch}%</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-xs">View Full Profile</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
