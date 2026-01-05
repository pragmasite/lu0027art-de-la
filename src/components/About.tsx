import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: "10+", label: t.about.stat1 },
    { value: "50+", label: t.about.stat2 },
    { value: "98%", label: t.about.stat3 },
  ];

  return (
    <section id="a-propos" ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.2 }} className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">
            {t.about.title1} <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ delay: 0.3 }}>
            <p className="text-lg text-foreground/80 mb-6">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ delay: 0.4 }} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-lg bg-background p-6 text-center border border-border">
                <div className="font-serif text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.5 }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.about.features.map((feature, i) => (
            <div key={i} className="rounded-lg bg-background p-6 border border-border hover:border-accent transition-colors">
              <h3 className="font-serif text-lg font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
