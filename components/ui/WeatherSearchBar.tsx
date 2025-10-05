"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const WeatherSearchBar = ({ searchTerm }: { searchTerm: string }) => {
    const [searchQuery, setSearchQuery] = useState(searchTerm || "");
    const router = useRouter();

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        router.push(`?city=${query}`);
    };

    return (
        <div className="flex gap-2 items-center">
            <Input
                type="text"
                className="rounded-full p-6 max-w-4/5 lg:max-w-2/3 bg-surface-light text-secondary border border-accent-blue focus-within:ring-2 focus-within:ring-accent-blue focus-within:outline-none"
                placeholder="Search City ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button size="icon" variant="outline" className="cursor-pointer" onClick={() => handleSearch(searchQuery)}>
                <Search size={24} />
            </Button>
        </div>
    );
};

export default WeatherSearchBar;
