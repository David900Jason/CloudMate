import {
    Settings,
    LogOut,
    LayoutDashboard,
    PieChart,
    MapPin,
    Calendar,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Sidebar = () => {
    return (
        <aside className="h-screen p-4 flex flex-col gap-8 sticky top-0 left-0 bg-surface-light">
            <header>
                <Image className="hidden sm:block" src="/logo.png" alt="Logo" width={64} height={64} />
            </header>
            <main className="flex-1">
                <ul className="space-y-3 flex flex-col gap-6 items-center">
                    <li>
                        <LayoutDashboard size={24} />
                    </li>
                    <li>
                        <PieChart size={24} />
                    </li>
                    <li>
                        <MapPin size={24} />
                    </li>
                    <li>
                        <Calendar size={24} />
                    </li>
                    <li>
                        <LogOut size={24} />
                    </li>
                </ul>
            </main>
            <footer className="mx-auto">
                <Button className="cursor-pointer" variant="ghost" size="icon">
                    <Settings size={24} />
                </Button>
            </footer>
        </aside>
    );
};

export default Sidebar;
