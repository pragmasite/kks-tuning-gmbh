import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 505 28 25",
      href: "tel:+41795052825",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "tuning.kks@gmail.com",
      href: "mailto:tuning.kks@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Solothurnerstrasse 341, 4600 Olten",
      href: "https://maps.google.com/?q=Solothurnerstrasse+341,+4600+Olten",
    },
  ];

  return (
    <section id="kontakt" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 rounded-lg border border-border bg-background p-6 hover:border-accent hover:shadow-medium transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg border border-accent/30 bg-accent/5 p-6 mt-8"
            >
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Öffnungszeiten</p>
                  <div className="space-y-1 text-sm text-foreground/70">
                    <p>Mo - Fr: 08:00 - 18:00</p>
                    <p>Sa: 09:00 - 14:00</p>
                    <p>So: Geschlossen</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full min-h-96 rounded-2xl overflow-hidden shadow-medium"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.8819826633507!2d7.884371!3d47.346113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791848f1234abcd%3A0x123456789!2sSolothurnerstrasse%20341%2C%204600%20Olten!5e0!3m2!1sde!2sch!4v1234567890123"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <a href="tel:+41795052825">
              <Phone className="mr-2 h-5 w-5" />
              {t.contact.callNow}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
