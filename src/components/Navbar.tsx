import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Campaigns", "How It Works", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="OrigoAid" className="h-14 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          <Button size="sm">Start a Campaign</Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm font-medium text-muted-foreground hover:text-primary py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1">Log In</Button>
            <Button size="sm" className="flex-1">Start a Campaign</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
