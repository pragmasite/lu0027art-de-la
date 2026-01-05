import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    { icon: Phone, label: t.contact.phone, value: "+41 76 744 19 84", href: "tel:+41767441984" },
    { icon: Mail, label: t.contact.email, value: "mickaeldemestre85@gmail.com", href: "mailto:mickaeldemestre85@gmail.com" },
    { icon: MapPin, label: t.contact.address, value: "Chemin du Breuille 5, 2812 Movelier, CH", href: "https://maps.google.com/?q=47.410587,7.318532" },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.2 }} className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">
            {t.contact.title1} <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 mb-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ delay: 0.3 }} className="space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex gap-4 p-6 rounded-lg bg-background border border-border hover:border-accent hover:shadow-soft transition-all">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              );
            })}

            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 mt-6">
              <a href="tel:+41767441984">{t.contact.callNow}</a>
            </Button>
          </motion.div>

          {/* Google Maps */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ delay: 0.4 }} className="rounded-lg overflow-hidden border border-border shadow-soft h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.8234567890!2d7.318532!3d47.410587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b5c7b5c7b5c7b%3A0x5c7b5c7b5c7b5c7b!2sChemin%20du%20Breuille%205%2C%202812%20Movelier!5e0!3m2!1sfr!2sch!4v1234567890"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
