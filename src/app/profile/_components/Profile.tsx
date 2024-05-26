"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Profile() {
    return (
        <div className="grid gap-8">
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage src="https://github.com/blck-snwmn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight">blck-snwmn</h2>
                    <p className="text-muted-foreground">Test</p>
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us a little about yourself" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                    <SelectTrigger id="role">
                        <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="engineer">Engineer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit">Submit</Button>
        </div>
    );
}
