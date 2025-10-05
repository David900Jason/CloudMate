import Image from "next/image";
import WeatherSearchBar from "../ui/WeatherSearchBar";

const Navbar = ({ searchTerm }: { searchTerm: string }) => {
    return (
        <nav className="flex items-center p-4 justify-between">
            {/* Search bar */}
            <div className="flex-1/2">
                <WeatherSearchBar searchTerm={searchTerm} />
            </div>

            {/* Logo */}
            <div className="flex-1/2 flex justify-end gap-2 items-center">
                <Image
                    className="rounded-full"
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <h2 className="text-2xl font-bold">Sky Cast</h2>
            </div>
        </nav>
    );
};

export default Navbar;
