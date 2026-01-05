import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const schedule = [
    { hours: "07:00 - 12:00, 13:30 - 19:00" },
    { hours: "07:00 - 12:00, 13:30 - 19:00" },
    { hours: "07:00 - 12:00, 13:30 - 19:00" },
    { hours: "07:00 - 12:00, 13:30 - 19:00" },
    { hours: "07:00 - 12:00, 13:30 - 19:00" },
    { hours: "07:00 - 12:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="horaires" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.2 }} className="mx-auto max-w-xl">
          <div className="rounded-2xl border bg-card shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold">{t.hours.header}</span>
            </div>

            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center ${isToday ? "bg-primary/5" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-accent" />}
                      <span className={isToday ? "font-semibold text-primary" : ""}>{t.hours.days[i]}</span>
                      {isToday && <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">{t.hours.today}</span>}
                    </div>
                    <span className={isClosed ? "text-muted-foreground" : ""}>{item.hours}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
