import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const stakeholderAccess = [
    { name: "Students", href: "#students" },
    { name: "Teachers", href: "#teachers" },
    { name: "Employers", href: "#employers" },
    { name: "Administrators", href: "#admin" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-maharashtra rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ME</span>
              </div>
              <div>
                <h1 className="text-lg font-display font-semibold text-foreground">
                  Maharashtra Education
                </h1>
                <p className="text-xs text-muted-foreground">Blockchain Powered</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-saffron group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Stakeholder Access Dropdown & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <Button variant="ghost" className="flex items-center space-x-1">
                <span>Quick Access</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {stakeholderAccess.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <Button variant="maharashtra" size="lg">
              Login / Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Quick Access:</p>
                {stakeholderAccess.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="pt-4">
                <Button variant="maharashtra" className="w-full">
                  Login / Register
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;