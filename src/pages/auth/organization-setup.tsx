import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function OrganizationSetupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 p-4">
      <Card className="w-full max-w-md shadow-xl border-primary/5">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Set Up Your Organization</CardTitle>
          <CardDescription>Tell us a bit about your organization to get started.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="org-name">Organization Name</Label>
                <Input id="org-name" placeholder="e.g., Acme Inc." required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="org-type">Organization Type</Label>
                <Select>
                    <SelectTrigger id="org-type">
                        <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="church">Church</SelectItem>
                        <SelectItem value="ngo">NGO</SelectItem>
                        <SelectItem value="school">School</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit" className="w-full bg-primary">Continue</Button>
        </CardContent>
      </Card>
    </div>
  );
}
