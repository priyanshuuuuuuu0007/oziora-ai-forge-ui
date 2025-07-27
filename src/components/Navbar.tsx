import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Bot, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-smooth hover:scale-105">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Oziora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/marketplace"
              className={`transition-smooth hover:text-primary ${
                isActive("/marketplace") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Marketplace
            </Link>
            <Link
              to="/creators"
              className={`transition-smooth hover:text-primary ${
                isActive("/creators") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              For Creators
            </Link>
            <Link
              to="/about"
              className={`transition-smooth hover:text-primary ${
                isActive("/about") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/checkout">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="default">Explore Agents</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/marketplace"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              to="/creators"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              For Creators
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-3 py-2 space-y-2">
              <Link to="/dashboard">
                <Button variant="outline" className="w-full">
                  Dashboard
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="default" className="w-full">
                  Explore Agents
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;