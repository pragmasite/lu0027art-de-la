import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brush, Home, Palette, Wrench } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const icons = [Brush, Home, Palette, Wrench];

  return (
    <section id="prestations" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.2 }} className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{t.services.description}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.3 }} className="grid gap-8 md:grid-cols-2">
          {t.services.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-lg bg-card p-8 border border-border hover:border-accent hover:shadow-soft transition-all">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
