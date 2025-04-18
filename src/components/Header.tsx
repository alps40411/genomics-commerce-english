
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">iGenomics</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <a href="#products" className="text-sm font-medium hover:text-primary">
                Products
              </a>
              <a href="#services" className="text-sm font-medium hover:text-primary">
                Services
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary">
                About Us
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-64">
              <Input 
                type="search"
                placeholder="Search products..."
                className="pl-8"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
