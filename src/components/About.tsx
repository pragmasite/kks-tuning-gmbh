import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stat1, value: "5+" },
    { label: t.about.stat2, value: "200+" },
    { label: t.about.stat3, value: "95%" },
  ];

  return (
    <section id="uber-uns" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 overflow-hidden rounded-2xl shadow-medium"
          >
            <img
              src="/images/img-2.jpg"
              alt="Workshop"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <span className="text-sm uppercase tracking-widest text-accent font-medium">
                {t.about.label}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2">
                {t.about.title1}
                <br />
                <span className="text-accent">{t.about.title2}</span>
              </h2>
            </div>

            <p className="mb-4 text-lg text-foreground/80 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="mb-8 text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {t.about.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg bg-background p-6 text-center shadow-soft">
              <div className="font-serif text-3xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
