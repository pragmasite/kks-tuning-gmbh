import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Adjust schedule for your business - this is a placeholder
  const schedule = [
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 17:00" },
    { hours: "09:00 - 14:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="offnungszeiten" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl"
        >
          <div className="mb-16 text-center">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              {t.hours.label}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mt-4">
              {t.hours.title}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-background shadow-medium overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b bg-accent/5 px-6 py-4">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg font-semibold">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === adjustedTodayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-accent/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-accent" />}
                      <span
                        className={`font-medium ${
                          isToday ? "text-accent font-semibold" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`font-medium ${
                        isClosed ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
