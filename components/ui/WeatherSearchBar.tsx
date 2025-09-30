"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const WeatherSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const newValue = e.target.value;
        setSearchQuery(newValue);
    };

    return (
        <Input
            type="text"
            className="rounded-full p-6 max-w-4/5 lg:max-w-2/3 bg-surface-light text-secondary border border-accent-blue focus-within:ring-2 focus-within:ring-accent-blue focus-within:outline-none"
            placeholder="Search City ..."
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
        />
    );
};

export default WeatherSearchBar;
