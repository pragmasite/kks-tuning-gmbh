import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Gallery images with descriptions in both languages
  const galleryData = [
    { src: "/images/img-1.jpg", alt_de: "Professionelle Werkstatt", alt_en: "Professional Workshop" },
    { src: "/images/img-2.jpg", alt_de: "Aluminium Felgen", alt_en: "Aluminum Wheels" },
    { src: "/images/img-3.jpg", alt_de: "Reifenwechsel Service", alt_en: "Tire Change Service" },
    { src: "/images/img-4.jpg", alt_de: "Tuning Auto", alt_en: "Tuned Vehicle" },
    { src: "/images/img-6.jpg", alt_de: "Interior Beleuchtung", alt_en: "Interior Lighting" },
  ];

  const { lang } = useLanguage();
  const images = galleryData.map(img => ({
    ...img,
    alt: lang === "de" ? img.alt_de : img.alt_en
  }));

  return (
    <section id="galerie" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.gallery.title}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 rounded-full bg-background/80 p-2 text-foreground hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="mt-4 text-center text-white text-lg font-medium">
                {images[selectedIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
