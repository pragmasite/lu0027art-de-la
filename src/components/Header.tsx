import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.services, href: "#prestations" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#horaires" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>ART PEINTURE</span>
          <span className={`text-xs tracking-widest font-medium ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>{t.nav.profession}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <Link to={otherLangPath} className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
            <a href="tel:+41767441984">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}

            <div className="border-t border-border pt-4 mt-4 flex items-center gap-4">
              <Link to={otherLangPath} className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                <Globe className="h-4 w-4" />
                {otherLang.toUpperCase()}
              </Link>

              <Button asChild size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                <a href="tel:+41767441984">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
