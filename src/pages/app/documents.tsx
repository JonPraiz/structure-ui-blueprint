import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, Search, Plus, Download, FileJson, FileSpreadsheet, Bot, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mockDocs = [
  { id: 1, name: "Q3 Financial Report.pdf", type: "PDF", size: "2.4 MB", date: "2024-07-12", author: "Tom Cook" },
  { id: 2, name: "Project Structure Proposal.docx", type: "DOCX", size: "1.1 MB", date: "2024-07-10", author: "Sarah Wilson" },
  { id: 3, name: "Member Directory 2024.xlsx", type: "XLSX", size: "4.8 MB", date: "2024-06-25", author: "AI System" },
  { id: 4, name: "Bylaws Update Draft.pdf", type: "PDF", size: "0.8 MB", date: "2024-06-15", author: "John Doe" },
];

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Document Center</h2>
          <p className="text-muted-foreground">Manage organization files and generate professional content with AI.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Upload
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
                <Bot className="mr-2 h-4 w-4" />
                AI Generator
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>Recent Documents</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search documents..."
                                className="pl-8"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase border-b">
                                <tr>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Author</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Size</th>
                                    <th className="px-4 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockDocs.map((doc) => (
                                    <tr key={doc.id} className="border-b hover:bg-muted/50 transition-colors">
                                        <td className="px-4 py-4 flex items-center font-medium">
                                            {doc.type === 'PDF' && <FileJson className="mr-2 h-4 w-4 text-destructive" />}
                                            {doc.type === 'DOCX' && <FileText className="mr-2 h-4 w-4 text-primary" />}
                                            {doc.type === 'XLSX' && <FileSpreadsheet className="mr-2 h-4 w-4 text-green-600" />}
                                            {doc.name}
                                        </td>
                                        <td className="px-4 py-4">{doc.author}</td>
                                        <td className="px-4 py-4 text-muted-foreground">{doc.date}</td>
                                        <td className="px-4 py-4 text-muted-foreground">{doc.size}</td>
                                        <td className="px-4 py-4 text-right">
                                            <Button variant="ghost" size="icon">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        AI Power Ups
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-3 bg-background rounded-lg border border-primary/10 hover:border-primary/30 cursor-pointer transition-all group">
                        <p className="text-sm font-semibold group-hover:text-primary">Generate Report</p>
                        <p className="text-xs text-muted-foreground mt-1">Create weekly/monthly performance summaries.</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border border-primary/10 hover:border-primary/30 cursor-pointer transition-all group">
                        <p className="text-sm font-semibold group-hover:text-primary">Draft Proposal</p>
                        <p className="text-xs text-muted-foreground mt-1">AI-written business and project proposals.</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border border-primary/10 hover:border-primary/30 cursor-pointer transition-all group">
                        <p className="text-sm font-semibold group-hover:text-primary">Summarize Docs</p>
                        <p className="text-xs text-muted-foreground mt-1">Get key takeaways from large PDF files.</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border border-primary/10 hover:border-primary/30 cursor-pointer transition-all group">
                        <p className="text-sm font-semibold group-hover:text-primary">Template Gallery</p>
                        <p className="text-xs text-muted-foreground mt-1">Professional pre-made AI templates.</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Storage Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Used: 4.2 GB</span>
                            <span className="font-semibold">42%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full w-[42%]" />
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">You are currently using 4.2 GB of your 10 GB limit.</p>
                    <Button variant="link" className="p-0 h-auto text-xs text-primary">Upgrade Storage</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
