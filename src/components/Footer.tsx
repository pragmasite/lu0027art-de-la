import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">ART PEINTURE</h3>
            <p className="text-sm text-white/70">{t.footer.tagline}</p>
            <p className="text-xs text-white/60 mt-4">{t.footer.description}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41767441984" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +41 76 744 19 84
                </a>
              </li>
              <li>
                <a href="mailto:mickaeldemestre85@gmail.com" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  mickaeldemestre85@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#prestations" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} L'ART DE LA PEINTURE, DEMESTRE. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
